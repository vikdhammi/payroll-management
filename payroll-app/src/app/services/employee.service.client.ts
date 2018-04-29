import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { environment } from '../../environments/environment';
@Injectable()

export class EmployeeService {
    constructor(private _http: Http, private router: Router, private sharedService: SharedService) {}

    baseUrl = environment.baseUrl;

    headers = new Headers();
    options = new RequestOptions({
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });


    createEmployee(employee){
        console.log("In emp serc client");    
        const body = {
                firstName : employee.firstName,
                lastName : employee.lastName,
                email : employee.email,
                baseSal : employee.baseSal,
                medical : employee.medical,
                tax : employee.tax,
                finalSal : employee.baseSal - employee.medical - employee.tax
            };
        console.log(this.baseUrl + '/api/add');

    
    //    this.options.headers.append('Content-type' , 'application/json');
        return this._http.post(this.baseUrl + '/api/add', body, this.options)
            .map(
                (res : Response) => {
                    const data = res.json;
                    console.log(data);
                    return data;
                }
            );   
        
    }

    getAllEmployees() {
        return this._http.get(this.baseUrl + '/api/home')
            .map(
                (res : Response) => { 
                    const data = res.json();
                    return data;
                }
            );
    }

    getEmployeeById(employeeId : String) {
        return this._http.get(this.baseUrl + '/api/home/' + employeeId)
                .map(
                    (res : Response) => {
                        const data = res.json();
                        console.log(data);
                        return data;
                    }
                );
    }

    updateEmployee(employee : any) {
        return this._http.put(this.baseUrl + '/api/home/' + employee._id, employee)
                    .map(
                        (res : Response) => {
                            return 'Updated';
                        }
                    );
    }

    deleteEmployee(employeeId) {
        var url = this.baseUrl + '/api/home/' + employeeId;
        return this._http.delete(url)
                    .map(
                        (res : Response) => {
                            const data = res;
                            return data;
                        }
                    );
    }
}
