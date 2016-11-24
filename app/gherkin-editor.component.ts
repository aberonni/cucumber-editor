import { Component, Input, OnInit } from '@angular/core';
import { Step } from './step';

import { StepService } from './step.service';

@Component({
  selector: 'my-gherkin-editor',
  template: `
    <ul class="steps">
      <li *ngFor="let step of steps"
        (click)="onSelect(step)">
        <span class="badge">{{step.type}}</span> {{step.name}}
      </li>
    </ul>
  `
})
export class GherkinEditorComponent implements OnInit {
  steps: Step[];

  constructor(private stepService: StepService) { }

  getSteps(): void {
    this.stepService.getSteps().then(steps => this.steps = steps);
  }

  ngOnInit(): void {
    this.getSteps();
  }
}