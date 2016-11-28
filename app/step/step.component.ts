import { Component, Input, OnInit } from '@angular/core';

import { StepService } from './step.service';
import { Step } from './step';
import { StepParameter } from './step-parameter';

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'step',
    styleUrls: ['step.component.css'],
    templateUrl: 'step.component.html',
})
export class StepComponent implements OnInit {
    public componentLib: string[];
    @Input() public step: Step;

    public constructor(private stepService: StepService) { }

    public ngOnInit(): void {
        this.stepService.getComponents().then((components) => this.componentLib = components);
    }

    public getParameterClasses(parameter: StepParameter): string[] {
        let classes = parameter.isSet ? ['text-success', 'bg-success'] : [];

        return classes;
    }
}