import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  // define properties
  public questions: Object[];

  constructor() {}

  ngOnInit() {
    // set properties
    this.questions = [
      {
        text: 'Who is your favorite music artist?',
        answer: 'Bob Schneider',
        hide: true
      },
      {
        text: 'What is the name of your favorite song?',
        answer: 'Hideaway',
        hide: true
      },
      {
        text: 'What is the name of your second favorite song?',
        answer: '40 Dogs',
        hide: true
      }
    ];
  }
}