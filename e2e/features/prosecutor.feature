Feature: Form Filling

@dev
Scenario: I navigate and fill the form of Protective order entry
Given I navigate to prosecutor page
When In "prosecutor" page, I hover the mouse over "Case_entry"
And In "prosecutor" page, I click "Protective_order_entry"
#And In "prosecutor" page, I set the "submission" drop down to "Protective Order" 
And In "prosecutor" page, I fill the fields with the following data
|Incident_Remark|TD_formdata_GenerateSheet_Incident|
|LastName|TD_formdata_GenerateSheet_LastName|
|FirstName|TD_formdata_GenerateSheet_FirstName|
|MiddleName|TD_formdata_GenerateSheet_MiddleName|
|DOB|TD_formdata_GenerateSheet_DOB|
|Defendant_LastName|TD_formdata_GenerateSheet_DefendentLast|
|Defendant_FirstName|TD_formdata_GenerateSheet_DefendentFirst|
|Defendant_MiddleName|TD_formdata_GenerateSheet_DefendentMiddle|
And In "prosecutor" page, I click "Defendant_Race"
And In "prosecutor" page, I click "W"
And In "prosecutor" page, I click "Defendant_Sex"
And In "prosecutor" page, I click "M"
Then In "prosecutor" page, I click "Save_Button"


@run
Scenario: I navigate to Generate Separator Sheets
Given I navigate to prosecutor page
When In "prosecutor" page, I hover the mouse over "Case_entry"
And In "prosecutor" page, I click "Generate_Separator_Sheets"
And In "prosecutor" page, I set the "Sepeator_caseNo" text box to "ABC123"
And In "prosecutor" page, I click "DMETypeDropdown"
And In "prosecutor" page, I click "Lab_Reports"
And In "prosecutor" page, I click "Generate_Separator_Sheets_Add_button"
And In "prosecutor" page, Text of the "Added_Type" should be "Lab Reports"


@run
Scenario: I navigate to Generate Separator Sheets
Given I navigate to prosecutor page