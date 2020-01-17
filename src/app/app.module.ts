import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import { ServiceService } from './service/service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import {DataTableModule} from "angular-6-datatable";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTableModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  entryComponents:[PopupComponent],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
