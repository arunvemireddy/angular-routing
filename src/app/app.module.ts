import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServsampService } from './servsamp.service';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
   EmployeeComponent,
   DepartmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServsampService],
  bootstrap: [AppComponent]
})
export class AppModule { }
