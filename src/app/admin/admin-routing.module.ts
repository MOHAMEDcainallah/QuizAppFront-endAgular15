import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { QuizModule } from './quiz/quiz.module';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path:'home',
        loadChildren: () =>
        import('../admin/home/home.module').then(
          (mo) => mo.HomeModule
        ),
      },
      {
        path:'profile',
        loadChildren: () =>
        import('../admin/profile/profile.module').then(
          (mo) => mo.ProfileModule
        ),
      },
      {
        path:'quiz',
        component: QuizComponent,
        children : [
          {
            path:'',
            loadChildren: () =>
            import('../admin/display-quiz/display-quiz.module').then(
              (mo) => mo.DisplayQuizModule
            ),
          },
          {
            path:'Add',
            loadChildren: () =>
            import('../admin/add-quiz/add-quiz.module').then(
              (mo) => mo.AddQuizModule
            ),
          },
          {
            path:'details',
            loadChildren: () =>
            import('../admin/details-quiz/details-quiz.module').then(
              (mo) => mo.DetailsQuizModule
            ),
          },
          {
            path:'details/add-question',
            loadChildren: () =>
            import('./add-question/add-question.module').then(
              (mo) => mo.AddQuestionModule
            ),
          },

        ]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
