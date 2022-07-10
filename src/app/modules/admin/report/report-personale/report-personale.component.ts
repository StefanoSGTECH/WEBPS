import { DatePipe, registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { Directive, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Pikerv } from 'app/core/piker/Piker.service';
import { Report } from 'app/core/report/report.service';
import { infoUserService } from 'app/core/infoUser/infoUser.service';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { IMqttMessage } from 'ngx-mqtt';
import { GroupCollaboratorPiker } from 'app/core/GroupCollaboratorPiker/GroupCollaboratorPiker.service';
import { Colabp, CollaboratorType, DropdownOptionCollaborator } from 'app/core/GroupCollaboratorPiker/GroupCollaboratorPiker.types';
import { OperazioneResponse, Reportop } from 'app/core/report/report.types';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-report-personale',
  templateUrl: './report-personale.component.html',
  styleUrls: ['./report-personale.component.css']
})
export class ReportPersonaleComponent implements OnInit {

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

  constructor(public _piker: Pikerv, public _report: Report, public _infoUser: infoUserService, public _groupCollaboratorPiker: GroupCollaboratorPiker , public eventMqtt: EventMqttService, public datePipe: DatePipe) {
    this.loadPiker();
    this.loadUserInfo();
    this.loadcollaborator();
    this.loadcollaboratormulti();
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

  oncgRamo(ramoi: string): void {
    this.total = 0;
    if (ramoi === 'Vita'){
      this._piker.piker('reportpersonaletipologiavita').subscribe((resp) => {
        this.tipologia = resp.value;
      });
    } else if (ramoi === 'Danni'){
      this._piker.piker('reportpersonaletipologiadanni').subscribe((resp) => {
        this.tipologia = resp.value;
      });
    } else if (ramoi === 'Consulenza'){
      this._piker.piker('reportpersonaletipologiaconsulena').subscribe((resp) => {
        this.tipologia = resp.value;
      });
    }
  }

  onFiltro(collabi: Array<Colabp>, tipoi: string, ramoi: string, tipologiai: string, compagniai: string): void {
    this.total = 0;

    this._report.personale(
      this.selected.value.start, 
      this.selected.value.end,
      collabi,
      tipoi,
      ramoi,
      tipologiai.length > 0 ? tipologiai : "Tutte",
      compagniai
    )
    .subscribe((resp) => {
      this.dataSource = new MatTableDataSource(resp.operazioni);

      this.total = resp.totale;
    });
  }

  dowaloadexcel(collabi: Array<Colabp>, tipoi: string, ramoi: string, tipologiai: string, compagniai: string) {
    this._report.personaleexcel(
      this.selected.value.start, 
      this.selected.value.end,
      collabi,
      tipoi,
      ramoi,
      tipologiai.length > 0 ? tipologiai : "Tutte",
      compagniai
    )
    .subscribe((resp) => {
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

  private loadPiker() {
    this._piker.piker('reportpersonaletipo').subscribe((resp) => {
      this.registrazione = resp.value;
    });

    this._piker.piker('reportpersonaleramo').subscribe((resp) => {
      this.ramo = resp.value;
    });

    this._piker.piker('reportpersonalecompagnia').subscribe((resp) => {
      this.compagnia = resp.value;
    });
  }

  private subscribeToTopic() {
    this.eventMqtt.topic('groupuserroules').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUserInfo();
        this.loadPiker();
        this.loadcollaborator();
        this.loadcollaboratormulti();
      }
    });

    this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUserInfo();
        this.loadPiker();
        this.loadcollaborator();
        this.loadcollaboratormulti();
      }
    });
  }

}
