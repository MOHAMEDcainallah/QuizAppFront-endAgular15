import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { PaginatorModule } from 'primeng/paginator';

import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    PaginatorModule,
    TagModule,
    InputTextModule,
    BreadcrumbModule,
    FullCalendarModule,
    CardModule
  ]
})
export class HomeModule { }
