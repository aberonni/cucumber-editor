import { Component, Input} from '@angular/core';

import { Step } from './step';

@Component({
  selector: 'step',
  template: `
    <mark>{{step.type}}</mark> <span *ngFor="let parameter of step.parameters">{{parameter.value}}</span>
  `,
})
export class StepComponent {
  @Input() public step: Step;
}