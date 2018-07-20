

'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
    Case_entry: element(by.linkText("Case Entry")),
    Protective_order_entry:element(by.linkText("Protective Order Entry")),
    submission: element(by.id('SubmissionTypeValues')),
    Incident_Remark:element(by.id('IncidentRemark')),
    LeastNam: element(by.id("PrimaryVictimLastName")),
    FirstName:element(by.id("PrimaryVictimFirstName")),
    MiddleName:element(by.id("PrimaryVictimMiddleName")),
    Suffix:element(by.id("PrimaryVictimSuffixName")),
    DOB:element(by.id("PrimaryVictimDateOfBirth")),
    Race:element(by.id("PrimaryVictimRace")),
    Sex:element(by.id("PrimaryVictimSex")),
    Phone:element(by.id("PrimaryVictimPhone")),
    PhoneType:element(by.id("PrimaryVictimPhoneType")),
    Email:element(by.id("PrimaryVictimEmail")),
    Streetname:element(by.id("PrimaryVictimStreetName")),
    City:element(by.id("PrimaryVictimCity")),
    State:element(by.id("PrimaryVictimState")),
    Postal_code:element(by.id("PrimaryVictimPostalCode")),
    Defendant_LastName:element(by.id("DefendantLastName")),
    Defendant_FirstName:element(by.id("DefendantFirstName")),
    Defendant_MiddleName:element(by.id("DefendantMiddleName")),
    Defendant_Suffix:element(by.id("DefendantNameSuffix")),
    Defendant_Race:element(by.id("s2id_DefendantRace")),
    Defendant_Sex:element(by.id("s2id_DefendantSex")),
    Defendant_Ethenicity:element(by.id("DefendantEthnicity")),
    Defendant_DOB:element(by.id("DefendantDateOfBirth")),
    Defendant_CID:element(by.id("DefendantCid")),
    Defendant_SID:element(by.id("DefendantSID")),
    Defendant_FBI:element(by.id("DefendantFBINumber")),
    Defendant_DLState:element(by.id("DefendantDriverLicenseState")),
    Defendant_DLID:element(by.id("DefendantDriverLicenseNumber")),
    Defendant_SSN:element(by.id("DefendantSocialSecurityNumber")),
    Defendant_Height_feet:element(by.id("DefendantHeightFeet")),
    Defendant_Height_inch:element(by.id("DefendantHeightInch")),
    Defendant_Weight:element(by.id("DefendantWeight")),
    Defendant_Eyecolor:element(by.id("DefendantEyeColor")),
    Defendant_Phone:element(by.id("DefendantPrimaryPhone")),
    Defendant_Street:element(by.id("DefendantStreetName")),
    Defendant_Employer_Name:element(by.id("DefendantEmployerName")),
    Save_Button:element(by.xpath('//*[@id="content"]/form/p/button[1]')),
    W:element(by.xpath('//span[@title="White"]')),
    M:element(by.xpath('//span[@title="Male"]')),
    Generate_Separator_Sheets: element(by.linkText("Generate Separator Sheets")),
    Sepeator_caseNo:element(by.id("CaseNumber")),
    DMETypeDropdown: element(by.id('s2id_DmeUploadType')),
    DMETypeSearch:element(by.id('s2id_autogen1_search')),
    Lab_Reports:element(by.xpath(".//li/div/span[@title='Lab Reports']")),
    Generate_Separator_Sheets_Add_button: element(by.xpath("//button[contains(text(),'Add')]")),
    Added_Type:element(by.xpath('//*[@id="dmeuploadtype-entries"]/tbody/tr[1]/td[1]'))



};