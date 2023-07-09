import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (module) => module.AuthModule
      ),
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(
      (module) => module.AdminModule
    )
  },
  {
    path:'student',
    loadChildren: () => import('./student/student.module').then(
      (module) => module.StudentModule
    )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
