import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionListComponent } from './position/position-list/position-list.component';



import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { SalaryListComponent } from './salary/salary-list/salary-list.component';

const routes: Routes = [

  {
    path: "salary",
    component: SalaryListComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },

  {
    path: 'add',
    component: CreateEmployeeComponent
  },
  {
    path: 'positions',
    component: PositionListComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
