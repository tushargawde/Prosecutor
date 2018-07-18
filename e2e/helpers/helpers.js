// This is a helper file
'use strict'
var count = 0;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
//var expect = chai.expect;
var expect = chai.use(chaiAsPromised).expect;
var should = chai.use(chaiAsPromised).should;

module.exports = {

    expect: expect,
    should: should,


    isPresent: function(elementId, expectedCondition) {
        if(expectedCondition == true){
            expect(elementId.isPresent()).to.become(true)
        }else{
            expect(elementId.isPresent()).to.become(false)
        }
    },


    waitForCurrentUrl: function (timeout = 10000) { // Default timeout is 10 seconds
        if (timeout == null) {
            timeout = browser.manage().timeouts().pageLoadTimeout;
        }

        return browser.driver.wait(function () {
            // Return a condition. Code will continue to run until is true 
            return browser.driver.getCurrentUrl().then(function (url) {
                return url;
            }, function (err) {
                // errored  .. TODO: retry
                throw err;
            });
        }, timeout, 'Expectation error: Timed out waiting for current url');
    },

    waitForElementTextToChange: function (elementId, textToWaitFor) {
        return browser.wait(function () {
            return element(by.id(elementId)).getText().then(function (text) {
                return text === textToWaitFor;
            },
                function () {
                    return element(by.id(elementId)).getText().then(function (text) {
                        return text === textToWaitFor;
                    });
                }
            );
        });
    },
    inputTextbox: function(elementId, text) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elementId)).then(elementId.click())
        return browser.driver.switchTo().activeElement().click()
        .then(browser.driver.switchTo().activeElement().clear(),
            browser.driver.switchTo().activeElement().sendKeys(text))
    },

    inputDropdown: function(elementId, text){
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elementId)).then(elementId.click())
        return browser.wait(EC.elementToBeClickable(element(by.cssContainingText('mat-option', text))), 5000).then(element(by.cssContainingText('mat-option', text)).click())
    },

    click: function(elementId) {
        var EC = protractor.ExpectedConditions;
        return browser.wait(EC.elementToBeClickable(elementId)).then(elementId.click())
    },
    


    // WIP HELPERS

    waitForElementToDissapear: function (element, timeout = 5000) {
        var _this = this;
        return browser.wait(function () {
            return element.isPresent().then(function (isPresent) {
                if (isPresent) {
                    return _this.not(element.isDisplayed());
                }
                else {
                    return true;
                }
            });
        }, timeout || TIMEOUT);
    },

    waitForElement: function (element, timeout = 10000) {
        return browser.wait(function () {
            return element.isPresent().then(function (isPresent) {
                if (isPresent) {
                    return element.isDisplayed();
                }
                else {
                    return false;
                }
            });
        }, timeout || TIMEOUT);
    },

    displayHover: function (element) {
        browser.actions().mouseMove(element).perform();
        return browser.wait(function () {
            return element.isDisplayed();
        });
    },

    selectOptionByText: function(select, text) {
        var optionElement = select.element(by.cssContainingText('option', text));
        this.selectOption(optionElement);
    },

    // Check if disabled
    isDisabled: function (element) {
        return element.getAttribute('disabled').then(function (value) {
            return value === 'true';
        });
    },

    // is checked
    isChecked: function (element) {
        return element.getAttribute('checked').then(function (value) {
            return value;
        });
    },

    // link helpers
    hasLink: function (element, url) {
        return element.getAttribute('href').then(function (href) {
            return href === url;
        });
    },

    // Input values
    hasValue: function (element, expectedValue) {
        return element.getAttribute('value').then(function (value) {
            return value === expectedValue;
        });
    },

    // Class Name
    hasClass: function (element, className) {
        return element.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(className) !== -1;
        });
    },

    waitForEnabled: function(element, timeout = 10000) {
        return browser.wait(function () {
            return element.isPresent().then(function (isPresent) {
                if (isPresent) {
                    return element.isEnabled();
                }
                else {
                    return false;
                }
            });
        }, timeout || TIMEOUT);
    },

 verifyStart:function(pageName, variableName, value, callback){
    var elem =element.all(by.xpath("//*[contains(@id, 'result_')]/div/div[8]/span/span/a/i[1]/span"));
    elem.getText().then(function(list){
    
        for (var i=0; i<=list.length;i++){
            console.log(list[i]);
            list[i].should.startWith(value)
            callback();
        }
        

    }) ;
        
                
        
    },
    verifyContains:function(pageName, value1, value2, callback){
        var elem =element.all(by.xpath("//*[contains(@id, 'result_')]/div/div[3]/div[1]/a/h2"));
        elem.getText().then(function(list){
        var x=true;
            for (var i=0; i<=list.length;i++){
               // console.log(list[i]);
              
              expect(list[i]).to.contain(value1)||expect(list[i]).to.contain(value2);

              callback();
            }
            
    
        }) ;
            
                    
            
        },



}
