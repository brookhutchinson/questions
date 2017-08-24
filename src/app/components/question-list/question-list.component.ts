// components
import { Component, OnInit } from '@angular/core';

// models
import { Question }          from './../../models/question.model';

// services
import { DataService }       from './../../services/data.service';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  // define properties
  public questions: Question[];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    // use DataService to retrieve questions
    this.questions = this.dataService.getQuestions();
  }
}