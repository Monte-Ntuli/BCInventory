import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/LoginService/login.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  addClassRoomForm : FormGroup = new FormGroup({
    'className': new FormControl('',[Validators.required, Validators.minLength(1)]),
    'classIP': new FormControl('',[Validators.required, Validators.maxLength(15)])
  })

  constructor(private router: Router,
    private loginService : LoginService,
    private _snackbar : MatSnackBar) { }

  ngOnInit(): void {
  }

  AddClassRoom(){
    this.loginService.CreateClassRoom(this.addClassRoomForm.value).subscribe(data =>{
      this._snackbar.open("Class Room Added Successfully")
    }, err => {
      console.log(err);
      this._snackbar.open("Server Error Occured !");
    })
  }
}
