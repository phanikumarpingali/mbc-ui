import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './dialog-data.interface';

@Component({
    selector: 'app-expences-dialog',
    templateUrl: './expences-dialog.html',
})
export class ExpencesDialogComponent {
    private expencesData;
    private editExpence = false;

    constructor(
        public dialogRef: MatDialogRef<ExpencesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.expencesData = data;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submitClientDetails(clientData) {
        this.dialogRef.close();
    }
}
