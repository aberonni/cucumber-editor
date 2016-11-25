import { Injectable } from '@angular/core';

import { Scenario } from './scenario';
import { SCENARIOS } from './mock-scenarios';

@Injectable()
export class ScenarioService {
  getScenarios(): Promise<Scenario[]> {
    return Promise.resolve(SCENARIOS);
  }
}