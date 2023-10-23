import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ThankstoComponent } from './thanksto/thanksto.component';
import { AboutusNavbarComponent } from './aboutus-navbar/aboutus-navbar.component';
import { Aboutus2Component } from './aboutus2/aboutus2.component';
import { Aboutus3Component } from './aboutus3/aboutus3.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ProjectdetailsComponent,
    ThankstoComponent,
    AboutusNavbarComponent,
    Aboutus2Component,
    Aboutus3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
