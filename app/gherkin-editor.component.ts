import { Component, Input } from '@angular/core';

import { Scenario } from './scenario';

@Component({
  selector: 'my-gherkin-editor',
  template: `
    <div class="scenarios">
      <div *ngFor="let scenario of scenarios" class="scenario">
        <div class="scenario-handle">
          <label>Scenario: </label>
          <input [(ngModel)]="scenario.name" placeholder="name"/>
        </div>
        <my-scenario-editor [scenario]="scenario"></my-scenario-editor>
      </div>
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