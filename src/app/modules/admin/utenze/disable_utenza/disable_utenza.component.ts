import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'app/core/users/users.service';

@Component({
  selector: 'app-disable_utenza',
  templateUrl: './disable_utenza.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Disable_utenzaComponent implements OnInit {

  groupId: string;
  userId: string;
  status: number;
  firstName: string;
  lastName: string;

  constructor(private router: Router, public _user: UsersService, private route: ActivatedRoute, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.userId = String(this.route.snapshot.paramMap.get('userId'));
    this.groupId = String(this.route.snapshot.paramMap.get('groupId'));
    this.status = Number(this.route.snapshot.paramMap.get('status'));
    this.firstName = String(this.route.snapshot.paramMap.get('firstName'));
    this.lastName = String(this.route.snapshot.paramMap.get('lastName'));
    
  }

  POPUPMesage(message: string): void {
    this.snackBar.open(message, '!',  {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  attivadisattivaUtenza() {
    const user = {
      groupId: Number(this.groupId),
      userId: Number(this.userId),
      status: Number(this.status)
    };
    this._user.changeStatusUser(user).subscribe((resp) => {
      if (resp.message.length > 0) {
        this.router.navigate(["/utenze"]);
      } else {
        this.router.navigate(["/disattiva_utenza/"+this.userId+"/"+this.groupId+"/"+this.status+"/"+this.firstName+"/"+this.lastName]);
      }
    });
  }

}
