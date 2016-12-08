import { Component, Input } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { ScenarioTable } from './scenario-table';

@Component({
    selector: 'scenario-table',
    styleUrls: ['./scenario-table.component.css'],
    templateUrl: './scenario-table.component.html',
})
export class ScenarioTableComponent {
    @Input() public table: ScenarioTable;

    private sortableOptions: SortablejsOptions = {
        animation: 150,
        draggable: '.sortableRow',
        handle: '.sortableHandle',
    };
}
