import { Component, Input, OnInit } from '@angular/core';

import { StepService } from './step.service';
import { Scenario } from '../scenario/scenario';
import { StepParameter } from './step-parameter';

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'step-parameter',
    styleUrls: ['step-parameter.component.css'],
    templateUrl: 'step-parameter.component.html',
})
export class StepParameterComponent implements OnInit {
    @Input() public parameter: StepParameter;
    @Input() public scenario: Scenario;

    public componentLib: string[];
    public showTooltip: boolean = false;
    public inputTypes: string[] = ['Component', 'Variable'];
    public inputType: Number = 0;

    public constructor(private stepService: StepService) { }

    public ngOnInit(): void {
        this.stepService.getComponents().then((components) => this.componentLib = components);
    }

    public getClasses(): string[] {
        let classes = this.parameter.isSet ? ['text-success', 'bg-success'] : [];
        return classes;
    }

    public variables(): string[] {
        return this.scenario.table.columns;
    }
}