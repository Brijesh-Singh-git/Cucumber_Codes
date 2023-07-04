@smoketest
Feature: feature is to test the Login functionality 

Scenario: Check Login is successful with valid credentials 

	Given user is on the Login Page 
	When user enters the username and password 
	And Clicks the login button 
	Then the user is naviagted to the home page 
	
	
	
	#IF we want to parametrize the data we use help o Example with Scenario Outline
	
	
	#Scenario Outline: Check Login is successful with valid credentials
	#
	#Given user is on the Login Page
	#When user enters the <username> and <password>
	#And Clicks the login button 
	#Then the user is naviagted to the home page
	#
	#Examples:
	#
	#|username |password|
	#|User1    | Pass1  |
	#|User2    | Pass2  |
	
	
