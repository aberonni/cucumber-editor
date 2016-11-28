import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Step } from './step';

@Injectable()
export class StepService {
    private steps: Step[];

    public constructor (private http: Http) {}

    public getSteps(): Promise<Step[]> {
        if (this.steps != null) {
            return Promise.resolve(this.steps);
        }

        return this.http.get('steps')
                    .toPromise()
                    .then((response) => {
                        return this.steps = response.json() as Step[];
                    })
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}