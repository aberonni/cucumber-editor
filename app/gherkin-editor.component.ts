import { Component, Input } from '@angular/core';

import { Scenario } from './scenario';

@Component({
  selector: 'gherkin-editor',
  template: `
    <div class="scenarios">
      <scenario class="panel panel-default" *ngFor="let scenario of scenarios" [scenario]="scenario"></scenario>
      <button 
        class="btn btn-default center-block"
        (click)="onAdd()">
        Add Scenario
      </button>
    </div>
  `
})
export class GherkinEditorComponent {
  scenarios: Scenario[] = [new Scenario()];

  onAdd(): void {
    this.scenarios.push(new Scenario());
  }
}