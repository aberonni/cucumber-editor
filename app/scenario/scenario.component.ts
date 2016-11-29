import { Component, Input, OnInit} from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { Step } from '../step/step';
import { Scenario } from './scenario';
import { ScenarioTable } from './scenario-table';

import { StepService } from '../step/step.service';

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'scenario',
    styleUrls: ['scenario.component.css'],
    templateUrl: 'scenario.component.html',
})
export class ScenarioComponent implements OnInit {
    @Input() public scenario: Scenario;

    private stepLib: Step[];
    private newStep: Step;
    private sortableOptions: SortablejsOptions = {
        animation: 150,
        draggable: 'step',
    };

    public constructor(private stepService: StepService) { }

    public ngOnInit(): void {
        this.stepService.getSteps().then((steps) => this.stepLib = steps);
    }

    private addStep(step: Step): void {
        if (!step) {
            return;
        }

        this.scenario.steps.push(new Step(step.name, step.type));

        this.newStep = new Step('', '');
    }

    private addTable(): void {
        this.scenario.table = new ScenarioTable();
    }
}
