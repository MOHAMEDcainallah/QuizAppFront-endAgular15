import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-quiz',
  templateUrl: './details-quiz.component.html',
  styleUrls: ['./details-quiz.component.scss']
})
export class DetailsQuizComponent {
 quiz : any = {
    title : 'Javascript',
    category: 'software',
    description: 'Programming language',
    maxMarks: 10,
    numberOfQuestions: 5
 };
 questions: any = [
  {
    question: 'What is the output of the following code?\n\nconsole.log(5 + "5");',
    options: ['10', '55', 'Error', 'NaN'],
    correctAnswer: '55'
  },
  {
    question: 'Which of the following is a valid JavaScript variable name?',
    options: ['123variable', '$variable', 'var 123', '_variable'],
    correctAnswer: '_variable'
  },
  {
    question: 'What does the DOM stand for?',
    options: ['Document Object Model', 'Data Object Model', 'Digital Output Mode', 'Document Order Model'],
    correctAnswer: 'Document Object Model'
  },
  {
    question: 'Which method is used to remove the last element from an array in JavaScript?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    correctAnswer: 'pop()'
  },
  {
    question: 'What does the isNaN() function do in JavaScript?',
    options: ['Checks if a value is not a number', 'Checks if a value is a number', 'Checks if a value is undefined', 'Checks if a value is null'],
    correctAnswer: 'Checks if a value is not a number'
  }
];
constructor(private router: Router){}



}
