import { Component, Input} from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { Step } from './step';
import { Scenario } from './scenario';

import { SpyStepsService } from './spy-steps.service';

@Component({
  selector: 'my-scenario-editor',
  template: `
    <ul class="steps" [sortablejs]="scenario.steps" [sortablejsOptions]="options">
      <li *ngFor="let step of scenario.steps" class="step">
        <span class="badge">{{step.type}}</span>{{step.name}}
      </li>
      <li class="add"
      	(click)="onAdd()">
      	ADD
      </li>
    </ul>
  `
})
export class ScenarioEditorComponent /*implements OnInit*/ {
  @Input() scenario: Scenario;

  private options: SortablejsOptions = {
    group: 'steps',
    draggable: '.step',
    animation: 150
  };

  constructor(private spyStepsService: SpyStepsService) { }
  
  onAdd(): void {
    this.spyStepsService.getSteps().then(steps => {
      let step = {name: steps[0].name, type: steps[0].type} as Step;
      this.scenario.steps.push(step);
    })
  }

}