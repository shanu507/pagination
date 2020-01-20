import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  totalAngularPackages: any;

  constructor(private matDialogRef: MatDialogRef<PopupComponent>,@Inject(MAT_DIALOG_DATA) public data:DialogData , private Myservice:ServiceService) { }

  ngOnInit() {
    this.onNoClick
  }

onNoClick(){
alert(this.data);
  this.matDialogRef.close();
}

// loopingFunction(){
//   this.Myservice.GetMethod().subscribe(data=>{
//      this.totalAngularPackages = data.hits;
//      console.log( this.totalAngularPackages);
//    })
//  }
}
