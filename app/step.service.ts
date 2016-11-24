import { Injectable } from '@angular/core';

import { Step } from './step';
import { STEPS } from './mock-steps';

@Injectable()
export class StepService {
  getSteps(): Promise<Step[]> {
    return Promise.resolve(STEPS);
  }
}