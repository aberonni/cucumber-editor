import { Step } from '../step/step';
import { ScenarioTable } from './scenario-table';

export class Scenario {
    public name: string;
    public steps: Step[] = [];
    public table: ScenarioTable;
}