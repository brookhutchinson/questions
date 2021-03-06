// modules
import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';

// components
import { AppComponent }          from './app.component';
import { NavbarComponent }       from './components/navbar/navbar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionComponent }     from './components/question/question.component';
import { AddQuestionComponent }  from './components/add-question/add-question.component';

// services
import { DataService }           from './services/data.service';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpModule, FormsModule ],
  // components
  declarations: [ AppComponent, NavbarComponent, QuestionListComponent, QuestionComponent, AddQuestionComponent ],
  // services
  providers: [ DataService ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}