import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SortablejsModule } from 'angular-sortablejs';

import { AppComponent }  from './app.component';
import { GherkinEditorComponent } from './gherkin-editor.component';
import { ScenarioEditorComponent } from './scenario-editor.component';

import { ScenarioService } from './scenario.service';

@NgModule({
  imports: [
    BrowserModule,
    SortablejsModule
  ],
  declarations: [
    AppComponent,
    GherkinEditorComponent,
    ScenarioEditorComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
  	ScenarioService
  ]
})
export class AppModule { }