import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@ngneat/transloco';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { SetgroupComponent } from './setgroup.component';

const setgroupRoutes: Route[] = [
    {
        path     : '',
        component: SetgroupComponent
    }
];

@NgModule({
    declarations: [
        SetgroupComponent
    ],
    imports     : [
        RouterModule.forChild(setgroupRoutes),
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        TranslocoModule,
        MatSnackBarModule,
    ],
    providers: [ EventMqttService ]
})
export class SetgroupModule
{
}
