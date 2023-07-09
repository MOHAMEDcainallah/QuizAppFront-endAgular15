import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuizComponent } from './add-quiz.component';
import { AddQuizRoutingModule } from './add-quiz.routing';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AddQuizComponent
  ],
  imports: [
    CommonModule,
    AddQuizRoutingModule,
    CardModule,
    DropdownModule,
    ToggleButtonModule,
    InputTextModule,
    ButtonModule
  ]
})
export class AddQuizModule { }
