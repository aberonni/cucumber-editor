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
}