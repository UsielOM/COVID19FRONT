import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',
loadChildren:() => import('./Pages/home/home.module').then(m => m.HomeModule)
},
{path: 'User',
loadChildren:() => import('./Pages/user/user.module').then(m =>m.UserModule)

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
