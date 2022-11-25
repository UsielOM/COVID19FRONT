import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './Guards/validar-token.guard';

const routes: Routes = [

  {path:'',
loadChildren:() => import('./Pages/home/home.module').then(m => m.HomeModule)
},
{
path: 'User',
loadChildren:() => import('./Pages/user/user.module').then(m =>m.UserModule), 
canActivate:[ValidarTokenGuard], 
canLoad:[ValidarTokenGuard]
},
{path: 'Doctor',
loadChildren:() => import('./Pages/doctor/doctor.module').then(m => m.DoctorModule)

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
