import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ThankstoComponent } from './thanksto/thanksto.component';
import { AboutusNavbarComponent } from './aboutus-navbar/aboutus-navbar.component';
import { Aboutus2Component } from './aboutus2/aboutus2.component';
import { Aboutus3Component } from './aboutus3/aboutus3.component';

const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent},
  { path: 'aboutus2', component: Aboutus2Component},
  { path: 'aboutus3', component: Aboutus3Component},
  { path: 'projectdetails', component: ProjectdetailsComponent},
  { path: 'thanksto', component: ThankstoComponent},
  { path: 'aboutus-navbar', component: AboutusNavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
