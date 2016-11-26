import { Component, Input, OnInit} from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { Step } from './step';
import { Scenario } from './scenario';

import { SpyStepsService } from './spy-steps.service';

@Component({
  selector: 'scenario',
  template: `
    <div class="panel-heading"><div class="input-group">
        <div class="input-group-addon">Scenario:</div>
        <input 
          type="text"
          [(ngModel)]="scenario.name" 
          class="form-control" 
          placeholder="Name">
      </div></div>
    <div class="panel-body">
      <div class="steps" [sortablejs]="scenario.steps" [sortablejsOptions]="sortableOptions">
        <step *ngFor="let step of scenario.steps" [step]="step"></step>
      </div>
      <input auto-complete 
        [(ngModel)]="newStep" 
        [source]="stepLib" 
        auto-complete-placeholder="Click here to add a new step"
        placeholder="Click here to add a new step"
        display-property-name="name"
        (valueChanged)="addStep(newStep)"/>
    </div>
  `
})
export class ScenarioComponent implements OnInit {
  @Input() scenario: Scenario;
  
  private stepLib: Step[];
  private newStep: Step;

  private sortableOptions: SortablejsOptions = {
    draggable: 'step',
    animation: 150
  };

  private addStep(step: Step): void {
    if(!step)
      return;

    this.scenario.steps.push({
      name: step.name, 
      type: step.type
    } as Step);

    this.newStep = {name: ''} as Step;
  }

  constructor(private spyStepsService: SpyStepsService) { }
  
  ngOnInit(): void {
    this.spyStepsService.getSteps().then(steps => this.stepLib = steps);
  }
}
