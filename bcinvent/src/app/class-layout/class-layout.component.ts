import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/LoginService/login.service';

@Component({
  selector: 'app-class-layout',
  templateUrl: './class-layout.component.html',
  styleUrls: ['./class-layout.component.scss']
})

export class ClassLayoutComponent implements OnInit {

  classId: number = 0;
  classRoom: any;
  computers: any;

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
      console.log(data)
    }, err =>{
      this._snackBar.open("Unable to displayClass Room");
    })
  }
}