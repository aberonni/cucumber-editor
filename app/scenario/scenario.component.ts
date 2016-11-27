import { Component, Input, OnInit} from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { Step } from '../step/step';
import { Scenario } from './scenario';

import { StepService } from '../step/step.service';

@Component({
  selector: 'scenario',
  moduleId: module.id.replace("/dist/", "/"),
  templateUrl: 'scenario.component.html',
  styleUrls: ['scenario.component.css']
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

  constructor(private stepService: StepService) { }
  
  ngOnInit(): void {
    this.stepService.getSteps().then(steps => this.stepLib = steps);
  }
}
