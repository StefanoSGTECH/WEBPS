import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { Modifica_sedeComponent } from './modifica_sede.component';

const mofica_sedeRoutes: Route[] = [
    {
        path     : '',
        component: Modifica_sedeComponent
    }
];

@NgModule({
    declarations: [
      Modifica_sedeComponent
    ],
    imports     : [
        RouterModule.forChild(mofica_sedeRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatStepperModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatTableModule,
        SharedModule
    ]
})
export class Modifica_sedeModule
{
}
