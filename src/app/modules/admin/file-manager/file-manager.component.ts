import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DocumentService } from 'app/core/documenti/documenti.service';
import { Documentis } from 'app/core/documenti/documenti.types';
import { infoUserService } from 'app/core/infoUser/infoUser.service';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { IMqttMessage } from 'ngx-mqtt';
import { SettingsFolderDialog } from './settingsFoldersDialog/settingsFolders';

@Component({
    selector       : 'file-manager',
    templateUrl    : './file-manager.component.html',
    encapsulation  : ViewEncapsulation.None
})
export class FileManagerComponent
{
    documents: Documentis[];

    utente: boolean = false;

    form: FormGroup = new FormGroup({
      nomedir: new FormControl(''),
    });
  
    caric = false;

    constructor(public _documet: DocumentService,
      public _infoUser: infoUserService,
      public _document: DocumentService,
      public eventMqtt: EventMqttService,
      private snackBar: MatSnackBar,
      private route: ActivatedRoute,
      public dialog: MatDialog,
      private router: Router) {
        this.loadUserInfo();
        this.loadDocument();
    }

    openFolder(f: Documentis) {
      let navigationExtras: NavigationExtras = {
        queryParams: f
      };
  
      this.router.navigate(['/folder'], navigationExtras);
    }

    openShare(nome: string, documentId: number, folderId: number) {
      const dialogRef = this.dialog.open(SettingsFolderDialog, {
        width: '800px',
        height: '600px',
        data: { folderId: folderId, documentId: documentId, nome: nome },
      });
  
      dialogRef.afterClosed().subscribe(result => {

      });
    }

    deleteFooter(documentId: number, folderId: number) {
      this._documet.delete(folderId, documentId).subscribe((resp) => {
        console.log(resp.message);
      });
    }

    createDir(): void {
      this.caric = true;
  
      this._document.addFolder(this.form.value.nomedir).subscribe((resp) => {
        console.log(resp.message);
        this.caric = false;
      });
    }

    private loadUserInfo() {
        this._infoUser.get().subscribe((resp) => {
          this.utente = resp.roule == 'superAdmin';
        });
    }

    private loadDocument() {
        this._documet.documenti().subscribe((resp) => {
            this.documents = resp;
        });
    }
  
    ngOnInit(): void {
        this.subscribeToTopic();
    }

    private subscribeToTopic() {
        this.eventMqtt.topic('groupuserroules').subscribe((data: IMqttMessage) => {
          if (data.payload.toString() == "UPDATE") {
            this.loadUserInfo();
            this.loadDocument();
          }
        });
    
        this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
          if (data.payload.toString() == "UPDATE") {
            this.loadUserInfo();
            this.loadDocument();
          }
        });

        this.eventMqtt.topic('documents').subscribe((data: IMqttMessage) => {
            this.loadDocument();
        });

        this.eventMqtt.topic('files').subscribe((data: IMqttMessage) => {
            this.loadDocument();
        });

        this.eventMqtt.topic('folders').subscribe((data: IMqttMessage) => {
            this.loadDocument();
        });
    }
}
