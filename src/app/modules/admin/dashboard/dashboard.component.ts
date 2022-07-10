import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { infoUserService } from 'app/core/infoUser/infoUser.service';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { NotificationService } from 'app/core/notification/notification.service';
import { Notifications } from 'app/core/notification/notification.types';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { OperationDialog } from './OperationDialog/operationDialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  subscription: Subscription;

  userFullName: string = '';
  notificationsShow: boolean = false;
  notifications: Notifications[] = [];

  constructor(private router: Router,
    public _infoUser: infoUserService,
    public _notification: NotificationService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private readonly eventMqtt: EventMqttService) {
    this.loadUser();
    this.loadNotification();
  }

  ngOnInit() {
    this.subscribeToTopic();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showNotification() {
    this.notificationsShow = !this.notificationsShow;
  }

  POPUPMesage(message: string): void {
    this.snackBar.open(message, '!', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  readnot(notificatioId: number) {
    this._notification.readAll([notificatioId]).subscribe((resp) => {
      this.POPUPMesage(resp.message);
    });
  }

  readAllNotification() {
    this.POPUPMesage("Leggo tutte le notifiche...");
    this._notification.readAll(this.notifications.map((value) => value.notificationId)).subscribe((resp) => {
      this.POPUPMesage(resp.message);
    });
  }

  openOperation(id?: number): void {
    if (id != undefined) {
      console.log("open Operation");
      const dialogRef = this.dialog.open(OperationDialog, {
        width: '600px',
        height: '600px',
        data: id,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.readnot(id);
      });
    }
  }

  openNull(): void {  }

  private loadUser() {
    this._infoUser.get().subscribe((user) => {
      this.userFullName = user.firstName + ' ' + user.lastName;
    });
  }

  private loadNotification() {
    this._notification.loadNotifications().subscribe((not) => {
      this.notifications = not;
      this.notificationsShow = not.length > 0;
    });
  }

  private subscribeToTopic() {
    this.eventMqtt.topic('notifications').subscribe((data: IMqttMessage) => {
      this.loadNotification();
    });

    this.eventMqtt.topic('notificationusergroups').subscribe((data: IMqttMessage) => {
      this.loadNotification();
    });

    this.eventMqtt.topic('groupuserroules').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUser();
      }
    });

    this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUser();
      }
    });
  }

}