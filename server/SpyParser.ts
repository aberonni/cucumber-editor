import { Step } from '../app/step';

export class SpyParser {
    private steps :Step[];

    private addStep(type: string): Function{
        return (signature: RegExp, fn: Function) => {
            this.steps.push(new Step(signature, type));
        }
    };

    private When = this.addStep('When');
    private Given = this.addStep('Given');
    private Then = this.addStep('Then');

    getSteps(file: string): Promise<Step[]> {
        this.steps = [];
        require(file).apply(this);
        return Promise.resolve(this.steps);
    };

    getComponents(file: string): Promise<String[]> {
        let components = Object.keys(require(file)._components);
        return Promise.resolve(components);
    };
};