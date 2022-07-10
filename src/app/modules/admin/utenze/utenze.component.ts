import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { UsersService } from 'app/core/users/users.service';
import { Users } from 'app/core/users/users.types';
import { IMqttMessage } from 'ngx-mqtt';

interface UserModel {
  uid: string,
  nome: string,
  co: string,
  email: string,
  sede: string,
  disable: boolean
}

@Component({
  selector: 'app-utenze',
  templateUrl: './utenze.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UtenzeComponent implements OnInit {

  collaboratore: Users[] = [];

  utente = false;
  supervisor = false;
  usercontrol = true;
  sede = "";
  uid = "";
  userDetails: string | undefined;
  uts: any[] = [];

  constructor(private router: Router, public _users: UsersService, private readonly eventMqtt: EventMqttService) {
    this.loadUser();
  }

  ngOnInit() {
    this.subscribeToTopic();
  }

  rouleString(topic: string) {
    if (topic == "superAdmin") {
      return "Super Amministratore";
    } else if (topic == "admin") {
      return "Amministratore";
    } else if (topic == "supervisor") {
      return "Supervisore";
    } else if (topic == "user") {
      return "Utente Normale";
    }
  }

  private loadUser() {
    this._users.get().subscribe((resp) => {
      this.collaboratore = resp;
    });
  }

  private subscribeToTopic() {

    this.eventMqtt.topic('groupuserroules').subscribe((data: IMqttMessage) => {
      this.loadUser();
    });

    this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
      this.loadUser();
    });
  }

}
