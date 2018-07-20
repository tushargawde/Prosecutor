// features/step_definitions/stepDefinitions
var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
var coreHelper = require('./../helpers/core-helpers.js');
var profile = require('../pageobjects/prosecutor-page');

// Set default cucumber timeout
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

// Data Models
var example_Models = require('../testdata/example_Models');
//var prosecutor = require('./prosecutor.js');

//-------------------------------------Then

Then(/^I navigate to prosecutor page$/,{timeout:60 * 1000}, function(){
   return browser.get('http://test.prosecutor.cuc.org')
   .then(browser.getCurrentUrl());
});

 Then(/^I wait$/,{timeout:60 * 1000}, function(){
    return browser.sleep(5000);
 });

 When(/^I enter Bolo information "([^"]*)" into the related fields$/, {timeout : 60 * 1000}, function (filldata) {
    //sets the dropdown to a value
    return browser.getCurrentUrl()
    .then(profile.fillOutBolo(example_Models[filldata]));
});