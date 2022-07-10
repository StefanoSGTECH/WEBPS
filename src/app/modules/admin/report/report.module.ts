import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Route, RouterModule } from '@angular/router';
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
import { ReportComponent } from './report.component';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';
import { ReportGeneraleComponent } from './report-generale/report-generale.component';
import { ReportGeneraleSComponent } from './report-generale-s/report-generale-s.component';
import { GeneraleSediComponent } from './generale-sedi/generale-sedi.component';
import { GraficpersonalComponent } from './graficpersonal/graficpersonal.component';
import { ReportProvvigioniComponent } from './report-provvigioni/report-provvigioni.component';
import { ReportClienteComponent } from './report-cliente/report-cliente.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { ReportPersonaleComponent } from './report-personale/report-personale.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ReportComponent
    }
];

@NgModule({
    declarations: [
        ReportComponent,
        ReportGeneraleComponent,
        ReportGeneraleSComponent,
        GeneraleSediComponent,
        GraficpersonalComponent,
        ReportPersonaleComponent,
        ReportProvvigioniComponent,
        ReportClienteComponent,
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MatFormFieldModule,
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
        MatCheckboxModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        NgxChartsModule,
        SharedModule
    ],
    providers: [ EventMqttService, DatePipe ]
})
export class ReportModule
{
}
