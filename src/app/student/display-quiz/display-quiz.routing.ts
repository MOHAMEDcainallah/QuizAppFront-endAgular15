import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DisplayQuizComponent } from "./display-quiz.component";


const routes: Routes = [
  {
    path: '',
    component: DisplayQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayQuizRoutingModule {}
