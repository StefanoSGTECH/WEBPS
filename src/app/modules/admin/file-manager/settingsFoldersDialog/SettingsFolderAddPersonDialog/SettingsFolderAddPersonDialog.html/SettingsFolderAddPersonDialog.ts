import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DatePipe } from '@angular/common';
import { SharePerson } from "app/core/folder/folder.types";
import { FolderService } from "app/core/folder/folder.service";

@Component({
    selector: 'dialog-overview-SettingsFolderAddPersonDialog-dialog',
    templateUrl: './SettingsFolderAddPersonDialog.html',
  })
  export class SettingsFolderAddPersonDialog {
    users: SharePerson[];

    constructor(
      public dialogRef: MatDialogRef<SettingsFolderAddPersonDialog>,
      public dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: { folderId: number, documentId: number, nome: string },
      public _folder: FolderService, 
      private datePipe: DatePipe
    ) {
      this.loadSharePersonaddList();
  }

  addPerson(userId: number) {
    this._folder.addSharePersonFolder(userId, this.data.folderId, this.data.documentId).subscribe((resp) => {
      console.log(resp);
      this.onNoClick();
    });
  }

  private loadSharePersonaddList() {
      this._folder.addSharepersonList(this.data.folderId, this.data.documentId).subscribe((resp)=> {
          this.users = resp;
      });
  }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }