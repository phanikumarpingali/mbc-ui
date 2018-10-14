import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './dialog-data.interface';

@Component({
    selector: 'app-add-client-dialog',
    templateUrl: './add-client-dialog.html',
})
export class AddClientDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<AddClientDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submitClientDetails(clientData) {
        console.log('submitClientDetails : ' + clientData);
    }
}
