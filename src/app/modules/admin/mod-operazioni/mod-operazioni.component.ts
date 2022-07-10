import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { OperationService } from 'app/core/operazione/operazione.service';
import { Pikerv } from 'app/core/piker/Piker.service';
import { ClienteService } from 'app/core/cliente/cliente.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mod-operazioni',
  templateUrl: './mod-operazioni.component.html',
  styleUrls: ['./mod-operazioni.component.css']
})
export class ModOperazioniComponent implements OnInit {
  id: number;
  clienteId: number;

  data: string | undefined;
  tiposel: string | undefined;
  socetasel: string | undefined;
  nomesel: string | undefined;
  cosel: string | undefined;
  socetclisel: string | undefined;
  ramosel: string | undefined;
  tipologiasel: string | undefined;
  compagniasel: string | undefined;
  prodottosel: string | undefined;
  premiosel: string | undefined;
  frazionamentosel: string | undefined;
  duratasel: string | undefined;
  montantesel: string | undefined;
  montanteprosel: string | undefined;
  provvigionesel: string | undefined;
  provvigioneoutpsel: string | undefined;
  plmtsel: string | undefined;
  commentosel: string | undefined;


  tipo: string[];
  soceta: string[];
  ramo: string[];
  tipologia: string[];
  compagnia: string[];
  prod: string[];
  frazionamento: string[];
  montante: number | undefined;
  montantepro: number | undefined;
  fraznumero = 0;
  provvigioneout: number | undefined = 0;
  plmt: number | undefined = 0;
  alert: number | undefined;
  operazioni: number | undefined;
  vramo: string | undefined = '';

  operazioneid: any[] = [];

  fdata = '';
  ftipo = '';
  fsoceta = '';
  fnome = '';
  fco = '';
  fclisoceta = '';
  framo = '';
  ftipologia = '';
  fcompagnia = '';
  fprodotto = '';
  fpremio = '';
  ffrazionamneto = '';
  fdurata = '';
  fmontatnte = '';
  fmontanteprov = '';
  fprovvigione = '';
  fprovvigioneout = '';
  provvigioneoutp: number | undefined;
  fplmt = '';
  utentecreazione: any[] = [];
  utentemodifica: any[] = [];

  /* AMIN UTENTE */
  utente = false;
  supervisor = false;
  usercontrol = 5;
  sede = "";
  userDetails: string | undefined;
  utnome: string | undefined;
  utco: string | undefined;
  uts: any[] = [];

  formreg: FormGroup = new FormGroup({
    fdata: new FormControl('', Validators.minLength(2)),
    ftipo: new FormControl('', Validators.minLength(2)),
    fsoceta: new FormControl('', Validators.minLength(2)),
  });
  formcli: FormGroup = new FormGroup({
    fnome: new FormControl(''),
    fco: new FormControl(''),
    fclisoceta: new FormControl(''),
  });
  formramo: FormGroup = new FormGroup({
    framo: new FormControl('', Validators.minLength(2)),
  });
  formcommento: FormGroup = new FormGroup({
    fcommento: new FormControl(''),
  });
  form: FormGroup = new FormGroup({
    ftipologia: new FormControl('', Validators.minLength(2)),
    fcompagnia: new FormControl('', Validators.minLength(2)),
    fprodotto: new FormControl('', Validators.minLength(2)),
    fpremio: new FormControl('', Validators.minLength(2)),
    ffrazionamento: new FormControl('', Validators.minLength(2)),
    fdurata: new FormControl('', Validators.minLength(2)),
    fmontatnte: new FormControl('', Validators.minLength(2)),
    fmontanteprov: new FormControl('', Validators.minLength(2)),
    fprovvigione: new FormControl('', Validators.minLength(2)),
    fprovvigioneout: new FormControl('', Validators.minLength(1)),
    fplmt: new FormControl('', Validators.minLength(2)),
  });

  constructor(private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              public _operation: OperationService,
              public _cliente: ClienteService,
              public datepipe: DatePipe,
              public _piker: Pikerv) {
                _piker.piker('registrazioneTipo').subscribe((resp) => { this.tipo = resp.value });
                _piker.piker('registrazioneSoceta').subscribe((resp) => { this.soceta = resp.value });
                _piker.piker('ramo').subscribe((resp) => { this.ramo = resp.value });
  }

  POPUPSuccess(): void {
    this.snackBar.open('Caricamento Riuscito!', '!', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  POPUPMesage(message: string): void {
    this.snackBar.open(message, '!',  {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  popupinfinity(): void {
    const dialogRef = this.dialog.open(popupInfinityDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  edit_operazione(): void {

    /*
      this.utentecreazione = [value.utente[0], value.utente[1], value.utente[2], value.utente[3]];
      this.utentemodifica = [value.utentemodifica[0], value.utentemodifica[1], value.utentemodifica[2], value.utentemodifica[3]];
    */

    this._cliente.get(this.clienteId).subscribe((resp) => {
      this.nomesel = resp.nome;
      this.cosel = resp.cognome;
      this.socetclisel = resp.societa;
    });

    this._operation.get(this.id).subscribe((value) => {
          this.data = this.datepipe.transform(value.data, 'yyyy-MM-dd');
          this.tiposel = value.registrazione;
          this.socetasel = value.societa;
          this.ramosel = String(value.ramo);
          this.onRamo(value.ramo);
          this.tipologiasel = value.tipologia;
          this.compagniasel = value.compagnia;
          this.prodottosel = value.prodotto;
          this.premiosel = value.premio;
          this.frazionamentosel = value.frazionamento;
          this.duratasel = value.durata;
          this.montantesel = value.montante;
          this.montanteprosel = value.montanteprov;
          this.provvigionesel = value.provvigione;
          this.provvigioneoutpsel = String(value.provvigione);
          this.plmtsel = value.risultato;
          this.commentosel = String(value.commento);

          if (value.tipologia === 'RCA') {
            if (Number(value.provvigione) <= 0) {
              this.provvigioneout = 5 / 100;
            } else {
              this.provvigioneout = Number(value.provvigione) / 100;
            }
            this.provvigioneoutp = this.provvigioneout * 100;
          } else if (value.tipologia === 'RE'){
            if (Number(value.provvigione) <= 0) {
              this.provvigioneout = 10 / 100;
            } else {
              this.provvigioneout = Number(value.provvigione) / 100;
            }
            this.provvigioneoutp = this.provvigioneout * 100;
          } else {
            this.provvigioneout = (Number(value.provvigione) ) / 100;
            this.provvigioneoutp = this.provvigioneout * 100;
          }
    });
  }

  onRamo(vr: string): void {
    this.vramo = vr;
    if (this.vramo === 'Vita') {
      this._piker.piker('vitatipologia').subscribe((resp) => { this.tipologia = resp.value });
      this._piker.piker('vitacompagnia').subscribe((resp) => { this.compagnia = resp.value });
      this._piker.piker('vitaprodotto').subscribe((resp) => { this.prod = resp.value });
      this._piker.piker('vitafrazionamento').subscribe((resp) => { this.frazionamento = resp.value });
    } else if (this.vramo === 'Danni') {
      this._piker.piker('dannitipologia').subscribe((resp) => { this.tipologia = resp.value });
      this._piker.piker('dannicompagnia').subscribe((resp) => { this.compagnia = resp.value });
      this._piker.piker('danniprodotto').subscribe((resp) => { this.prod = resp.value });
      this._piker.piker('dannifrazionamento').subscribe((resp) => { this.frazionamento = resp.value });
    } else if (this.vramo === 'Consulenza') {
      this._piker.piker('consulenzatipologia').subscribe((resp) => { this.tipologia = resp.value });
      this._piker.piker('consulenzafrazionamento').subscribe((resp) => { this.frazionamento = resp.value });
    }
  }

  cgMontante(premio: string, durata: string, provvigione: string, fraz: string, tipdan: string): void {
    this.montante = Number(premio) * Number(durata);
    if (tipdan === 'RCA') {
      if (Number(provvigione) <= 0) {
        this.provvigioneout = 5 / 100;
      } else {
        this.provvigioneout = Number(provvigione) / 100;
      }
      this.provvigioneoutp = this.provvigioneout * 100;
    } else if (tipdan === 'RE'){
      if (Number(provvigione) <= 0) {
        this.provvigioneout = 10 / 100;
      } else {
        this.provvigioneout = Number(provvigione) / 100;
      }
      this.provvigioneoutp = this.provvigioneout * 100;
    } else {
      this.provvigioneout = (Number(provvigione) ) / 100;
      this.provvigioneoutp = this.provvigioneout * 100;
    }
    if (fraz === 'Annuale'){this.fraznumero = 1; }
    else if ( fraz === 'Semestrale'){this.fraznumero = 2; }
    else if (fraz === 'Trimestrale'){this.fraznumero = 4; }
    else if (fraz === 'Mensile'){this.fraznumero =  12; }
    else {
      this.montantepro = 0;
    }

    this.montantepro = this.montante / Number(this.fraznumero);
    this.plmt = (Number(this.montantepro)) * (Number(this.provvigioneout));
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = Number(this.route.snapshot.paramMap.get('opId'));
    this.clienteId = Number(this.route.snapshot.paramMap.get('clienteId'));

    if (this.id && this.clienteId) {
      this.edit_operazione();
    } else {
      this.goreportold();
    }

  }

  goreportold() {
    this.router.navigate(['/report']);
  }

  alersu(): void {
    this.alert = 1;
    console.log('Operazioni modificata con sucesso!');
  }

  alertuploading(): void {
    this.alert = 1.5;
    console.log('Modifica in corso! ');
  }

  conferma_vita(): void {
    /* Controllo che i valori siano inseriti */
    if (String(this.formcli.value.fnome).length > 0 && String(this.formcli.value.fco).length > 0 || String(this.formcli.value.fclisoceta).length > 0) {
      if (this.formreg.value.fdata.toString().length > 2 && this.formreg.value.ftipo.toString().length > 2 && this.formreg.value.fsoceta.toString().length > 2) {
        if (String(this.form.value.ftipologia).length > 2 && String(this.form.value.fcompagnia).length > 2 && String(this.form.value.fprodotto).length > 2 && String(this.form.value.fpremio).length > 0 && String(this.form.value.ffrazionamento).length > 0 && String(this.form.value.fdurata).length > 0 && String(this.form.value.fprovvigione).length > 0) {
          if (String(this.form.value.ftipologia) != "Infinity" &&
            String(this.form.value.fcompagnia) != "infinity" &&
            String(this.form.value.fprodotto) != "infinity" &&
            String(this.form.value.fpremio) != "infinity" &&
            String(this.form.value.ffrazionamento) != "infinity" &&
            String(this.form.value.fdurata) != "infinity" &&
            String(this.form.value.fprovvigione) != "infinity" &&
            String(this.form.value.fplmt) != "infinity") {
            // console.log(this.formreg.value, this.formramo.value);

            this.alertuploading();

            this.alersu();
            this.POPUPSuccess();

            let nome = this.formcli.value.fnome;
            let cog = this.formcli.value.fco;
            let soct = this.formcli.value.fclisoceta;

            if (nome !== null) {
              nome = this.formcli.value.fnome.toLowerCase();
            }

            if (cog !== null) {
              cog = this.formcli.value.fco.toLowerCase();
            }

            if (soct !== null) {
              soct = this.formcli.value.fclisoceta.toLowerCase();
            }

            const operationdata = {
              commento: String(this.formcommento.value.commento).length > 0 ? this.formcommento.value.fcommento : null,
              compagnia: this.form.value.fcompagnia,
              data: `${this.formreg.value.fdata}`,
              durata: Number(this.form.value.fdurata),
              frazionamento: this.form.value.ffrazionamento,
              montante: Number(this.form.value.fdurata) * Number(this.form.value.fpremio),
              montanteprov: (Number(this.form.value.fdurata) * Number(this.form.value.fpremio)) / Number(this.fraznumero),
              premio: Number(this.form.value.fpremio),
              prodotto: `${this.form.value.fprodotto}`,
              provvigione: ((Number(this.form.value.fdurata) * Number(this.form.value.fpremio)) * Number(this.form.value.fprovvigione)) / 100,
              ramo: this.formramo.value.framo,
              registrazione: this.formreg.value.ftipo,
              risultato: ((Number(this.form.value.fdurata) * Number(this.form.value.fpremio)) / Number(this.fraznumero)) * (Number(this.form.value.fprovvigione) / 100),
              societa: `${this.formreg.value.fsoceta}`,
              tipologia: `${this.form.value.ftipologia}`,
            };

            const cliente = {
              nome: nome,
              cognome: cog,
              societa: soct
            }

            const operation = {
              operation: operationdata,
              cliente: cliente
            };

            this._operation.editOperation(this.id, this.clienteId, operation).subscribe((resp) => {
              if (resp.status == "ok") {
                this.alersu();
                this.montante = 0;
                this.provvigioneout = 0;
                this.montantepro = 0;
                this.plmt = 0;
                this.vramo = '';
                this.goreportold();
              } else {
                this.montante = 0;
                this.provvigioneout = 0;
                this.montantepro = 0;
                this.plmt = 0;
                this.vramo = '';
                this.POPUPMesage('Caricamento Non Riuscito :(');
              }
            });
          } else {
            this.popupinfinity();
          }

        } else {
          this.POPUPMesage(`Compila i campi di ${String(this.formramo.value.framo)}`);
          console.log(this.form.value);
        }
      } else {
        this.POPUPMesage('Compila i campi della registrazione');
      }
    } else {
      this.POPUPMesage('Compila i campi del Cliente');
    }

  }

  conferma_danni(): void {

    /* Controllo che i valori siano inseriti */
    if (String(this.formcli.value.fnome).length > 0 && String(this.formcli.value.fco).length > 0 || String(this.formcli.value.fclisoceta).length > 0) {
      if (this.formreg.value.fdata.toString().length > 2 && this.formreg.value.ftipo.toString().length > 2 && this.formreg.value.fsoceta.toString().length > 2) {
        if (String(this.form.value.ftipologia).length > 1 && String(this.form.value.fcompagnia).length > 2 && String(this.form.value.fprodotto).length > 2 && String(this.form.value.fpremio).length > 0 && String(this.form.value.ffrazionamento).length > 0) {
          if (String(this.form.value.ftipologia) != "Infinity" &&
            String(this.form.value.fcompagnia) != "infinity" &&
            String(this.form.value.fprodotto) != "infinity" &&
            String(this.form.value.fpremio) != "infinity" &&
            String(this.form.value.ffrazionamento) != "infinity" &&
            String(this.form.value.fdurata) != "infinity" &&
            String(this.form.value.fprovvigione) != "infinity" &&
            String(this.form.value.fplmt) != "infinity") {

            this.alertuploading();

            this.alersu();
            this.POPUPSuccess();

            let nome = this.formcli.value.fnome;
            let cog = this.formcli.value.fco;
            let soct = this.formcli.value.fclisoceta;

            if (nome !== null) {
              nome = this.formcli.value.fnome.toLowerCase();
            }

            if (cog !== null) {
              cog = this.formcli.value.fco.toLowerCase();
            }

            if (soct !== null) {
              soct = this.formcli.value.fclisoceta.toLowerCase();
            }

            const operationdata = {
              commento: String(this.formcommento.value.commento).length > 0 ? this.formcommento.value.fcommento : null,
              compagnia: this.form.value.fcompagnia,
              data: `${this.formreg.value.fdata}`,
              durata: Number(1),
              frazionamento: this.form.value.ffrazionamento,
              montante: Number(1) * Number(this.form.value.fpremio),
              montanteprov: (Number(1) * Number(this.form.value.fpremio)) / Number(this.fraznumero),
              premio: Number(this.form.value.fpremio),
              prodotto: `${this.form.value.fprodotto}`,
              provvigione: Number(this.form.value.ftipologia === 'RCA' ? this.provvigioneoutp : this.form.value.ftipologia === 'RE' ? this.provvigioneoutp : null),
              ramo: this.formramo.value.framo,
              registrazione: this.formreg.value.ftipo,
              risultato: ((Number(1) * Number(this.form.value.fpremio)) / Number(this.fraznumero)) * (Number(this.form.value.ftipologia === 'RCA' ? this.provvigioneout : this.form.value.ftipologia === 'RE' ? this.provvigioneout : 0)),
              societa: `${this.formreg.value.fsoceta}`,
              tipologia: `${this.form.value.ftipologia}`,
            };

            const cliente = {
              nome: nome,
              cognome: cog,
              societa: soct
            }

            const operation = {
              operation: operationdata,
              cliente: cliente
            };

            this._operation.editOperation(this.id, this.clienteId, operation).subscribe((resp) => {
              if (resp.status == "ok") {
                this.alersu();
                this.montante = 0;
                this.provvigioneout = 0;
                this.montantepro = 0;
                this.plmt = 0;
                this.vramo = '';
                this.goreportold();
              } else {
                this.montante = 0;
                this.provvigioneout = 0;
                this.montantepro = 0;
                this.plmt = 0;
                this.vramo = '';
                this.POPUPMesage('Caricamento Non Riuscito :(');
              }
            });

          } else {
            this.popupinfinity();
          }

        } else {
          this.POPUPMesage(`Compila i campi di ${String(this.formramo.value.framo)}`);
          console.log(this.form.value);
        }
      } else {
        this.POPUPMesage('Compila i campi della registrazione');
      }
    } else {
      this.POPUPMesage('Compila i campi del Cliente');
    }

  }

  conferma_cons(): void {

    /* Controllo che i valori siano inseriti */
    if (String(this.formcli.value.fnome).length > 0 && String(this.formcli.value.fco).length > 0 || String(this.formcli.value.fclisoceta).length > 0) {
      if (this.formreg.value.fdata.toString().length > 2 && this.formreg.value.ftipo.toString().length > 2 && this.formreg.value.fsoceta.toString().length > 2) {
        if (String(this.form.value.ftipologia).length > 2 && String(this.form.value.fpremio).length > 0 && String(this.form.value.ffrazionamento).length > 0 && String(this.form.value.fprovvigione).length > 0) {
          if (String(this.form.value.ftipologia) != "Infinity" &&
            String(this.form.value.fcompagnia) != "infinity" &&
            String(this.form.value.fprodotto) != "infinity" &&
            String(this.form.value.fpremio) != "infinity" &&
            String(this.form.value.ffrazionamento) != "infinity" &&
            String(this.form.value.fdurata) != "infinity" &&
            String(this.form.value.fprovvigione) != "infinity" &&
            String(this.form.value.fplmt) != "infinity") {

            this.alertuploading();

            this.alersu();
            this.POPUPSuccess();

            let nome = this.formcli.value.fnome;
            let cog = this.formcli.value.fco;
            let soct = this.formcli.value.fclisoceta;

            if (nome !== null) {
              nome = this.formcli.value.fnome.toLowerCase();
            }

            if (cog !== null) {
              cog = this.formcli.value.fco.toLowerCase();
            }

            if (soct !== null) {
              soct = this.formcli.value.fclisoceta.toLowerCase();
            }

            const operationdata = {
              commento: String(this.formcommento.value.commento).length > 0 ? this.formcommento.value.fcommento : null,
              compagnia: this.form.value.fcompagnia,
              data: `${this.formreg.value.fdata}`,
              durata: Number(1),
              frazionamento: this.form.value.ffrazionamento,
              montante: Number(1) * Number(this.form.value.fpremio),
              montanteprov: (Number(1) * Number(this.form.value.fpremio)) / Number(this.fraznumero),
              premio: Number(this.form.value.fpremio),
              prodotto: `${this.form.value.fprodotto}`,
              provvigione: ((Number(1) * Number(this.form.value.fpremio)) * Number(this.form.value.fprovvigione)) / 100,
              ramo: this.formramo.value.framo,
              registrazione: this.formreg.value.ftipo,
              risultato: ((Number(1) * Number(this.form.value.fpremio)) / Number(this.fraznumero)) * (Number(this.form.value.fprovvigione) / 100),
              societa: `${this.formreg.value.fsoceta}`,
              tipologia: `${this.form.value.ftipologia}`,
            };

            const cliente = {
              nome: nome,
              cognome: cog,
              societa: soct
            }

            const operation = {
              operation: operationdata,
              cliente: cliente
            };

            this._operation.editOperation(this.id, this.clienteId, operation).subscribe((resp) => {
              if (resp.status == "ok") {
                this.alersu();
                this.montante = 0;
                this.provvigioneout = 0;
                this.montantepro = 0;
                this.plmt = 0;
                this.vramo = '';
                this.goreportold();
              } else {
                this.montante = 0;
                this.provvigioneout = 0;
                this.montantepro = 0;
                this.plmt = 0;
                this.vramo = '';
                this.POPUPMesage('Caricamento Non Riuscito :(');
              }
            });

          } else {
            this.popupinfinity();
          }

        } else {
          this.POPUPMesage(`Compila i campi di ${String(this.formramo.value.framo)}`);
          console.log(this.form.value);
        }
      } else {
        this.POPUPMesage('Compila i campi della registrazione');
      }
    } else {
      this.POPUPMesage('Compila i campi del Cliente');
    }

  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: '../operazioni/popup/popupInfinity.html',
})
export class popupInfinityDialog {}
