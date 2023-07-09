import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayQuizComponent } from './display-quiz.component';
import { DisplayQuizRoutingModule } from './display-quiz.routing';


import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  declarations: [
    DisplayQuizComponent
  ],
  imports: [
    CommonModule,
    DisplayQuizRoutingModule,
    CardModule,
    ButtonModule,
    RadioButtonModule
  ]
})
export class DisplayQuizModule { }
