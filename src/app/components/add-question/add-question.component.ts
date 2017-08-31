// components
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// models
import { Question }                                from './../../models/question.model';

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  // define output object property
  @Output() questionAdded = new EventEmitter<Question>();

  // define properties
  public text: string;
  public answer: string;

  constructor() {}

  ngOnInit() {}

  addQuestion() {
    // set output object property values using values from <form> and then emit output object property
    this.questionAdded.emit({ text: this.text, answer: this.answer, hide: true });
  }
}