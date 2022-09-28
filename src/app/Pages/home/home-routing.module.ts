import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomePagesComponent } from './home-pages.component';

const routes: Routes = [
  {path: '', component:HomePagesComponent, 
  children: [
    {path:'', component:LoginComponent},
    {path: 'registro', component:RegisterComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
