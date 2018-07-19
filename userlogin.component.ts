import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formControlBinding } from '../../../node_modules/@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  formdata;
  constructor(private router: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup(
      {
        uname: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])),
        password: new FormControl("", this.passwordvalidation)
      }
    );
  }

  passwordvalidation(FormControl) {
    if (FormControl.value.length < 5) {
      return { "password": true };
    }
  }

  onClickSubmit(data) {
    console.log(data.uname);
    if (data.uname == "systemadmin" && data.password == "admin123") {
      alert("Login successful");
      this.router.navigate(['app-mainpage'])
    }
    else {
      alert("Invalid Login");
      return false;
    }
  }
}
