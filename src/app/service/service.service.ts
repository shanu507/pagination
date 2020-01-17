import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'jquery';
import { map, filter } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  totalAngularPackages;
  total:number;
 constructor(private http:HttpClient) {}

  GetMethod() {
      return this.http.get<any>('https://hn.algolia.com/api/v1/search_by_date?tags=story').pipe(map((data)=>{
        // this.totalAngularPackages = data.total;
        return data;
      }));
  }

}
