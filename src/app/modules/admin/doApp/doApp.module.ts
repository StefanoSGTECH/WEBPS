import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DoAppComponent } from './doApp.component';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'app/shared/shared.module';

const doAppRoutes: Route[] = [
    {
        path     : '',
        component: DoAppComponent
    }
];

@NgModule({
    declarations: [
      DoAppComponent
    ],
    imports     : [
        RouterModule.forChild(doAppRoutes),
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class DoAppModule
{
}