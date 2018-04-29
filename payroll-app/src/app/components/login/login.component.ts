import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username : String;
  password : String;
  
  constructor() { }

  ngOnInit() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    
  }

}
