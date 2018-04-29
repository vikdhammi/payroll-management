import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'add', component: AddEmployeeComponent
    },
    {
        path: 'home/:employeeId', component : EditEmployeeComponent 
    }

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);