import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartQuizComponent } from './start-quiz.component';


import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StartQuizRoutingModule } from './start-quiz.routing';

@NgModule({
  declarations: [
    StartQuizComponent
  ],
  imports: [
    CommonModule,
    StartQuizRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule
  ]
})
export class StartQuizModule { }
