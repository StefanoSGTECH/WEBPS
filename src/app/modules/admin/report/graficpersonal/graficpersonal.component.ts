import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import {Component, NgModule, OnInit} from '@angular/core';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import { IMqttMessage } from 'ngx-mqtt';
import { Pikerv } from 'app/core/piker/Piker.service';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { Report } from 'app/core/report/report.service';

@Component({
  selector: 'app-graficpersonal',
  templateUrl: './graficpersonal.component.html',
  styleUrls: ['./graficpersonal.component.css']
})
export class GraficpersonalComponent implements OnInit {

  rcarescheme: any[] = [];
  consulenzescheme: any[] = [];
  creascheme: any[] = [];
  vitascheme: any[] = [];

  rcatotal = 0;
  retotal = 0;
  vitatants = 0;
  vitaUnicotants = 0;
  creatants = 0;
  consultants = 0;

  totaletorte = 0;

  // options
  gradient = false;
  showLegend = true;
  showLabels = true;
  isDoughnut = true;

  colorScheme = {
    domain: ['#3f51b5', '#199101']
  };

  colorSchemeCrea = {
    domain: ['#199101', '#3f51b5']
  };

  selected = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  registrazione: string[];

  constructor(public _piker: Pikerv, public _report: Report, public eventMqtt: EventMqttService) {
   this.loadPiker();
  }

  ngOnInit(): void {
    registerLocaleData( it );

    this.subscribeToTopic();
  }

  onFiltro(tipoi: string): void {

    this._report.personaleGrafici(this.selected.value.start, this.selected.value.end, tipoi).subscribe((resp) => {
      this.rcarescheme = [{name: 'RCA', value: resp.totaleRCA }, { name: 'RE', value: resp.totaleRE}];
      this.consulenzescheme = [{name: 'Consulenze', value: resp.totaleConsulenza}];
      this.creascheme = [{name: 'Crea', value: resp.totaleCrea}];
      this.vitascheme = [{name: 'Annuo', value: resp.totaleAnnuo }, { name: 'Unico', value: resp.totaleUnico}];

      this.rcatotal = resp.totaleRCA;
      this.retotal = resp.totaleRE;
      this.vitatants = resp.totaleAnnuo;
      this.vitaUnicotants = resp.totaleUnico;
      this.creatants = resp.totaleCrea;
      this.consultants = resp.totaleConsulenza;
      
      this.totaletorte = resp.totale;
    });
  }

  private loadPiker() {
    this._piker.piker('reportgeneraletipo').subscribe((resp) => {
      this.registrazione = resp.value;
    });
  }

  private subscribeToTopic() {
    this.eventMqtt.topic('groupuserroules').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadPiker();
      }
    });

    this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadPiker();
      }
    });
  }

}
