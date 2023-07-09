import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsQuizComponent } from "./details-quiz.component";
import { AddQuestionComponent } from "../add-question/add-question.component";



const routes: Routes = [
  {
    path: '',
    component: DetailsQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsQuizRoutingModule {}
