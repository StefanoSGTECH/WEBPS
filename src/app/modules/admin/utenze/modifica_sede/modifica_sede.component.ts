import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Pikerv } from 'app/core/piker/Piker.service';
import { Piker } from 'app/core/piker/Piker.types';
import { PikerSede } from 'app/core/piker/PikerGroupAllSede/PikerGroupAllSede.service';
import { UsersService } from 'app/core/users/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modifica_sede',
  templateUrl: './modifica_sede.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Modifica_sedeComponent implements OnInit {

  sedi: string[];
  roules: string[];

  sedeold = new FormControl('');
  sedenew = new FormControl('');

  rouleold = new FormControl('');
  roulenew = new FormControl('');

  groupId: string;
  userId: string;
  sedem: string;
  roule: string;
  firstName: string;
  lastName: string;

  constructor(private router: Router, public _users: UsersService, public _pikerSede: PikerSede, public _piker: Pikerv, private route: ActivatedRoute, private snackBar: MatSnackBar) {
    _pikerSede.pikerGroupAllSede().subscribe((resp) => {
      this.sedi = resp.value;
    });

    _piker.piker('rouleusers').subscribe((resp) => {
      this.roules = resp.value;
    });
  }

  ngOnInit() {
    this.userId = String(this.route.snapshot.paramMap.get('userId'));
    this.groupId = String(this.route.snapshot.paramMap.get('groupId'));
    this.sedem = String(this.route.snapshot.paramMap.get('sede'));
    this.roule = String(this.route.snapshot.paramMap.get('roule'));
    this.firstName = String(this.route.snapshot.paramMap.get('firstName'));
    this.lastName = String(this.route.snapshot.paramMap.get('lastName'));

    this.sedeold = new FormControl(this.sedem);
    this.sedenew = new FormControl(this.sedem);

    const rouleString = this.roule == 'superAdmin' ? 'Super Amministratore' : this.roule == 'admin' ? 'Amministratore' : this.roule == 'supervisor' ? 'Supervisore' : this.roule == 'user' ? 'Utente Normale' : 'error';
    this.rouleold = new FormControl(rouleString);
    this.roulenew = new FormControl(rouleString);
  }

  POPUPMesage(message: string): void {
    this.snackBar.open(message, '!',  {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  modificasede(sede: string, fdati: string): void {
    const roule = fdati == 'Super Amministratore' ? 'superAdmin' : fdati == 'Amministratore' ? 'admin': fdati == 'Supervisore' ? 'supervisor' : fdati == 'Utente Normale' ? 'user': 'error';

    const user = {
      groupId: Number(this.groupId),
      userId: Number(this.userId),
      newSede: sede,
      newRoule: roule
    };

    this._users.editUser(user).subscribe((resp) => {
      if (resp.message.length > 0) {
        this.POPUPMesage(resp.message);
        this.router.navigate(["/utenze"]);
      } else {
        this.router.navigate(["/modifica_sede/"+this.userId+"/"+this.groupId+"/"+this.sedem+"/"+this.roule]);
      }
    });
  }

}
