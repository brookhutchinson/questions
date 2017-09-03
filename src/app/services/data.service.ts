// modules
import { Injectable } from '@angular/core';

// models
import { Question }   from '../models/question.model';

@Injectable()
export class DataService {
  // define properties
  public questions: Question[];

  constructor() {
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

  getQuestions() {
    // return questions
    return this.questions;
  }

  addQuestion(question: Question) {
    // add new question object to "questions"
    this.questions.unshift(question);
  }

  removeQuestion(question: Question) {
    // remove question from "questions" array of objects property
    for (let i = 0; i < this.questions.length; i++) {
      // check if current question is the same question as the question interation
      if (question == this.questions[i]) {
        // spice out that specific question from "questions" property array of objects
        this.questions.splice(i, 1);
      }
    }
  }
}