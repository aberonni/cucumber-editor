import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { SortablejsModule } from 'angular-sortablejs';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent }  from './app.component';
import { GherkinComponent } from './gherkin/gherkin.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { StepComponent } from './step/step.component';

import { StepService } from './step/step.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SortablejsModule,
    HttpModule,
    Ng2AutoCompleteModule
  ],
  declarations: [
    AppComponent,
    GherkinComponent,
    ScenarioComponent,
    StepComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
    StepService
  ]
})
export class AppModule { }