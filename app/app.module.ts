import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SortablejsModule } from 'angular-sortablejs';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent }  from './app.component';
import { GherkinComponent } from './gherkin/gherkin.component';
import { TagsComponent } from './tags/tags.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { ScenarioTableComponent } from './scenario/scenario-table.component';
import { StepComponent } from './step/step.component';
import { StepParameterComponent } from './step/step-parameter.component';

import { StepService } from './step/step.service';

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        GherkinComponent,
        TagsComponent,
        ScenarioComponent,
        ScenarioTableComponent,
        StepComponent,
        StepParameterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SortablejsModule,
        HttpModule,
        Ng2AutoCompleteModule,
    ],
    providers: [
        StepService,
    ],
})
export class AppModule { }