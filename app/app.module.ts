import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { GherkinEditorComponent } from './gherkin-editor.component';

import { StepService } from './step.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    GherkinEditorComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
  	StepService
  ]
})
export class AppModule { }