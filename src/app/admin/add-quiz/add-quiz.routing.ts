import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddQuizComponent } from "./add-quiz.component";


const routes: Routes = [
  {
    path: '',
    component: AddQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddQuizRoutingModule {}
