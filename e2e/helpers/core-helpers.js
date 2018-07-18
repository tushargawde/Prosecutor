// This is a helper file
'use strict'
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect

var Excel = require('exceljs');


module.exports = {

    //-----------New common functions with POM and Testdata------------------------

    // Function to get element from respective page object file
    getElement: function (pageName, variableName) {
        // here we get the element ID from the page object file
        var page = require('./../pageobjects/' + pageName + '-page.js');
        return page[variableName];
    },

    // function to get test data from respective test data file
    getTestdata: function (text) {
        // here we split the value passed in feature file separated by '_' (e.g. 'a_b_c_d')
        var fields = text.split('_');
        var field1 = fields[1];
        var field2 = fields[2];
        if (text.indexOf('TD_') > -1) {
            var field3 = fields[3];
            // here we get the testdata from testdata file
            var page1 = require('./../testdata/' + field1 + '_Models.js');
            return page1[field2][field3];
        } else if (text.indexOf('XL_') > -1) {
            return this.getExcelData(field1, field2);
        } else {
            return text;
        }
    },

    getExcelData: function (sheetName, keyword) {
        var workbook = new Excel.Workbook();
        return workbook.xlsx.readFile('./e2e/testdata/example_data.xlsx').then(function () {
            var worksheet = workbook.getWorksheet(sheetName);
            var y = worksheet.getColumn(1).values;
            for (var i = 1; i <= y.length; i++) {
                var q = worksheet.getRow(i).values;
                if (q[1] == keyword) {
                    y = q[2];
                    break;
                }
            }
            return y;
        });
    },



    //------------------Element-----------------

    elementClick: function (pageName, variableName) {
        var EC = protractor.ExpectedConditions;
        var ele = this.getElement(pageName, variableName);
        browser.wait(EC.elementToBeClickable(ele), 2000);
        return ele.click();
    },

    elementClickContainingText: function (text) {
        var EC = protractor.ExpectedConditions;
        var data = this.getTestdata(text);
        var ele = element(by.xpath("//*[contains(text(), '" + data + "')]"))
        browser.wait(EC.elementToBeClickable(ele), 2000);
        return ele.click();
    },

    elementVisible: function (pageName, variableName) {
        var ele = this.getElement(pageName, variableName);
        return expect(ele.isDisplayed()).to.eventually.equal(true);
    },




    //------------------Textbox-------------------

    setTextBox: function (pageName, variableName, text) {
        var EC = protractor.ExpectedConditions;
        // here we get the element ID from the page object file
        var ele = this.getElement(pageName, variableName);
        browser.wait(EC.elementToBeClickable(ele), 2000);
        ele.click();
        var data = this.getTestdata(text);
        browser.driver.switchTo().activeElement().clear();
        return browser.driver.switchTo().activeElement().sendKeys(data);
    },

    checkTextBox: function (pageName, variableName, text) {
        var ele = this.getElement(pageName, variableName);
        ele.click();
        var data = this.getTestdata(text);
        return expect(browser.driver.switchTo().activeElement().getAttribute('value')).to.eventually.equal(data);
    },



    //----------------Dropdown-----------

    setDropDown: function (pageName, variableName, text) {
        // we need to provide sleep because some dropdown are fetched from backend and take time to load.
        // browser.sleep(2000);
        var EC = protractor.ExpectedConditions;
        var ele = this.getElement(pageName, variableName);
        ele.click();
        var data = this.getTestdata(text);
        browser.wait(EC.elementToBeClickable(element(by.cssContainingText('option', data))), 5000)
        return element(by.cssContainingText('option', data)).click();
    },

    checkDropDown: function (pageName, variableName, text) {
        var ele = this.getElement(pageName, variableName);
        var data = this.getTestdata(text);
        return expect(ele.getText()).to.eventually.equal(data);
    },




    //-----------------Checkbox-------------------------

    setCheckbox: function (pageName, variableName, value) {
        var checkbox1 = this.getElement(pageName, variableName);
        var data = this.getTestdata(value);
        // var checkboxValue = element(by.xpath("(//*[@id='" + x + "'])//input"));
        return checkbox1.isSelected().then(function (attVal) {
            if (data == 'checked' && attVal == false) {
                checkbox1.click();
                return expect(checkbox1.isSelected()).to.eventually.equal(true);
            } else if (data == 'unchecked' && attVal == true) {
                checkbox1.click();
                return expect(checkbox1.isSelected()).to.eventually.equal(false);
            }
        });
    },

    checkCheckboxValue: function (pageName, variableName, expectedValue) {
        var x = this.getElement(pageName, variableName);
        var data = this.getTestdata(expectedValue);
        var checkbox3 = element(by.xpath("(//*[@id='" + x + "'])//input"));
        if (data == 'checked') {
            return expect(checkbox3.isSelected()).to.eventually.equal(true);
        } else if (data == 'unchecked') {
            return expect(checkbox3.isSelected()).to.eventually.equal(false);
        }
    },

    //------------Auto Complete field------------------

    setAutoCompleteField: function (pageName, variableName, text) {
        var EC = protractor.ExpectedConditions;
        var ele = this.getElement(pageName, variableName);
        var data = this.getTestdata(text);
        browser.wait(EC.elementToBeClickable(ele), 2000);
        ele.click();
        browser.driver.switchTo().activeElement().clear();
        browser.driver.switchTo().activeElement().sendKeys(data);
        browser.wait(EC.elementToBeClickable(element(by.cssContainingText('mat-option', data))), 5000)
        return element(by.cssContainingText('mat-option', data)).click();
    },


    //-----------------Validation Message-------------

    checkErrorMessage: function (pageName, variableName, errormsg) {
        var x = this.getElement(pageName, variableName);
        var msg = element(by.xpath("//*[@id='" + x + "']//mat-error")).getText();
        return expect(msg).to.eventually.equal(errormsg);
    },



    //------------------Placeholder-------------

    checkPlaceholderText: function (pageName, variableName, text) {
        var ele = this.getElement(pageName, variableName);
        return expect(ele.getAttribute('placeholder')).to.eventually.equal(text);
    },

    //sorting dropdown check
    sortingCheck: function (pageName, variableName, callback) {
        var EC = protractor.ExpectedConditions;
        var ele = this.getElement(pageName, variableName);
        ele.click();
        browser.wait(EC.elementToBeClickable(element(by.css('mat-option'))), 5000);
        element.all(by.css('mat-option-text')).getText().then(function (list) {
            var sorted = list.slice();
            sorted.sort();
            var x = true;
            for (var i = 0; i < list.length; i++) {
                if (sorted[i] != list[i]) {
                    x = false;
                }
            }
            expect(x).equals(true);
            callback();
        });



    },




    //actions:  Mouse hover
    hoverElement: function (pageName, variableName) {
        var EC = protractor.ExpectedConditions;
        var ele = this.getElement(pageName, variableName);
        browser.wait(EC.elementToBeClickable(ele), 6000);
        return browser.actions().mouseMove(ele).perform();
    },

    //verify title of webpage
    verifyTitle:function(value){
        var currentTitle=browser.getTitle();
        var data = this.getTestdata(value);
        return expect(currentTitle).to.eventually.equal(data);
    },

    //verify text in element
    verifyText:function(pageName, variableName, value){
        var element= this.getElement(pageName, variableName);
        // var elementText=element.getText();
        var data = this.getTestdata(value);
        return expect(element.getAttribute("innerText")).to.eventually.equal(data);
    },
    
//--------verify title of element--------------------------------------------
verifyElementTitle:function(pageName, variableName, value){
    var element= this.getElement(pageName, variableName);
    // var elementText=element.getText();
    var data = this.getTestdata(value);
    return expect(element.getAttribute("Title")).to.eventually.equal(data);
},


//-------scrollto element--------------------------------------
moveToElement:function(pageName, variableName){
    var element=this.getElement(pageName, variableName);
    return browser.actions().mouseMove(element).perform();
},
//----------------------switch to window ------------------------
    switchToWindowContainingElement: function (variableName, pageName) {
        return browser.getAllWindowHandles().then((handles)=>{
            var ele = this.getElement(pageName, variableName);
            for (var i = 0; i < handles.length; i++) {
                browser.switchTo().window(handles[i]);   
                    if(ele.isPresent()===true){
                        break;
                    }
            }
        });
    },

   


    //functions to input data in multiple fields using table
    fillForm: function (pageName, table, callback) {
        var data = table.hashes();
        // that gives me an array of objects such as this one:[ { field: 'First Name', content: 'John' },...]
        for (var i = 0; i < data.length; i++) {
            var variableName = data[i].field;
            var text = data[i].content;
            var p = this.getFieldAndSetValue(pageName, variableName, text);
            if (i === data.length - 1) {
                p.then(callback);
            }
        }
    },

    getFieldAndSetValue: function (pageName, variableName, text) {
        var x = this.getElement(pageName, variableName);
        var ele = element(by.id(x));
        return this.fieldType(ele).then((fieldType) => {
            if (fieldType == 'textbox') {
                return this.setTextBox1(pageName, variableName, text);
            } else if (fieldType == 'dropdown') {
                return this.setDropDown1(pageName, variableName, text);
            } else if (fieldType == 'checkbox') {
                return this.setCheckbox1(pageName, variableName, text)
            } else if (fieldType == 'autocomplete') {
                return this.setAutoCompleteField(pageName, variableName, text)
            }
        });
    },


    fieldType: function (ele) {
        return ele.getAttribute('outerHTML').then(function (tag) {
            var r;
            if (tag.startsWith('<input')) {
                r = 'textbox';
            } else if (tag.startsWith('<mat-select')) {
                r = 'dropdown';
            } else if (tag.startsWith('<mat-checkbox')) {
                r = 'checkbox';
            } else if (tag.startsWith('<app-autocomplete')) {
                r = 'autocomplete';
            }
            return r;
        });
    },

    verifyForm: function (pageName, table, callback) {
        var data = table.hashes();
        // that gives me an array of objects such as this one:[ { field: 'First Name', content: 'John' },...]
        for (var i = 0; i < data.length; i++) {
            var variableName = data[i].field;
            var text = data[i].content;
            var p = this.getFieldAndVerifyValue(pageName, variableName, text);
            if (i === data.length - 1) {
                p.then(callback);
            }
        }
    },

    getFieldAndVerifyValue: function (pageName, variableName, text) {
        var x = this.getElement(pageName, variableName);
        var ele = element(by.id(x));
        this.fieldType(ele).then((fieldType) => {
            if (fieldType == 'textbox') {
                this.checkTextBox1(pageName, variableName, text);
            } else if (fieldType == 'dropdown') {
                this.checkDropDown1(pageName, variableName, text);
            } else if (fieldType == 'checkbox') {
                this.checkCheckboxValue1(pageName, variableName, text)
            } else if (fieldType == 'autocomplete') {
                this.checkTextBox1(pageName, variableName, text);
            }
        });
    },

    priceSorting:function(pageName, variableName, condition, callback){
        var prices=this.getElement(pageName, variableName);
        prices.getText().then(function(list){
            //var list1=list.toString();
           // var splitPrice= list1.split("-","1");
            //console.log(list);
            var slicedPrice=list.slice();
            slicedPrice.sort();
            var x=true;
           // console.log(slicedPrice);
            for (var i = 0; i < list.length; i++) {
                if (slicedPrice[i] != list[i]) {
                    console.log(slicedPrice[i]);
                    console.log(list[i]);
                    x = false;
                    break;
                }
            }
            expect(x).equals(true);
            callback();

        });
    },

    pressTab: function(pageName,variableName){
        var ele = this.getElement(pageName, variableName)
        ele.click();
        
var desiredOption = element.all(by.tagName('option')).get(2);
         return desiredOption.click();
    },







}


