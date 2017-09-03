// components
import { Component, OnInit, Input } from '@angular/core';

// models
import { Question }                 from './../../models/question.model';

// services
import { DataService }              from './../../services/data.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  // define input property
  @Input('question') question: Question;

  constructor(public dataService: DataService) {}

  ngOnInit() {}

  removeQuestion(question: Question) {
    // use DataService to remove question
    this.dataService.removeQuestion(question);
  }
}