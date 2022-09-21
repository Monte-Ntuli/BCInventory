import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateClassComponent } from './update-class/update-class.component';
import { ViewClassComponent } from './view-class/view-class.component';

const routes: Routes = [

  { path: '', redirectTo: 'login',pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent},

  { path: 'classes', 
    children : [
      { path: '', component: ClassesComponent},
      { path: 'viewclass/:id', component: ViewClassComponent},
      { path: 'updateclass/:id', component: UpdateClassComponent},
      
    ]},
  { path: 'addclass', component: AddClassComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
