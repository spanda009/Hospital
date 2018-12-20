import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalviewComponent } from './hospitalview/hospitalview.component';
import { DepartmentviewComponent } from './departmentview/departmentview.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/hospital' , pathMatch: 'full'},
  { path: 'hospital', component: HospitalviewComponent },
  { path: 'department/:hospitalname', component: DepartmentviewComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HospitalviewComponent,
    DepartmentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
