var {Given, When, Then} = require('cucumber');
var helper = require('../helpers/helpers');
var expect = helper.expect;
var should = helper.should;
var helpers = require('./../helpers/helpers.js');
var coreHelper = require('./../helpers/core-helpers.js');
//var prosecutor = require('./prosecutor.js');

//-------------------------------------Then

Then(/^I navigate to prosecutor page$/,{timeout:60 * 1000}, function(){
   return browser.get('http://test.prosecutor.cuc.org')
   .then(browser.getCurrentUrl());
});