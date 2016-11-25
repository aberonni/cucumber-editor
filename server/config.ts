let path = require('path');

export class Config {
    steps_folder:string = "features/step_definitions";

    constructor() {
        let userOptions = {};

        try {
            userOptions = require(path.join(process.cwd(), ".gherkineditor.json"));
        } catch(e) {
            console.log('No .gherkin-editor.json file found, using defaults.');
        }

        Object.keys(userOptions).forEach(opt => {
            if(this[opt])
                this[opt] = userOptions[opt];
        })
    }
}