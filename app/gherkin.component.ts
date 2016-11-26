import { Component, Input } from '@angular/core';

import { Gherkin } from './gherkin';
import { Scenario } from './scenario';

@Component({
  selector: 'gherkin',
  template: `
    <div class="scenarios">
      <scenario class="panel panel-default" *ngFor="let scenario of gherkin.scenarios" [scenario]="scenario"></scenario>
      <button 
        class="btn btn-default center-block"
        (click)="onAdd()">
        Add Scenario
      </button>
    </div>
  `
})
export class GherkinComponent {
  @Input() gherkin: Gherkin;

  onAdd(): void {
    this.gherkin.scenarios.push(new Scenario());
  }
}