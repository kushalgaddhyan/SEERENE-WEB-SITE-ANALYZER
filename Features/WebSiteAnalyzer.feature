Feature: Web Site Analyzer 

1. User launches the web analyzer website
2. User validates the web page elements and the title
3. User enters the input url in the text box which needs analysis
4. User clicks on the Start button
5. User waits for the results to be displayed
6. User validates the results

Scenario: User validates the launched url and its elements

Given User launches the website analyzer url
Then the page should display the text field and button
Then user validates the page title




Scenario: User enter the search URL and validates the results

Given User launches the website analyzer url
When User enters the input url in the text box
Then User clicks on Start button
Then User waits for the results to be displayed
Then User validates the results


