#!/usr/bin/env node
"use strict";
var config_1 = require('./config');
var nightwatchParser_1 = require('./nightwatchParser');
var path = require('path');
var open = require('open');
var glob = require('glob');
var express = require('express');
var config = new config_1.Config();
var nightwatchParser = new nightwatchParser_1.NightwatchParser();
var app = express();
var rootPath = path.join(path.normalize(__dirname), '..', '..');
var nodePort = '2009';
app.use(express.static(rootPath));
app.use('/node_modules', express.static(rootPath + '/node_modules'));
app.get('/', function (req, res) {
    res.sendFile(rootPath + '/index.html');
});
app.get('/steps', function (req, res) {
    var allSteps = [];
    var addSteps = function (file) {
        return new Promise(function (res, rej) {
            nightwatchParser.getSteps(file).then(function (steps) {
                allSteps = allSteps.concat(steps);
                res();
            });
        });
    };
    var stepsFolder = path.join(process.cwd(), config.stepsFolder);
    glob(path.join(stepsFolder, '**/*.js'), {}, function (err, files) {
        if (err || !files) {
            throw new Error('No step files found in ' + stepsFolder);
        }
        Promise.all(files.map(addSteps)).then(function () {
            res.json(allSteps);
        });
    });
});
app.get('/components', function (req, res) {
    var file = path.join(process.cwd(), config.componentsFile);
    nightwatchParser.getComponents(file).then(function (components) {
        res.json(components);
    });
});
app.listen(nodePort, '0.0.0.0', function () {
    open('http://localhost:' + nodePort, function (err) {
        if (err) {
            console.log(new Date() + ' Listening on port: ' + nodePort);
        }
    });
});
//# sourceMappingURL=server.js.map