import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { NotificationService } from 'app/core/notification/notification.service';
import { NotificationTopicResponse } from 'app/core/notification/notification.types';
import { IMqttMessage } from 'ngx-mqtt';

@Component({
    selector       : 'settings-notifications',
    templateUrl    : './notifications.component.html'
})
export class SettingsNotificationsComponent implements OnInit
{
    topics: NotificationTopicResponse[];
    mytopics: NotificationTopicResponse[];

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder,
        private router: Router,
        private snackBar: MatSnackBar,
        public eventMqtt: EventMqttService,
        public _notification: NotificationService) {
            this.loadNotificationTopic();
            this.loadNotificationMyTopic();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
     ngOnInit(): void {
        this.subscribeToTopic();
    }

    private loadNotificationTopic() {
        this._notification.loadNotificationTopicGroup().subscribe((resp) => {
            this.topics = resp;
        });
    }

    private loadNotificationMyTopic() {
        this._notification.loadNotificationTopic().subscribe((resp) => {
            this.mytopics = resp;
        });
    }

    private subscribeToTopic() {
        this.eventMqtt.topic('notificationtopics').subscribe((data: IMqttMessage) => {
            console.log('notificationtopics');
            this.loadNotificationTopic();
        });

        this.eventMqtt.topic('notificationtopicgroups').subscribe((data: IMqttMessage) => {
            console.log('notificationtopicgroups');
            this.loadNotificationMyTopic();
        });
    }

    POPUPMesage(message: string): void {
        this.snackBar.open(message, '!', {
          duration: 6000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
    }

    topicName(no: NotificationTopicResponse): string {
        switch (no.name) {
            case "newOperation": { 
                return "Nuova Operazione" 
            }
            case "newFolder": { 
                return "Nuova Cartella" 
            } 
            case "newFile": { 
                return "Nuovo File" 
            }
            case "editUser": { 
                return "Modifiche Utenza" 
            }
            case "updateApp": { 
                return "Aggiornamento App" 
            }
            default: {
                return no.name
            } 
        }
    }

    buttonState(no: NotificationTopicResponse): string {
        var mytopicsmap = this.mytopics.map(function(item) {
            return item.name;
        });
        const state: string = mytopicsmap.includes(no.name) ? "Disattiva" : "Attiva"
        return state
    }

    private buttonStateBoolean(no: NotificationTopicResponse): boolean {
        var mytopicsmap = this.mytopics.map(function(item) {
            return item.name;
        });
        const state: boolean = mytopicsmap.includes(no.name)
        return state
    }

    changeState(no: NotificationTopicResponse): void {
        if (this.buttonStateBoolean(no)) {
            this._notification.removeTopic(no.name).subscribe((resp) => {
                /*this.mytopics.forEach((value, index) => {
                    if(value == no) this.mytopics.splice(index, 1);
                });*/
                this.POPUPMesage(resp.message);
                window.location.reload();
            });
        } else {
            this._notification.addTopic(no.name).subscribe((resp) => {
                this.POPUPMesage(resp.message);
                window.location.reload();
            });
        }
    }
}

