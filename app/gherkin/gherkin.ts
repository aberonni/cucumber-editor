import { Scenario } from '../scenario/scenario';
import { Tags } from '../tags/tags';

export class Gherkin {
    public name: string;
    public scenarios: Scenario[];
    public tags: Tags;

    public constructor() {
        this.name = 'My gherkin';
        this.scenarios = [new Scenario()];
        this.tags = new Tags();
    }

    public toString(): string {
        let str = `${this.tags.toString()}`;

        str += `Feature: ${this.name}\n\n`;

        this.scenarios.forEach(scenario => str += scenario.toString('\t'));

        return str;
    }
}