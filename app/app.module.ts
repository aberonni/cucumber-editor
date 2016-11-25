import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { SortablejsModule } from 'angular-sortablejs';

import { AppComponent }  from './app.component';
import { GherkinEditorComponent } from './gherkin-editor.component';
import { ScenarioEditorComponent } from './scenario-editor.component';

import { ScenarioService } from './scenario.service';
import { SpyStepsService } from './spy-steps.service';

@NgModule({
  imports: [
    BrowserModule,
    SortablejsModule,
    HttpModule
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
  	ScenarioService,
    SpyStepsService
  ]
})
export class AppModule { }