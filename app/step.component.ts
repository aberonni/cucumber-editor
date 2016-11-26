import { Component, Input} from '@angular/core';

import { Step } from './step';

@Component({
  selector: 'step',
  template: `
    <mark>{{step.type}}</mark> {{step.name}}
  `
})
export class StepComponent {
  @Input() step: Step;
}