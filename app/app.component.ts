import { Component } from '@angular/core';

import { Gherkin } from './gherkin/gherkin';
import { Scenario } from './scenario/scenario';

@Component({
  selector: 'my-app',
  moduleId: module.id.replace("/dist/", "/"),
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
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