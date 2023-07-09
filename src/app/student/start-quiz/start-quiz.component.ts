import { Component } from '@angular/core';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent {

  isSubmit: boolean = false;

  questions: any[] = [
    {
      content: 'Question 1: What is the output of the following code?\n\nconsole.log(2 + "2");',
      option1: '22',
      option2: '4',
      option3: 'NaN',
      option4: 'Error',
      answer: '22'
    },
    {
      content: 'Question 2: Which keyword is used to declare a variable in JavaScript?',
      option1: 'var',
      option2: 'int',
      option3: 'let',
      option4: 'const',
      answer: 'var'
    },
    {
      content: 'Question 3: What is the result of the following expression?\n\ntypeof null;',
      option1: 'null',
      option2: 'undefined',
      option3: 'object',
      option4: 'string',
      answer: 'object'
    },
    {
      content: 'Question 4: Which method is used to add an element to the end of an array in JavaScript?',
      option1: 'push()',
      option2: 'pop()',
      option3: 'shift()',
      option4: 'unshift()',
      answer: 'push()'
    },
    {
      content: 'Question 5: What does the "=== " operator do in JavaScript?',
      option1: 'Checks for equality with type conversion',
      option2: 'Checks for equality without type conversion',
      option3: 'Assigns a value to a variable',
      option4: 'Performs bitwise comparison',
      answer: 'Checks for equality without type conversion'
    }
  ];

  submitQuiz() {
    this.isSubmit = true;
  }
}
