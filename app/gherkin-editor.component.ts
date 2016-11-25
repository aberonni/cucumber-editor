import { Component, Input, OnInit } from '@angular/core';

import { Scenario } from './scenario';
import { ScenarioService } from './scenario.service';

@Component({
  selector: 'my-gherkin-editor',
  template: `
    <div class="scenarios">
      <div *ngFor="let scenario of scenarios" class="scenario-draggable">
        <h2 class="scenario-handle">{{scenario.name}}</h2>
        <my-scenario-editor [scenario]="scenario"></my-scenario-editor>
      </div>
    </div>
  `
})
export class GherkinEditorComponent implements OnInit {
  scenarios: Scenario[];
  
  getScenarios(): void {
    this.scenarioService.getScenarios().then(scenarios => this.scenarios = scenarios)
  }

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.getScenarios();
  }
}