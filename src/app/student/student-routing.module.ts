import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path:'quiz',
        loadChildren: () =>
        import('../student/display-quiz/display-quiz.module').then(
          (mo) => mo.DisplayQuizModule
        ),
      },
      {
        path:'start-quiz',
        loadChildren: () =>
        import('../student/start-quiz/start-quiz.module').then(
          (mo) => mo.StartQuizModule
        ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
