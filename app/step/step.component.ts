import { Component, Input} from '@angular/core';

import { Step } from './step';

@Component({
  selector: 'step',
  template: `
    <mark>{{step.type}}</mark> <span [innerHTML]="step.name"></span>
  `
})
export class StepComponent {
  @Input() step: Step;
}