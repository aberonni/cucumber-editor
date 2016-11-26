import { Component } from '@angular/core';

import { Gherkin } from './gherkin';
import { Scenario } from './scenario';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <span class="navbar-brand" href="#">Gherkin Editor</span>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" (click)="onReset()">Reset</a></li>
            <li class="active"><a href="#">Save</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <gherkin [gherkin]="gherkin"></gherkin>
  `
})
export class AppComponent {
  private gherkin: Gherkin = this.defaultGherkin();

  private defaultGherkin(): Gherkin {
    return {
      name: 'My gherkin',
      scenarios: [new Scenario()]
    } as Gherkin;
  }

  private onReset(): void {
    if(confirm('Are you sure?')) {
      this.gherkin = this.defaultGherkin();
    }
  }
}