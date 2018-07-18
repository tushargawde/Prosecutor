

// features/step_definitions/stepDefinitions
var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
var coreHelper = require('./../helpers/core-helpers.js');

// Set default cucumber timeout
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

//-----------Common steps with POM and Testdata------------------------


//------------------Element-----------------

When(/^In "([^"]*)" page, I click "([^"]*)"$/, function (pageName, variableName) {
    return coreHelper.elementClick(pageName, variableName);
});

When(/^I click on element containing text "([^"]*)"$/, function (variableName) {
    return coreHelper.elementClickContainingText(variableName);
});

When(/^In "([^"]*)" page, I should see "([^"]*)"$/, function (pageName, variableName) {
    return coreHelper.elementVisible(pageName, variableName);
});


//------------------Textbox-------------------

When(/^In "([^"]*)" page, I set the "([^"]*)" text box to "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.setTextBox(pageName, variableName, text);
});

Then(/^In "([^"]*)" page, the value of "([^"]*)" text box should be "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.checkTextBox(pageName, variableName, text);
});


//----------------Dropdown-----------

When(/^In "([^"]*)" page, I set the "([^"]*)" drop down to "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.setDropDown(pageName, variableName, text);
});

Then(/^In "([^"]*)" page, the value of "([^"]*)" drop down should be "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.checkDropDown(pageName, variableName, text);
});


//-----------------Checkbox-------------------------

When(/^In "([^"]*)" page, I mark the "([^"]*)" checkbox as "([^"]*)"$/, function (pageName, variableName, value) {
    //value can be 'checked' or 'unchecked'
    return coreHelper.setCheckbox(pageName, variableName, value);
});

Then(/^In "([^"]*)" page, the "([^"]*)" checkbox should be "([^"]*)"$/, function (pageName, variableName, expectedValue) {
    //checks the checkbox for a value
    return coreHelper.checkCheckboxValue(pageName, variableName, expectedValue);
});


//Check if dropdown is sorted
Then(/^In "([^"]*)" page, I check if "([^"]*)" dropdown is sorted$/, function(pageName, variableName, callback){
    return coreHelper.sortingCheck(pageName,variableName, callback)

});


//------------------Placeholder-------------

Then(/^In "([^"]*)" page, the placeholder text for "([^"]*)" field should be "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.checkPlaceholderText(pageName, variableName, text);
});



//-----------Step to input data in multiple fields using table----------
When(/^In "([^"]*)" page, I fill the fields with the following data$/, {timeout : 60 * 1000}, function (pageName, table, callback) {
    return coreHelper.fillForm(pageName, table, callback);
});

//-----------Step to check data in multiple fields using table----------
Then(/^In "([^"]*)" page, I check if the fields contain the following data$/, {timeout : 60 * 1000}, function (pageName, table, callback) {
    return coreHelper.verifyForm(pageName, table, callback);
});

//-----------------Move to element-------------
Then(/^In "([^"]*)" page, I hover the mouse over "([^"]*)"$/, function(pageName, variableName){
    return coreHelper.hoverElement(pageName, variableName);
});

//-----------------------------verify title of page---------------------------------
Then(/^The title of the page should be "([^"]*)"$/, function(value){
    return coreHelper.verifyTitle(value);
    });

    //----------------------------verify text of element---------------------------------------------
    Then(/^In "([^"]*)" page, Text of the "([^"]*)" should be "([^"]*)"$/,function(pageName, variableName, value){
        return coreHelper.verifyText(pageName, variableName, value);
    });
    //-----------------------------Verify titleof element---------------------------------------------------
    Then(/^In "([^"]*)" page, Title of the "([^"]*)" should be "([^"]*)"$/,function(pageName, variableName, value){
        return coreHelper.verifyElementTitle(pageName, variableName, value);
    })

        //-----------------------------Switch to window---------------------------------
Then(/^I switch to window containing "([^"]*)" element in "([^"]*)" page$/, {timeout : 60 * 1000}, function(variableName, pageName){
    return coreHelper.switchToWindowContainingElement(variableName, pageName);
    });

    Then(/^In "([^"]*)" page, I scroll the page till "([^"]*)"$/, {timeout : 60 * 1000}, function(pageName,variableName){
        return coreHelper.moveToElement(pageName,variableName);
        });

        //-------------------price sorting check---------------------------------
        Then(/^In "([^"]*)" page, The "([^"]*)" should be sorted "([^"]*)"$/, function(pageName,variableName, condition, callback){
            return coreHelper.priceSorting(pageName,variableName, condition, callback);
            });
    