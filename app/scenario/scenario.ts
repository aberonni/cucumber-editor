import { Tags } from '../tags/tags';
import { Step } from '../step/step';
import { ScenarioTable } from './scenario-table';

export class Scenario {
    public name: string;
    public tags: Tags = new Tags();
    public steps: Step[] = [];
    public table: ScenarioTable;

    public get type (): string {
        return this.table ? 'Scenario Outline' : 'Scenario';
    }
}