import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/LoginService/login.service';

@Component({
  selector: 'app-report-problem',
  templateUrl: './report-problem.component.html',
  styleUrls: ['./report-problem.component.scss']
})
export class ReportProblemComponent implements OnInit {

  classRooms : any;
  serverLink : any;
  specifiClassRoom : any;

  constructor(private loginService : LoginService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.displayAllClassRooms();
  }

  displayAllClassRooms()
  {
    this.loginService.GetAllClassRoom().subscribe(data => {
      this.classRooms = data;
      //console.log(data)
      //this.findServerLink();
    }, err => {
      this._snackBar.open("Can Not Display ClassRooms");
    })
  }

}
