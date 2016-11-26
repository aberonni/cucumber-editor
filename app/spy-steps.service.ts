import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Step } from './step';

@Injectable()
export class SpyStepsService {
  private steps: Step[];

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor (private http: Http) {}

  getSteps(): Promise<Step[]> {
    if(this.steps != null)
      Promise.resolve(this.steps);

    return this.http.get("steps")
               .toPromise()
               .then(response => {
                 return this.steps = response.json() as Step[];
               })
               .catch(this.handleError);
  }
}