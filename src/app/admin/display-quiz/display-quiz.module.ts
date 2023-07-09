import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayQuizComponent } from './display-quiz.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DisplayQuizRoutingModule } from './display-quiz.routing';

@NgModule({
  declarations: [
    DisplayQuizComponent
  ],
  imports: [
    CommonModule,
    DisplayQuizRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class DisplayQuizModule { }
