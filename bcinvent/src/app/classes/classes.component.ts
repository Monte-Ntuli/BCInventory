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
  serverLink : any;
  specifiClassRoom : any;

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

      if (index == 1) {

        this.serverLink = value;
        this.specifiClassRoom = value;
        this.serverLink = this.specifiClassRoom.classIP;
        console.log(this.serverLink);
      }
 
    });
    //console.log("this is server link",this.serverLink.classIP);
  }

  goToServer()
  {
    this.activatedRoute.params.subscribe(data => {
      this.serverLink = data['classIP'];
    })

    window.location.href = this.serverLink;
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
