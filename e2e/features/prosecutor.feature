Feature: Form Filling

@run
Scenario Outline: I navigate and fill the form of Protective order entry
Given I navigate to prosecutor page
When In "prosecutor" page, I hover the mouse over "Case_entry"
And In "prosecutor" page, I click "Protective_order_entry"
And I enter Protective information "<field>" into the related fields
And In "prosecutor" page, I click "Defendant_Race"
And In "prosecutor" page, I click "W"
And In "prosecutor" page, I click "Defendant_Sex"
And In "prosecutor" page, I click "M"
Then In "prosecutor" page, I click "Save_Button"
Examples:
|field|
|dataprotective|

@run
Scenario: I navigate to Generate Separator Sheets
Given I navigate to prosecutor page
When In "prosecutor" page, I hover the mouse over "Case_entry"
And In "prosecutor" page, I click "Generate_Separator_Sheets"
And In "prosecutor" page, I set the "Sepeator_caseNo" text box to "ABC123"
And I wait
And In "prosecutor" page, I click "DMETypeDropdown"
And In "prosecutor" page, I click "Lab_Reports"
And In "prosecutor" page, I click "Generate_Separator_Sheets_Add_button"
And In "prosecutor" page, Text of the "Added_Type" should be "Lab Reports"


@run
Scenario Outline: To Verify it allow the user to edit all the fields and update the employer details
Given I navigate to prosecutor page
When In "prosecutor" page, I hover the mouse over "Case_entry"
And In "prosecutor" page, I click "Bolo"
And In "prosecutor" page, I click "Add"
When I enter Bolo information "<FillBoloData>" into the related fields 
Then In "prosecutor" page, I click "Save_btn" 	
	Examples: 
    |FillBoloData|
	|BoloData|