import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsQuizComponent } from './details-quiz.component';
import { DetailsQuizRoutingModule } from './details-quiz.routing';
import { TableModule } from 'primeng/table';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    DetailsQuizComponent,
  ],
  imports: [
    CommonModule,
    DetailsQuizRoutingModule,
    CardModule,
    TableModule,
    ButtonModule
  ]
})
export class DetailsQuizModule { }
