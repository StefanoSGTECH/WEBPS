import { DatePipe, registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import {Directive, Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { IMqttMessage } from 'ngx-mqtt';
import { Colabp, DropdownOptionCollaborator } from 'app/core/GroupCollaboratorPiker/GroupCollaboratorPiker.types';
import { Report } from 'app/core/report/report.service';
import { infoUserService } from 'app/core/infoUser/infoUser.service';
import { GroupCollaboratorPiker } from 'app/core/GroupCollaboratorPiker/GroupCollaboratorPiker.service';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { OperazioneResponse } from 'app/core/report/report.types';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-report-cliente',
  templateUrl: './report-cliente.component.html',
  styleUrls: ['./report-cliente.component.css']
})
export class ReportClienteComponent implements OnInit, AfterViewInit {


  panelTutti = new FormControl(['null']);

  multi: boolean = false;
  multihide: Boolean = false;
  collaboratore: Array<DropdownOptionCollaborator>;
  collaboratoremulti: Array<DropdownOptionCollaborator>;
  registrazione: string[];
  ramo: string[];
  tipologia: string[];
  compagnia: string[];
  sedi: string[];
  list: any[] = [];
  list_ex: any[] = [];
  total = 0;

  selected = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  displayedColumns: string[] = ['utente', 'data', 'nome', 'co', 'soccli', 'tipo', 'sco', 'ramo', 'tipologia', 'compagnia', 'prodotto', 'premio', 'frazionamento', 'durata', 'montante', 'montanteprov', 'provvigione', 'risultato', 'commento', 'modifica', 'elimina'];
  dataSource: MatTableDataSource<OperazioneResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public _report: Report, public _infoUser: infoUserService, public _groupCollaboratorPiker: GroupCollaboratorPiker , public eventMqtt: EventMqttService, public datePipe: DatePipe) {
    this.loadUserInfo();
    this.loadcollaborator();
    this.loadcollaboratormulti();
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    registerLocaleData( it );
    this.subscribeToTopic();
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onFiltro(nome: string , co: string, s: string, collabi: Array<Colabp>): void{
    this.total = 0;

    this._report.cliente(
      nome,
      co,
      s,
      collabi,
    )
    .subscribe((resp) => {
      this.dataSource = new MatTableDataSource(resp.operazioni);

      this.total = resp.totale;
    });
  }

  dowaloadexcel(nome: string , co: string, s: string, collabi: Array<Colabp>) {
    this._report.clienteexcel(
      nome,
      co,
      s,
      collabi,
    ).subscribe((resp) => {
      console.log(resp.url);
      const urlfix = resp.url.replace('%@', environment.api);
      window.open(urlfix, '_blank');
    });
  }

  multiperson(): void {
    this.multi = !this.multi;
    if (this.multi == true){
      this.panelTutti = new FormControl([]);
    } else {
      this.panelTutti = new FormControl(['null']);
    }
  }

  private loadcollaborator() {
    this._groupCollaboratorPiker.piker(false).subscribe((resp) => {
      this.collaboratore = resp;
    });
  }

  private loadcollaboratormulti() {
    this._groupCollaboratorPiker.piker(true).subscribe((resp) => {
      this.collaboratoremulti = resp;
    });
  }

  private loadUserInfo() {
    this._infoUser.get().subscribe((resp) => {
      this.multihide = resp.roule == 'superAdmin';
    });
  }

  private subscribeToTopic() {
    this.eventMqtt.topic('groupuserroules').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUserInfo();
        this.loadcollaborator();
        this.loadcollaboratormulti();
      }
    });

    this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUserInfo();
        this.loadcollaborator();
        this.loadcollaboratormulti();
      }
    });
  }

}


