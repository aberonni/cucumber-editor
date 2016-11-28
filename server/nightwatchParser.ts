import { Step } from '../app/step/step';

export class NightwatchParser {
    private steps: Step[];

    private When = this.addStep('When');
    private Given = this.addStep('Given');
    private Then = this.addStep('Then');

    public getSteps(file: string): Promise<Step[]> {
        this.steps = [];
        require(file).apply(this);
        return Promise.resolve(this.steps);
    };

    public getComponents(file: string): Promise<String[]> {
        let components = require(file)._components || [];

        switch (components.constructor) {
            case Array:
                break;
            case Object:
                components = Object.keys(require(file)._components);
                break;
            default:
                components = [];
        }

        return Promise.resolve(components);
    };

    private addStep(type: string): Function {
        return (signature: RegExp, fn: Function) => {
            this.steps.push(new Step(signature.source, type));
        };
    };
};