import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { SortablejsModule } from 'angular-sortablejs';

import { AppComponent }  from './app.component';
import { GherkinEditorComponent } from './gherkin-editor.component';
import { ScenarioComponent } from './scenario.component';
import { StepComponent } from './step.component';

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
    ScenarioComponent,
    StepComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
    SpyStepsService
  ]
})
export class AppModule { }