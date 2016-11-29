import { Scenario } from '../scenario/scenario';
import { Tag } from '../tags/tag';

export class Gherkin {
    public name: string;
    public scenarios: Scenario[];
    public tags: Tag[];

    public constructor(){
        this.name = 'My gherkin';
        this.scenarios = [new Scenario()];
        this.tags = [];
    }
}