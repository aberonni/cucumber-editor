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
    public inputTypes: string[] = ['Component', 'Variable', 'Free'];
    public inputType: Number = 0;
    public autocompleteModel: string = '';

    public constructor(private stepService: StepService, private _elementRef: ElementRef) { }

    public ngOnInit(): void {
        this.stepService.getComponents().then((components) => this.componentLib = components);
    }

    public setInputType(type: Number) {
        if (this.inputType === type) {
            return;
        }

        this.inputType = type;
        this.parameter.value = null;
        this.autocompleteModel = '';
    }

    public getClasses(): string[] {
        let classes = this.parameter.isSet ? ['text-success', 'bg-success'] : [];
        return classes;
    }

    public getParameters(): string[] {
        return this.inputType === 0 ? this.componentLib : this.scenario.table.columns;
    }

    public showAutocomplete(): boolean {
        return (this.componentLib.length > 0 && this.inputType === 0) || (this.scenario.table.isValid && this.inputType === 1);
    }

    @HostListener('document:click', ['$event.target'])
    public onDocumentClick(targetElement) {
        this.showTooltip = this.showTooltip && this._elementRef.nativeElement.contains(targetElement);
    }

    private setParameter(val: string): void {
        this.parameter.value = val;
        this.parameter.isVariable = this.inputType === 1;
    }
}