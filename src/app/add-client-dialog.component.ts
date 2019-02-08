import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './dialog-data.interface';
import { HttpService } from './http.service';

@Component({
    selector: 'app-add-client-dialog',
    templateUrl: './add-client-dialog.html',
})
export class AddClientDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<AddClientDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private httpService: HttpService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submitClientDetails(clientData) {
        this.httpService.addClient(clientData).subscribe(data => {
            if (data.status === 'success') {
                alert("Client Added Successfully");
                console.log("Client Added Successfully");
            } else {
                alert(data.errorMessage);
            }
        }, error => {
            alert("Error in adding client");
            console.log(error);
        })
        this.httpService.CLIENT_LIST.next(clientData);
        this.dialogRef.close();
    }
}
