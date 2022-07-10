import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { Documentis } from 'app/core/documenti/documenti.types';
import { FileService } from 'app/core/file/file.service';
import { Filef } from 'app/core/file/files.types';
import { FolderService } from 'app/core/folder/folder.service';
import { infoUserService } from 'app/core/infoUser/infoUser.service';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';
import { environment } from 'environments/environment.prod';
import { IMqttMessage } from 'ngx-mqtt';
import {Location} from '@angular/common';
import { filter } from 'lodash';
import { FormControl, FormGroup } from '@angular/forms';
import { DocumentService } from 'app/core/documenti/documenti.service';
import { fSettingsFolderDialog } from './fsettingsFoldersDialog/settingsFolders';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  selectedFiles: File[];
  folder: Documentis;
  documents: Documentis[] = [];
  files: Filef[] = [];

  utente: boolean;

  form: FormGroup = new FormGroup({
    nomedir: new FormControl(''),
  });

  caric = false;

  constructor(private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private _location: Location,
    public _folder: FolderService,
    public _file: FileService,
    public _infoUser: infoUserService,
    public _document: DocumentService,
    private readonly eventMqtt: EventMqttService) { 
      this.loadUserInfo();
    }

  ngOnInit() {
    this.subscribeToTopic();

    this.setFolder();

    this.loadDocumentFolder();
  }

  openFolder(f: Documentis) {
    let navigationExtras: NavigationExtras = {
      queryParams: f
    };

    this.router.navigate(['/folder'], navigationExtras).then(() => {
      this.setFolder();
      this.loadDocumentFolder();
    });
  }

  deleteFooter(folderId: number) {
    this._folder.delete(folderId).subscribe((resp) => {
      console.log(resp.message);
    });
  }

  deleteFile(folderId: number, fileId: number) {
    this._file.delete(folderId, fileId).subscribe((resp) => {
      console.log(resp.message);
    });
  }

  scaricaFile(url: string) {
    const urlfix = url.replace('%@', environment.api);
    window.open(urlfix, '_blank');
  }

  createDir(): void {
    this.caric = true;

    this._folder.addFolder(this.form.value.nomedir, this.folder.path, this.folder.id).subscribe((resp) => {
      console.log(resp.message);
      this.caric = false;
    });
  }

  openDialog(url: String, nome: String) {
    const urlfix = url.replace('%@', environment.api);
    let navigationExtras: NavigationExtras = {
      queryParams: { url: urlfix, name: nome }
    };

    this.router.navigate(['/pdf'], navigationExtras);
  }

  openShare(nome: string, folderId: number) {
    const dialogRef = this.dialog.open(fSettingsFolderDialog, {
      width: '800px',
      height: '600px',
      data: { folderId: folderId, nome: nome },
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  selectFile(event: Event): void {
    // @ts-ignore
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this._file.upload(this.selectedFiles, this.folder).subscribe((resp) => {
      console.log(resp);
    });
  }

  back() {
    this.router.events
      .subscribe((event: NavigationEnd) => {
        this.setFolder();
        this.loadDocumentFolder();
      });

    this._location.back();
  }

  private setFolder() {
    const queryParamMap = this.route.snapshot.queryParamMap;

    const id = Number(queryParamMap.getAll("id"));
    const name = String(queryParamMap.getAll("name"));
    const path =  String(queryParamMap.getAll("path"));
    const folders = queryParamMap.getAll("folders").map(str => {
      return Number(str);
    });
    const files = queryParamMap.getAll("files").map(str => {
      return Number(str);
    });
    const sharePerson = queryParamMap.getAll("sharePerson").map(str => {
      return Number(str);
    });

    this.folder = {
      id,
      name,
      path,
      folders,
      files,
      sharePerson
    };
  }

  private loadUserInfo() {
    this._infoUser.get().subscribe((user) => {
      this.utente = user.roule == 'superAdmin';
    });
  }

  private loadDocumentFolder() {

    this._folder.documenti(this.folder.id).subscribe((resp) => {
      this.documents = resp;
    });

    this._file.files(this.folder.id).subscribe((resp) => {
      this.files = resp;
    });
  }

  private subscribeToTopic() {
    this.eventMqtt.topic('groupuserroules').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUserInfo();
        this.loadDocumentFolder();
      }
    });

    this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
      if (data.payload.toString() == "UPDATE") {
        this.loadUserInfo();
        this.loadDocumentFolder();
      }
    });

    this.eventMqtt.topic('files').subscribe((data: IMqttMessage) => {
      this.loadDocumentFolder();
    });

    this.eventMqtt.topic('folders').subscribe((data: IMqttMessage) => {
      this.loadDocumentFolder();
    });

    this.eventMqtt.topic('documents').subscribe((data: IMqttMessage) => {
      this.loadDocumentFolder();
    });
  }

}
