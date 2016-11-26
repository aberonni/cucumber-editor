import { Component, Input} from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { Step } from './step';
import { Scenario } from './scenario';

import { SpyStepsService } from './spy-steps.service';

@Component({
  selector: 'my-scenario-editor',
  template: `
    <div class="steps" [sortablejs]="scenario.steps" [sortablejsOptions]="options">
      <step *ngFor="let step of scenario.steps" [step]="step"></step>
      <button class="add"
      	(click)="onAdd()">
      	ADD STEP
      </button>
    </div>
  `
})
export class ScenarioEditorComponent {
  @Input() scenario: Scenario;

  private options: SortablejsOptions = {
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