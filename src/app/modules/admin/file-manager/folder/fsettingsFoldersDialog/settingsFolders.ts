import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DatePipe } from '@angular/common';
import { SharePerson } from "app/core/folder/folder.types";
import { FolderService } from "app/core/folder/folder.service";
import { fSettingsFolderAddPersonDialog } from "./fSettingsFolderAddPersonDialog/SettingsFolderAddPersonDialog.html/SettingsFolderAddPersonDialog";

@Component({
    selector: 'dialog-overview-fsettingsFolderDialog-dialog',
    templateUrl: './dialog-overview-settingsFolderDialog-dialog.html',
  })
  export class fSettingsFolderDialog {
    users: SharePerson[];

    constructor(
      public dialogRef: MatDialogRef<fSettingsFolderDialog>,
      public dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: { folderId: number, nome: string },
      public _folder: FolderService, 
      private datePipe: DatePipe
    ) {
        this.loadSharePerson();
    }

    private loadSharePerson() {
        this._folder.shareperson(this.data.folderId, null).subscribe((resp)=> {
            this.users = resp;
            console.log(resp);
        });
    }

    removePerson(userId: number) {
        this._folder.removeSharePerson(userId, this.data.folderId, null).subscribe((resp) => {
            console.log(resp);
            this.loadSharePerson();
        });
    }

    addUser() {
        const dialogRef = this.dialog.open(fSettingsFolderAddPersonDialog, {
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