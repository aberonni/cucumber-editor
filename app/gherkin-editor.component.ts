import { Component, Input } from '@angular/core';

import { Scenario } from './scenario';

@Component({
  selector: 'gherkin-editor',
  template: `
    <div class="scenarios">
      <scenario *ngFor="let scenario of scenarios" [scenario]="scenario"></scenario>
      <button class="add"
        (click)="onAdd()">
        ADD SCENARIO
      </button>
    </div>
  `
})
export class GherkinEditorComponent {
  scenarios: Scenario[] = [];

  onAdd(): void {
    this.scenarios.push(new Scenario());
  }
}