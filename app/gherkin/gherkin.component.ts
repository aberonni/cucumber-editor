import { Component, Input } from '@angular/core';

import { Scenario } from '../scenario/scenario';
import { Gherkin } from './gherkin';

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'gherkin',
    styleUrls: ['gherkin.component.css'],
    templateUrl: 'gherkin.component.html',
})
export class GherkinComponent {
    @Input() public gherkin: Gherkin;

    public onAdd(): void {
        this.gherkin.scenarios.push(new Scenario());
    }
}