import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DatePipe } from '@angular/common';
import { SharePerson } from "app/core/folder/folder.types";
import { FolderService } from "app/core/folder/folder.service";

@Component({
    selector: 'fdialog-overview-SettingsFolderAddPersonDialog-dialog',
    templateUrl: './SettingsFolderAddPersonDialog.html',
  })
  export class fSettingsFolderAddPersonDialog {
    users: SharePerson[];

    constructor(
      public dialogRef: MatDialogRef<fSettingsFolderAddPersonDialog>,
      public dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: { folderId: number, nome: string },
      public _folder: FolderService, 
      private datePipe: DatePipe
    ) {
      this.loadSharePersonaddList();
  }

  addPerson(userId: number) {
    this._folder.addSharePersonFolder(userId, this.data.folderId, null).subscribe((resp) => {
      console.log(resp);
      this.onNoClick();
    });
  }

  private loadSharePersonaddList() {
      this._folder.addSharepersonList(this.data.folderId, null).subscribe((resp)=> {
          this.users = resp;
      });
  }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }