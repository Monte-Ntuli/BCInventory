import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/LoginService/login.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classRooms : any;

  constructor(private loginService : LoginService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.displayAllClassRooms();
  }

  addClass()
  {
    this.router.navigateByUrl('/addclass');
  }

  displayAllClassRooms()
  {
    this.loginService.GetAllClassRoom().subscribe(data => {
      this.classRooms = data;
      console.log(data)
    }, err => {
      this._snackBar.open("Can Not Display ClassRooms");
    })
  }
}
