import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { KemptonClassesComponent } from './kempton-classes/kempton-classes.component';
import { LoginComponent } from './login/login.component';
import { PretoriaClassesComponent } from './pretoria-classes/pretoria-classes.component';
import { StellenboschClassesComponent } from './stellenbosch-classes/stellenbosch-classes.component';
import { UpdateClassComponent } from './update-class/update-class.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { ZambiaClassesComponent } from './zambia-classes/zambia-classes.component';

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
      { path: 'class/:classIP', component: ClassesComponent},
    ]},
  { path: 'addclass', component: AddClassComponent},
  { path: 'pretoria', component: PretoriaClassesComponent},
  { path: 'kempton', component: KemptonClassesComponent},
  { path: 'stellenbosch', component: StellenboschClassesComponent},
  { path: 'zambia', component: ZambiaClassesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
