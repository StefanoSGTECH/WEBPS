import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfComponent } from './pdf.component';

const pdfRoutes: Route[] = [
    {
        path     : '',
        component: PdfComponent
    }
];

@NgModule({
    declarations: [
        PdfComponent
    ],
    imports     : [
        RouterModule.forChild(pdfRoutes),
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        NgxExtendedPdfViewerModule,
        FuseCardModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDividerModule,
        MatMenuModule,
        MatProgressBarModule,
        SharedModule,
        MatSnackBarModule,
    ],
    providers: [EventMqttService]
})
export class PdfsModule
{
}
