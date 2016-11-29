import { Component, Input } from '@angular/core';

import { StepService } from './step.service';
import { Scenario } from '../scenario/scenario';
import { Step } from './step';
import { StepParameter } from './step-parameter';

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'step',
    styleUrls: ['step.component.css'],
    templateUrl: 'step.component.html',
})
export class StepComponent {
    @Input() public step: Step;
    @Input() public scenario: Scenario;
}