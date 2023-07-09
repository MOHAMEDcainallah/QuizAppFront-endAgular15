import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartQuizComponent } from "./start-quiz.component";


const routes: Routes = [
  {
    path: '',
    component: StartQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartQuizRoutingModule {}
