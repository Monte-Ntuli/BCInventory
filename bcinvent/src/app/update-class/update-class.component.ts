import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { LoginService } from '../services/LoginService/login.service';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.scss']
})
export class UpdateClassComponent implements OnInit {

  classId: number = 0;
  classRoom: any;
  className: any;
  classRoomInfo: any;
  item: any;

  classComputer = ' ';
  classScreens = ' ';
  classMouses = ' ';
  classKeyboards = ' ';
  lecturerPC = ' ';
  lecturerScreens = ' ';
  classTVs = ' ';
  classTVRemotes = ' ';
  classServers = ' ';
  micrphones = ' ';
  projectors = ' ';

  classRoomInfoForm : FormGroup = new FormGroup({
    'className': new FormControl('',[Validators.minLength(1)]),
    'classIP': new FormControl('',[Validators.maxLength(15)]),
    'classComputer': new FormControl(''),
    'classScreens': new FormControl(''),
  })

  constructor(private loginService : LoginService,
    private _snackBar : MatSnackBar,
    private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.classId = data['id'];
    })

    this.loginService.GetSpecificClassRoom(this.classId).subscribe(data => {
      this.classRoom = data;
      this.className = this.classRoom.className;
      console.log(data)
    }, err =>{
      this._snackBar.open("Unable to displayClass Room");
    })
  }

  UpdateClassName(){
    this.GetSessionDataName()
      this.loginService.UpdateClassName(this.classRoomInfo).subscribe(data => {
        this._snackBar.open("success");
        window.location.reload();
      }, err =>{
        this._snackBar.open("server error");
      })
  }

  UpdateClassRoom(){
    this.GetSessionData()
      this.loginService.UpdateClassRoom(this.classRoomInfo).subscribe(data => {
        this._snackBar.open("success");
     
    }, err =>{
      this._snackBar.open("server error");
    })
  }

  GetSessionData(){

    this.classComputer = this.classRoomInfoForm.get('classComputer')?.value;
    this.classScreens = this.classRoomInfoForm.get('classScreens')?.value;

    this.classRoomInfo = {
      
      classId : this.classId,
      className : this.className,
      classComputer : this.classComputer,
      classScreens : this.classScreens,
      classMouses : this.classMouses,
      classKeyboards : this.classKeyboards,
      lecturerPC : this.lecturerPC,
      lecturerScreens : this.lecturerScreens,
      classTVs : this.classTVs,
      classTVRemotes : this.classTVRemotes,
      classServers : this.classServers,
      micrphones : this.micrphones,
      projectors : this.projectors

    }

    Object.entries(this.classRoomInfo).forEach(([key, value], index) => {
      // 👇️ name Tom 0, country Chile 1
      console.log(key, value, index);

      if (value == ' ') {
        console.log("you did well man");
      }
      else{
        console.log("not empty");
      }
    });

  }

  GetSessionDataName(){

    this.className = this.classRoomInfoForm.get('className')?.value;

    this.classRoomInfo = {

      classId : this.classId,
      className : this.className,

    }
  }


}
