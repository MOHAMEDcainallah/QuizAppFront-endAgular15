import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent {
  programmingLanguages: any[] = [
    {
      name: 'JavaScript',
      image: 'js.png',
      description: 'JavaScript is a programming language...',
    },
    {
      name: 'Typescript',
      image: 'ts.png',
      description: 'JavaScript is a programming language...',
    },
    {
      name: 'Java',
      image: 'java.png',
      description: 'JavaScript is a programming language...',

    },
    {
      name: 'C#',
      image: 'cshar.png',
      description: 'JavaScript is a programming language...',
    },
    {
      name: 'C',
      image: 'c.png',
      description: 'JavaScript is a programming language...',
    },
    {
      name: 'C++',
      image: 'c++.png',
      description: 'JavaScript is a programming language...',
    },
    {
      name: 'GO',
      image: 'go.png',
      description: 'JavaScript is a programming language...',
    },
  ];
  constructor(private router: Router){}

}
