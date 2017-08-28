// components
import { Component, OnInit, Input } from '@angular/core';

// models
import { Question }          from './../../models/question.model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  // define input property
  @Input('question') question: Question;

  constructor() {}

  ngOnInit() {}
}