import { Component, Input } from '@angular/core';

import { Gherkin } from './gherkin';
import { Scenario } from '../scenario/scenario';

@Component({
  selector: 'gherkin',
  moduleId: module.id.replace("/dist/", "/"),
  templateUrl: 'gherkin.component.html',
  styleUrls: ['gherkin.component.css']
})
export class GherkinComponent {
  @Input() gherkin: Gherkin;

  onAdd(): void {
    this.gherkin.scenarios.push(new Scenario());
  }
}