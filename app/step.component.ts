import { Component, Input} from '@angular/core';

import { Step } from './step';

@Component({
  selector: 'step',
  template: `
    <span class="badge">{{step.type}}</span>{{step.name}}
  `
})
export class StepComponent {
  @Input() step: Step;
}