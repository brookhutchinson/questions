// modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

// components
import { AppComponent }  from './app.component';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpModule, FormsModule ],
  // components
  declarations: [ AppComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}