import { Component, Input} from '@angular/core';

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

    public getParameterClasses(parameter: StepParameter): string[] {
        let classes = parameter.isSet ? ['text-success', 'bg-success'] : [];

        return classes;
    }
}