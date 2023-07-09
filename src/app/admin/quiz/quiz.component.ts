import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit(): void {
    this.items = [{ label: 'Quizzes' }];

    this.home = { icon: 'pi pi-home', routerLink: '/admin/home' };
  }

  constructor(private router: Router) {}


}
