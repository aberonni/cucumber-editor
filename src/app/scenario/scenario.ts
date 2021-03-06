import { Tags } from '../tags/tags';
import { Step } from '../step/step';
import { ScenarioTable } from './scenario-table';

export class Scenario {
    public name: string;
    public tags: Tags = new Tags();
    public steps: Step[] = [];
    public table: ScenarioTable = new ScenarioTable();

    public get type (): string {
        return this.table.isValid ? 'Scenario Outline' : 'Scenario';
    }

    public toString(indent: string): string {
        let str = `${this.tags.toString(indent)}`;

        str += `${indent}${this.type}: ${this.name}\n\n`;

        this.steps.forEach(step => str += step.toString(indent + '\t'));

        if (this.table.isValid) {
            str += this.table.toString(indent + '\t');
        }

        str += '\n';

        return str;
    }

    public removeStep(step: Step): void {
        this.steps.splice(this.steps.indexOf(step), 1);
    }
}