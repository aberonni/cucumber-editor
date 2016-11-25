import { Component, Input} from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { Step } from './step';
import { Scenario } from './scenario';

@Component({
  selector: 'my-scenario-editor',
  template: `
    <ul class="steps" [sortablejs]="scenario.steps" [sortablejsOptions]="options">
      <li *ngFor="let step of scenario.steps" class="step">
        <span class="badge">{{step.type}}</span>{{step.name}}
      </li>
      <li class="add"
      	(click)="onAdd(scenario.steps)">
      	ADD
      </li>	
    </ul>
  `
})
export class ScenarioEditorComponent /*implements OnInit*/ {
  @Input() scenario: Scenario[];

  options: SortablejsOptions = {
    group: 'steps',
    animation: 150
  };

  onAdd(steps: Step[]): void {
    steps.push({
    	name: 'New step',
    	type: 'And'
    })
  }

}