// modules
import { Injectable } from '@angular/core';

// models
import { Question }   from '../models/question.model';

@Injectable()
export class DataService {
  // define properties
  public questions: Question[];

  constructor() {}

  // get questions from Local Storage
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

  // add question to Local Storage
  addQuestion(question: Question) {
    // add new question object to questions property array of objects
    this.questions.unshift(question);

    // initialize local variable
    let questions;

    // check if value is not stored inside Local Storage
    if (localStorage.getItem('questions') === null) {
      // questions property is not stored inside Local Storage
      // set questions property value equal to empty array
      questions = [];

      // add new question to top of array of questions
      questions.unshift(question);

      // set new array of objects to Local Storage
      // convert array of objects value into a string value
      localStorage.setItem('questions', JSON.stringify(questions));

    } else {
      // get questions property value from Local Storage and store inside local variable named questions
      questions = JSON.parse(localStorage.getItem('questions'));

      // add new question to array of questions
      questions.unshift(question);

      // set Local Storage questions property to new array of questions that includes new question
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // remove question from Local Storage
  removeQuestion(question: Question) {
    // loop through question objects inside questions property
    for (let i = 0; i < this.questions.length; i++) {
      // check if selected question is the same question as the question interation
      if (question == this.questions[i]) {
        // remove question from questions property
        this.questions.splice(i, 1);
      }
    }
  }
}