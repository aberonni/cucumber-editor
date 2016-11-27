import { Component, Input } from '@angular/core';

import { Gherkin } from './gherkin';
import { Scenario } from './scenario';

@Component({
  selector: 'gherkin',
  template: `
    <div class="input-group">
      <div class="input-group-addon">Feature:&nbsp;</div>
      <input 
        type="text"
        [(ngModel)]="gherkin.name" 
        class="form-control" 
        placeholder="Name">
    </div>
    <div class="scenarios">
      <scenario *ngFor="let scenario of gherkin.scenarios" [scenario]="scenario"></scenario>
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