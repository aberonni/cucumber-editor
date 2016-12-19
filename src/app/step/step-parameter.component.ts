import { Component, ElementRef, Input, HostListener, OnInit } from '@angular/core';

import { StepService } from './step.service';
import { Scenario } from '../scenario/scenario';
import { StepParameter } from './step-parameter';

@Component({
    selector: 'step-parameter',
    styleUrls: ['./step-parameter.component.css'],
    templateUrl: './step-parameter.component.html',
})
export class StepParameterComponent implements OnInit {
    @Input() public parameter: StepParameter;
    @Input() public scenario: Scenario;

    public componentLib: string[] = [];
    public showTooltip: boolean = false;
    public acceptUserInput: boolean = false;
    public autocompleteModel: string = '';

    public constructor(private stepService: StepService, private _elementRef: ElementRef) { }

    public ngOnInit(): void {
        this.stepService.getComponents().then((components) => this.componentLib = components);
    }

    public setIsVariable(isVariable: boolean) {
        if (this.parameter.variable === isVariable) {
            return;
        }

        this.parameter.variable = isVariable;
        this.autocompleteModel = '';

        if (isVariable && this.scenario.table.isValid) {
            this.parameter.value = this.scenario.table.columns[0];
        } else {
            this.parameter.value = null;
        }
    }

    @HostListener('document:click', ['$event.target'])
    public onDocumentClick(targetElement) {
        this.showTooltip = this.showTooltip && this._elementRef.nativeElement.contains(targetElement);
    }

    private setParameter(val: string): void {
        this.parameter.value = val;
    }
}