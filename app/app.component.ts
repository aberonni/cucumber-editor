import { Component } from '@angular/core';

import { Gherkin } from './gherkin/gherkin';
import { Scenario } from './scenario/scenario';

let FileSaver = require('file-saver');

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',
})
export class AppComponent {
    private gherkin: Gherkin = this.defaultGherkin();

    private defaultGherkin(): Gherkin {
        return new Gherkin();
    }

    private onReset(): void {
        if (confirm('Are you sure?')) {
            this.gherkin = this.defaultGherkin();
        }
    }

    private onSave(): void {
        let blob = new Blob([this.gherkin.toString()], {type: 'text/plain;charset=utf-8'});
        FileSaver(blob, 'myFeature.feature');
    }
}