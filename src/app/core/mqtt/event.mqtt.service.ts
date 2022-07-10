import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { IMqttMessage, MqttService } from "ngx-mqtt";
import { Observable } from "rxjs";

@Injectable()
export class EventMqttService {

  constructor(private _mqttService: MqttService) {}

  topic(name: string): Observable<IMqttMessage> {
    let topicName = `${environment.prefis}${name}`;     
    return this._mqttService.observe(topicName);
  }
}