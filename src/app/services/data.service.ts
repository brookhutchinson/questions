// modules
import { Injectable } from '@angular/core';

// models
import { Question }   from '../models/question.model';

@Injectable()
export class DataService {
  // define properties
  public questions: Question[];

  constructor() {}

  getQuestions() {
    // check if value is stored inside Local Storage and then set questions property value
    if (localStorage.getItem('questions') === null) {
      // questions property is not stored inside Local Storage
      // set "questions" property value equal to empty array
      this.questions = [];

    } else {
      // questions property is stored inside Local Storage
      // set questions property value equal to Local Storage questions property value
      // convert the string value that is stored inside Local Storage into an object value
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

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