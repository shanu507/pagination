import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
// import {MatTableDataSource} from '@angular/material/table';
import { Subscription, timer } from 'rxjs';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef} from '@angular/material';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  response: any;
  // totalAngularPackages;
  total:number;
  searchText;
  config: any;
  
  collection = { count: 60, data: [] };
  constructor(public dialog:MatDialog, private Myservice:ServiceService) {
  }
  data:any;
  totalAngularPackages:any;
  //  totalAngularPackages: string[] = ['title', 'url', 'created_at', 'author','name','email'];
  
  ngOnInit() {
    const source = timer(0, 10000);
    this.Myservice.GetMethod().subscribe(data=>{
      this.totalAngularPackages = data.hits;
      console.log( this.totalAngularPackages);

      for (var i = 0; i < this.totalAngularPackages.length; i++) {
        this.collection.data.push(
          {
          title: this.totalAngularPackages[i].title,
          url: this.totalAngularPackages[i].url,
          created_at: this.totalAngularPackages[i].created_at,
          author: this.totalAngularPackages[i].author,
          }
        );
      }
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: 5
      };
    
    })
    

    // this.subscription = source.subscribe(val => this.loopingFunction());
    // this.loopingFunction();
    
  }
  show(id){
    console.log(JSON.stringify(id))
  let matDialogRef=this.dialog.open(PopupComponent,{
      width:'600px',
      data:id
     });
     matDialogRef.afterClosed().subscribe(result =>{
    console.log('dialog box is closed');
  });
  }

  // loopingFunction(){
  //  this.Myservice.GetMethod().subscribe(data=>{
  //     this.totalAngularPackages = data.hits;
  //     console.log( this.totalAngularPackages);
  //   })
  // }
  pageChanged(event,v){
    
    this.config.currentPage = event;
    // if(this.config.currentPage){
    // console.log(v);
    // }
  }
  
}
