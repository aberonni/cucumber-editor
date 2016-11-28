#!/usr/bin/env node

import { Step } from '../app/step/step';
import { Config } from './config';
import { NightwatchParser } from './nightwatchParser';

let path = require('path');
let open = require('open');
let glob = require('glob');
let express = require('express');

let config = new Config();
let nightwatchParser = new NightwatchParser();

let app = express();
let rootPath = path.join(path.normalize(__dirname), '..', '..');
let nodePort = '2009';

app.use(express.static(rootPath));
app.use('/node_modules', express.static(rootPath + '/node_modules'));

app.get('/', (req, res) => {
    res.sendFile(rootPath + '/index.html');
});

app.get('/steps', (req, res) => {
    let allSteps: Step[] = [];

    let addSteps = (file: string): Promise<Step[]> => {
        return new Promise((res, rej) => {
            nightwatchParser.getSteps(file).then((steps) => {
                allSteps = allSteps.concat(steps);
                res();
            });
        });
    };

    let stepsFolder = path.join(process.cwd(), config.stepsFolder);

    glob(path.join(stepsFolder, '**/*.js'), {}, (err: Error, files: string[]) => {
        if (err || !files) {
            throw new Error('No step files found in ' + stepsFolder);
        }

        Promise.all(files.map(addSteps)).then(() => {
            res.json(allSteps);
        });
    });
});

app.get('/components', (req, res) => {
    let file = path.join(process.cwd(), config.componentsFile);
    nightwatchParser.getComponents(file).then((components) => {
        res.json(components);
    });
});

app.listen(nodePort, '0.0.0.0', () => {
    open('http://localhost:' + nodePort, (err: Error) => {
        if (err) {
            console.log(new Date() + ' Listening on port: ' + nodePort);
        }
    });
});

