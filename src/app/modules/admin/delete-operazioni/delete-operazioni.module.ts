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
import { DeleteOperazioniComponent } from './delete-operazioni.component';

const del_operazioniRoutes: Route[] = [
    {
        path     : '',
        component: DeleteOperazioniComponent
    }
];

@NgModule({
    declarations: [
        DeleteOperazioniComponent
    ],
    imports     : [
        RouterModule.forChild(del_operazioniRoutes),
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
        SharedModule
    ]
})
export class DeleteOperazioniModule
{
}
