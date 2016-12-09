# cucumber-editor

[![npm version](https://badge.fury.io/js/cucumber-editor.svg)](https://badge.fury.io/js/cucumber-editor)
[![Build Status](https://travis-ci.org/aberonni/cucumber-editor.svg?branch=master)](https://travis-ci.org/aberonni/cucumber-editor)

Load your [cucumber-js](https://github.com/cucumber/cucumber-js) step definitions and write valid feature files.
Also compatible with other projects based on cucumber (see [nightwatch-cucumber](https://github.com/mucsi96/nightwatch-cucumber)).

## Requirements

You need one or more step definition files in your project. 
Find out more about [step definition files](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md).

This is a very simple example of a step definition file.

```js
// scripts/steps/steps.js

module.exports = function () {
    this.Given(/^I have already visited the site$/, function () {
        // do things...
    });
  
    this.Then(/^Then the response status is (.*)$/, function (status) {
        // do things...
    });

    this.When(/^I view my profile$/, function () {
        // do things...
    });
};
```

The regular expressions will be extracted and parsed so you can use them when creating new feature files.

## Installation

Install this module globally

```bash
npm install -g cucumber-editor
```

## Usage

```bash
cd project/root/folder
cucumber-editor
```

This will open the cucumber editor.

![Screenshot](docs/screenshot.png) 

## Configuration

In your project root folder you can add a json configuration file named `.cucumbereditor`.
If you do not add this file, or if you don't provide all variables, these defaults will be used.

```json
{
    "stepsFolder": "scripts/steps",
    "componentsFile": "scripts/libs/components.js"
}
```

#### stepsFolder

The folder where your step definition files are stored.

#### componentsFile (optional)

A file that exports a list of components, used for autocomplete when step definitions are parameterized.
This file should export an object that contains a `_components` property. 

```js
// scripts/libs/components.js

module.exports{
    _components: [
        'component1',
        'component2',
        'component3',
        'component4'
    ]
}
```

## Help needed!

If you have any improvements to make or if you have encountered any issues, please contribute or get in touch!

#### Local development

This project is setup to work with VS Code. 
For debugging, add the following into your settings.json in VS Code.

```json
"cucumber.editor.debug.cwd": "C:\\Path\\To\\Nightwatch\\Project\\Folder"
```
