// modules
import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';

// components
import { AppComponent }          from './app.component';
import { NavbarComponent }       from './components/navbar/navbar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpModule, FormsModule ],
  // components
  declarations: [ AppComponent, NavbarComponent, QuestionListComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}