let fs = require('fs');
let path = require('path');

export class Config {
    public stepsFolder: string = 'scripts/steps';
    public componentsFile: string = 'scripts/libs/components.js';

    public constructor() {
        let userOptions = {};

        try {
            userOptions = JSON.parse(fs.readFileSync(path.join(process.cwd(), '.cucumbereditor'), 'utf8'));
        } catch (e) {
            console.log('No .cucumbereditor file found, using defaults.');
        }

        Object.keys(userOptions).forEach((opt) => {
            if (this[opt]) {
                this[opt] = userOptions[opt];
            }
        });
    }
}