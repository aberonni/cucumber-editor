import { Tag } from '../tags/tag';
import { Step } from '../step/step';
import { ScenarioTable } from './scenario-table';

export class Scenario {
    public name: string;
    public tags: Tag[] = [];
    public steps: Step[] = [];
    public table: ScenarioTable;

    public get type (): string {
        return this.table ? 'Scenario Outline' : 'Scenario';
    }
}