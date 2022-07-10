import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NotificationService } from "app/core/notification/notification.service";
import { OperazioneResponse } from "app/core/notification/notification.types";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'dialog-overview-operationDialog-dialog',
    templateUrl: './dialog-overview-operationDialog-dialog.html',
  })
  export class OperationDialog {
    operation: OperazioneResponse

    constructor(
      public dialogRef: MatDialogRef<OperationDialog>,
      @Inject(MAT_DIALOG_DATA) public id: number,
      private _notification: NotificationService,
      private datePipe: DatePipe
    ) {
      this._notification.notificationContent(id).subscribe((resp) => {
        this.operation = resp
        this.operation.data = this.datePipe.transform(resp.data,"dd-MM-yyyy")
      });
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }