import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
// import {MatTableDataSource} from '@angular/material/table';
import { Subscription, timer } from 'rxjs';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  response: any;
  totalAngularPackages;
  total:number;
  searchText;
  
  constructor(private Myservice:ServiceService) { }
  data:any;
  // totalAngularPackages: string[] = ['title', 'url', 'created_at', 'author'];

  ngOnInit() {
    const source = timer(0, 10000);
    this.subscription = source.subscribe(val => this.loopingFunction());
  	this.loopingFunction();
  }
  

  loopingFunction(){
    this.Myservice.GetMethod().subscribe(data=>{
      this.totalAngularPackages = data.hits;
      console.log( this.totalAngularPackages);
    })
  }
  
}
