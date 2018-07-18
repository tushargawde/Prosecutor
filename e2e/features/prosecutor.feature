Feature: Form Filling

@Demo
Scenario: I navigate and fill th form
Given I navigate to prosecutor page
When In "prosecutor" page, I hover the mouse over "Case_entry"
And In "prosecutor" page, I click "Protective_order_entry"
And In "prosecutor" page, I set the "submission" drop down to "Protective Order"
And In "prosecutor" page, I set the "Incident_Remark" text box to "Test Remark"
And In "prosecutor" page, I set the "LastName" text box to "TestLast"
And In "prosecutor" page, I set the "FirstName" text box to "TestFirst"
And In "prosecutor" page, I set the "MiddleName" text box to "TestMiddle"
And In "prosecutor" page, I set the "DOB" text box to "11061996"
And In "prosecutor" page, I set the "Defendant_LastName" text box to "TestDefendentLast"
And In "prosecutor" page, I set the "Defendant_FirstName" text box to "Defendant FirstName"
And In "prosecutor" page, I set the "Defendant_MiddleName" text box to "TestDefendant"
And In "prosecutor" page, I click "Defendant_Race"
And In "prosecutor" page, I click "W"
And In "prosecutor" page, I click "Defendant_Sex"
And In "prosecutor" page, I click "M"
Then In "prosecutor" page, I click "Save_Button"


