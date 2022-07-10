import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'app/core/users/users.service';
import { PikerSede } from 'app/core/piker/PikerGroupAllSede/PikerGroupAllSede.service';
import { Pikerv } from 'app/core/piker/Piker.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add_utente',
  templateUrl: './add_utente.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Add_utenteComponent implements OnInit {

  urlImage: string = "https://lh3.googleusercontent.com/d/172A0SF_9kPuO4CB0fTRkF_nRO67J6ssu";
  sede: string[];
  roules: string[];

  constructor(private router: Router, public _users: UsersService, public _pikerSede: PikerSede, public _piker: Pikerv, private route: ActivatedRoute, private snackBar: MatSnackBar) {
    this._pikerSede.pikerGroupAllSede().subscribe((resp) => {
      this.sede = resp.value;
    });

    this._piker.piker("rouleusers").subscribe((resp) => {
      this.roules = resp.value;
    });
  }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  POPUPMesage(message: string): void {
    this.snackBar.open(message, '!',  {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  adduser(nome: string, co: string, email: string, sede: string, fdati: string, password: string, image: string): void {
    if (password != null) {
      const roule = fdati == 'Super Amministratore' ? 'superAdmin' : fdati == 'Amministratore' ? 'admin': fdati == 'Supervisore' ? 'supervisor' : fdati == 'Utente Normale' ? 'user': 'error';

      const user = {
        nome: nome,
        cognome: co,
        email: email,
        sede: sede,
        roule: roule,
        password: password,
        image: image
      };
      this._users.addUser(user).subscribe((resp) => {
        if (resp.message.length > 0) {
          this.POPUPMesage(resp.message)
          this.router.navigate(["/utenze"]);
        } else {
          this.router.navigate(["/add_utente"]);
        }
      });
    }
  }

}
