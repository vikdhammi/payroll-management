import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service.client';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees = {};

  constructor(private _employeeService : EmployeeService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  
  ngOnInit() {
    this._employeeService.getAllEmployees()
        .subscribe(
          (data) => {
            console.log(data);
            this.employees = data; },
            (error) => console.log(error)
        );
  }

}
