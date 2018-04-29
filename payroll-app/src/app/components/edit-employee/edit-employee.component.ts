import { SharedService } from "../../services/shared.service";
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeId : String;
  firstName : String;
  lastName : String;
  email : String;
  baseSal : Number;
  medical : Number;
  tax : Number;
  finalSal : Number;

  employee = {
    id : {},
    firstName : '',
    lastName  : '',
    email : '',
    baseSal : '',
    medical : '',
    tax : '',
    finalSal : ''
  };
  constructor(private activatedRoute : ActivatedRoute, private _employeeService : EmployeeService, private router : Router, private sharedService : SharedService) { }

  ngOnInit() {
    
        this.activatedRoute.params
            .subscribe(params => { 
              this.employeeId = params['employeeId'];
              console.log(this.employeeId);
            });
    
        this._employeeService.getEmployeeById(this.employeeId)
            .subscribe(
              (data: any) => {
                
                this.employee =  data;},
                (error) => console.log(error)
              );
        }
  

       updateEmployee() {
         console.log("in update");
        //  let updatedEmployee = {
        //    _id : this.employee['_id'],
        //    firstName : this.firstName,
        //    lastName : this.lastName,
        //    email : this.email,
        //    baseSal : this.baseSal,
        //    medical : this.medical,
        //    tax : this.tax,
        //    finalSal : this.finalSal
        //  };
        console.log(this.employee);
         this._employeeService.updateEmployee(this.employee)
              .subscribe(
                (data : any) => {
                    
                    this._employeeService.getEmployeeById(this.employeeId)
                      .subscribe(
                        (data : any) => {
                          localStorage.setItem('employee', JSON.stringify(data));
                          this.ngOnInit();
                          this.router.navigate(['/home']);
                        }
                      )
                },
                (error : any) => console.log(error)
              );
       }
       
       deleteEmployee(){
         this._employeeService.deleteEmployee(this.employeeId)
              .subscribe(
                (data : any) => this.router.navigate(['/home']),
                (error) => console.log(error)
              );
       }
    
    }