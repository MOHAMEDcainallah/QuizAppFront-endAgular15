import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question.component';
import { AddQuestionRoutingModule } from './add-question.routing';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    AddQuestionRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule
  ]
})
export class AddQuestionModule { }
