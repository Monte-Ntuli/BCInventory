import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/LoginService/login.service';

@Component({
  selector: 'app-stellenbosch-classes',
  templateUrl: './stellenbosch-classes.component.html',
  styleUrls: ['./stellenbosch-classes.component.scss']
})
export class StellenboschClassesComponent implements OnInit {

  classRooms : any;
  serverLink : any;
  classRoom : any;

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

  findServerLink()
  {
    Object.entries(this.classRooms).forEach(([key, value], index) => {
      // 👇️ name Tom 0, country Chile 1
      console.log(key, value, index);

      if (index == 0) {

        this.serverLink = value;
        console.log(this.serverLink.classIP);
      }
 
    });
    //console.log("this is server link",this.serverLink.classIP);
  }

  goToServer()
  {
    this.classRooms.classIP = this.serverLink
    //window.location.href='http://www.cnn.com/';
    this.router.navigateByUrl(this.classRooms.classIP);
    console.log(this.serverLink)
  }

  displayAllClassRooms()
  {
    this.loginService.GetAllClassRoom().subscribe(data => {
      this.classRooms = data;
      this.findServerLink();
    }, err => {
      this._snackBar.open("Can Not Display ClassRooms");
    })
  }

}
