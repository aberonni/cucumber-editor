import { Component, Input} from '@angular/core';

import { Step } from './step';

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'step',
    styleUrls: ['step.component.css'],
    templateUrl: 'step.component.html',
})
export class StepComponent {
    @Input() public step: Step;
}