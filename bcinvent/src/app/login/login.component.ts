import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup = new FormGroup({
    'email': new FormControl('',[Validators.required, Validators.email]),
    'password': new FormControl('',[Validators.required])
  });

  constructor(private router : Router,
    private loginService : LoginService,
    private _snackbar : MatSnackBar) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.loginform.value).subscribe(data =>{
      this.btnClick();
    }, err => {
      this._snackbar.open('Incorrect credentials');
    })
  }

  btnClick(){
    let name = this.loginform.get('email')?.value;
    sessionStorage.setItem('name',name);
    this.router.navigateByUrl('/home');
  };

}
