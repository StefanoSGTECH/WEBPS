import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import {MatTableDataSource} from '@angular/material/table';
import { OperationService } from 'app/core/operazione/operazione.service';

@Component({
  selector: 'app-delete-operazioni',
  templateUrl: './delete-operazioni.component.html',
  styleUrls: ['./delete-operazioni.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteOperazioniComponent implements OnInit {

  constructor(public _operazione: OperationService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {}

  del(): void {
    const opId = Number(this.route.snapshot.paramMap.get('opId'));
    const clienteId = Number(this.route.snapshot.paramMap.get('clienteId'));

    this._operazione.delete(opId, clienteId).subscribe((resp) => {
      if (resp.message.length > 0) {
        this.snackBar.open('Operazione Eliminata con sucesso!', '', {
          duration: 6000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.router.navigate(['/report']);
      } else {
        this.snackBar.open('Errore nel eliminare l\' operazione', ':(', {
          duration: 6000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });

  }

}
