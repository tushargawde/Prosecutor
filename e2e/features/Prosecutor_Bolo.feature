Feature: Form Filling

@Demo
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


	
 
