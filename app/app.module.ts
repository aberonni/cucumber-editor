import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { SortablejsModule } from 'angular-sortablejs';

import { AppComponent }  from './app.component';
import { GherkinEditorComponent } from './gherkin-editor.component';
import { ScenarioEditorComponent } from './scenario-editor.component';

import { SpyStepsService } from './spy-steps.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
    SpyStepsService
  ]
})
export class AppModule { }