import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Step } from './step';

@Injectable()
export class SpyStepsService {
  private stepsUrl = 'steps';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor (private http: Http) {}

  getSteps(): Promise<Step[]> {
    return this.http.get(this.stepsUrl)
               .toPromise()
               .then(response => {
                 return response.json() as Step[]
               })
               .catch(this.handleError);
  }
}