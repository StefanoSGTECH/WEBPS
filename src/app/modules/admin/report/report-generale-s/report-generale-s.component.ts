import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import {Component, NgModule, OnInit} from '@angular/core';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import { Pikerv } from 'app/core/piker/Piker.service';
import { Report } from 'app/core/report/report.service';
import { infoUserService } from 'app/core/infoUser/infoUser.service';
import { IMqttMessage } from 'ngx-mqtt';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';

@Component({
  selector: 'app-report-generale-s',
  templateUrl: './report-generale-s.component.html',
  styleUrls: ['./report-generale-s.component.css']
})
export class ReportGeneraleSComponent implements OnInit {
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

  userSede: string;

  registrazione: string[];

  constructor(public _piker: Pikerv, public _report: Report, public _infoUser: infoUserService, public eventMqtt: EventMqttService) {
    this.loadUserInfo();
    this.loadPiker();
  }

  ngOnInit(): void {
    registerLocaleData( it );
    this.subscribeToTopic();
  }

  onFiltro(tipoi: string): void {

    this._report.generaleSede(this.selected.value.start, this.selected.value.end, tipoi, this.userSede).subscribe((resp) => {
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

  private loadUserInfo() {
    this._infoUser.get().subscribe((resp) => {
      this.userSede = resp.sedeName;
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
        this.loadUserInfo();
        this.loadPiker();
      }
    });

    this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUserInfo();
        this.loadPiker();
      }
    });
  }

}
