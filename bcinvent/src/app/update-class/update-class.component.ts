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

  classIP = ' ';
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
  location = ' ';

  classRoomInfoForm : FormGroup = new FormGroup({

    'className': new FormControl('',[Validators.minLength(1)]),
    'classIP': new FormControl('',[Validators.maxLength(15)]),
    'classComputer': new FormControl(''),
    'classScreens': new FormControl(''),
    'classMouses': new FormControl(''),
    'classKeyboards': new FormControl(''),
    'lecturerPC': new FormControl(''),
    'lecturerScreens': new FormControl(''),
    'classTVs': new FormControl(''),
    'classTVRemotes': new FormControl(''),
    'classServers': new FormControl(''),
    'micrphones': new FormControl(''),
    'projectors': new FormControl(''),
    'location': new FormControl('')


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
        window.location.reload();
    }, err =>{
      this._snackBar.open("server error");
      console.log(err)
    })
  }

  GetSessionData(){

    this.classIP = this.classRoomInfoForm.get('classIP')?.value;
    this.classComputer = this.classRoomInfoForm.get('classComputer')?.value;
    this.classScreens = this.classRoomInfoForm.get('classScreens')?.value;
    this.classMouses = this.classRoomInfoForm.get('classMouses')?.value;
    this.classKeyboards = this.classRoomInfoForm.get('classKeyboards')?.value;
    this.lecturerPC = this.classRoomInfoForm.get('lecturerPC')?.value;
    this.lecturerScreens = this.classRoomInfoForm.get('lecturerScreens')?.value;
    this.classTVs = this.classRoomInfoForm.get('classTVs')?.value;
    this.classTVRemotes = this.classRoomInfoForm.get('classTVRemotes')?.value;
    this.classServers = this.classRoomInfoForm.get('classServers')?.value;
    this.micrphones = this.classRoomInfoForm.get('micrphones')?.value;
    this.projectors = this.classRoomInfoForm.get('projectors')?.value;
    this.location = this.classRoomInfoForm.get('location')?.value;


    this.classRoomInfo = {
      
      classId : this.classId,
      classIP : this.classIP,
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
      projectors : this.projectors,
      location : this.location

    }

    Object.entries(this.classRoomInfo).forEach(([key, value], index) => {
      // 👇️ name Tom 0, country Chile 1
      console.log(key, value, index);

      if (value == "") {
        if (index == 1) {
          this.classRoomInfo.classIP = this.classRoom.classIP;
        }
        if (index == 3) {
          this.classRoomInfo.classComputer = this.classRoom.classComputer;
        }
        if (index == 4) {
          this.classRoomInfo.classScreens = this.classRoom.classScreens;
        }
        if (index == 5) {
          this.classRoomInfo.classMouses = this.classRoom.classMouses;
        }
        if (index == 6) {
          this.classRoomInfo.classKeyboards = this.classRoom.classKeyboards;
        }
        if (index == 7) {
          this.classRoomInfo.lecturerPC = this.classRoom.lecturerPC;
        }
        if (index == 8) {
          this.classRoomInfo.lecturerScreens = this.classRoom.lecturerScreens;
        }
        if (index == 9) {
          this.classRoomInfo.classTVs = this.classRoom.classTVs;
        }
        if (index == 10) {
          this.classRoomInfo.classTVRemotes = this.classRoom.classTVRemotes;
        }
        if (index == 11) {
          this.classRoomInfo.classServers = this.classRoom.classServers;
        }
        if (index == 12) {
          this.classRoomInfo.micrphones = this.classRoom.micrphones;
        }
        if (index == 13) {
          this.classRoomInfo.projectors = this.classRoom.projectors;
        }
        if (index == 14) {
          this.classRoomInfo.location = this.classRoom.location;
        }
      }

      
    });

    console.log(this.classRoomInfo);
    
  }

  GetSessionDataName(){

    this.className = this.classRoomInfoForm.get('className')?.value;

    this.classRoomInfo = {

      classId : this.classId,
      className : this.className,

    }
  }


}
