import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseFullscreenModule } from '@fuse/components/fullscreen/fullscreen.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { ClassyLayoutComponent } from 'app/layout/layouts/vertical/classy/classy.component';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
        ClassyLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatFormFieldModule,
        FuseFullscreenModule,
        FuseNavigationModule,
        MessagesModule,
        UserModule,
        SharedModule
    ],
    exports     : [
        ClassyLayoutComponent
    ],
    providers: [EventMqttService]
})
export class ClassyLayoutModule
{
}
