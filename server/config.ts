let path = require('path');

export class Config {
    public stepsFolder: string = 'features/step_definitions';
    public componentsFile: string = 'scripts/libs/components.js';

    public constructor() {
        let userOptions = {};

        try {
            userOptions = require(path.join(process.cwd(), '.gherkineditor.json'));
        } catch (e) {
            console.log('No .gherkin-editor.json file found, using defaults.');
        }

        Object.keys(userOptions).forEach((opt) => {
            if (this[opt]) {
                this[opt] = userOptions[opt];
            }
        });
    }
}