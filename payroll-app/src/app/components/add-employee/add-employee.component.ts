import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service.client';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @ViewChild('f') createForm : NgForm;

  total : Number
  employee = {
  firstName : '',
  lastName : '',
  email : '',
  baseSal : '',
  medical : '',
  tax : ''
  // finalSal : ''
  };

  constructor(private _employeeService : EmployeeService, private router : Router) { }

  ngOnInit() {
  }

  createEmployee() {
    console.log("In add emp comp");
    
    console.log();
    this._employeeService.createEmployee(this.employee)
        .subscribe(
          (data : any) => {
            this.router.navigate(['/home']);
          },
          (error : any) => {
            console.log(error);
          }
        );
  }

  
}
