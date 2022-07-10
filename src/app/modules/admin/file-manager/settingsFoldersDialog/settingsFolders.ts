import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DatePipe } from '@angular/common';
import { SharePerson } from "app/core/folder/folder.types";
import { FolderService } from "app/core/folder/folder.service";
import { SettingsFolderAddPersonDialog } from "./SettingsFolderAddPersonDialog/SettingsFolderAddPersonDialog.html/SettingsFolderAddPersonDialog";

@Component({
    selector: 'dialog-overview-settingsFolderDialog-dialog',
    templateUrl: './dialog-overview-settingsFolderDialog-dialog.html',
  })
  export class SettingsFolderDialog {
    users: SharePerson[];

    constructor(
      public dialogRef: MatDialogRef<SettingsFolderDialog>,
      public dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: { folderId: number, documentId: number, nome: string },
      public _folder: FolderService, 
      private datePipe: DatePipe
    ) {
        this.loadSharePerson();
    }

    private loadSharePerson() {
        this._folder.shareperson(this.data.folderId, this.data.documentId).subscribe((resp)=> {
            this.users = resp;
        });
    }

    removePerson(userId: number) {
        this._folder.removeSharePerson(userId, this.data.folderId, this.data.documentId).subscribe((resp) => {
            console.log(resp);
            this.loadSharePerson();
        });
    }

    addUser() {
        const dialogRef = this.dialog.open(SettingsFolderAddPersonDialog, {
            width: '600px',
            height: '400px',
            data: this.data,
          });
      
          dialogRef.afterClosed().subscribe(result => {
            this.loadSharePerson();
          });
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }