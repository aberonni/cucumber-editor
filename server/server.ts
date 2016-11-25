#!/usr/bin/env node

import { SpyParser } from './SpyParser';

let path = require('path');
let open = require('open');
let express = require('express');

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
	let file = path.join(process.cwd(), "scripts\\steps\\common-steps.js");
	spyParser.getSteps(file).then((steps) => {
        res.json(steps);
    });
});

app.get('/components', (req, res) => {
	let file = path.join(process.cwd(), "scripts\\libs\\components.js");
    spyParser.getComponents(file).then((components) => {
        res.json(components);
    });;
});

app.listen(nodePort, '0.0.0.0', () => {
    open('http://localhost:' + nodePort, (err) => {
        if (err) {
			console.log(new Date() + ' Listening on port: ' + nodePort);
        }
    });
});

