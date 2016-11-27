#!/usr/bin/env node

import { Config } from './config';
import { SpyParser } from './SpyParser';
import { Step } from '../app/step/step';

let path = require('path');
let open = require('open');
let glob = require('glob');
let express = require('express');

let config = new Config();
let spyParser = new SpyParser();

let app = express();
let rootPath = path.join(path.normalize(__dirname), '..', '..');
let nodePort = '2009';

app.use(express.static(rootPath));
app.use('/node_modules', express.static(rootPath + '/node_modules'))

app.get('/', (req, res) => {
    res.sendFile(rootPath + '/index.html');
});

app.get('/steps', (req, res) => {
    let allSteps: Step[] = [];

    let addSteps = (file: string): Promise<Step[]> => {
        return new Promise((res, rej)=> {
            spyParser.getSteps(file).then((steps) => {
                allSteps = allSteps.concat(steps);
                res();
            });
        });
    }

    var stepsFolder = path.join(process.cwd(), config.steps_folder);

    glob(path.join(stepsFolder, "**/*.js"), {}, (err: Error, files: string[]) => {
        if(err || !files) {
            throw new Error("No step files found in " + stepsFolder);
        }

        Promise.all(files.map(addSteps)).then(()=>{
            res.json(allSteps);
        });
    });
});

app.get('/components', (req, res) => {
	let file = path.join(process.cwd(), "scripts\\libs\\components.js");
    spyParser.getComponents(file).then((components) => {
        res.json(components);
    });;
});

app.listen(nodePort, '0.0.0.0', () => {
    open('http://localhost:' + nodePort, (err: Error) => {
        if (err) {
			console.log(new Date() + ' Listening on port: ' + nodePort);
        }
    });
});

