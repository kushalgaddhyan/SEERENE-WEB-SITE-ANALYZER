About the Project Architecture
*******************************


A) Tools/Technologies Used
====================================================================================

Protractor-          Test Automation tool 
TypeScript -         Scripting language , providing additional features on top of JavaScript
Cucumber-            Behaviour Driven Development
Chai-                Assertions and validations
Visual Studio Code-  Source Code Editor

B) Project  Structure
==========================================================================================

1. Featues-    This consists of the .feature file listing Scenarios written in Gherkin language. This serves as a spec file in the configuration file.
2. StepDef -    This consists of mapping step definitions of the Gherkin present in .feature file 
3. PageObjects- This consists of a page class which initializes the page elements , element locators and object values
4. configuration.ts- This is a typescript configuration file used to configure the test execution
5. package.json-   This is npm json file which lists all the dependencies required to run the project
6. package-lock.json- This is automatically generated when npm modifies either the node_modules tree or   package. 
7. tsconfig.json - This specifies the root files and the compiler options required to compile the project.
8. cucumber-Report.json-This report contains all the information from the gherkin source in the JSON format. This report is meant to be post processed into another visual format by third-party tools, such as Cucumber HTML Reporter plugins.
9. cucumber_Report.html- Takes Cucumber JSON report file as input and generates  pretty HTML reports.
10. JSFiles- Folder consisting all the .JS files after compilation of .ts files

C) Pre-Requisites
==================================================================

1. In order to execute this project, first we need to run the website analyzer website in our local host /dev server
2. Once the application is cloned from git, navigate to front-end folder 
3. Copy the path upto front-end folder and make it as present working directory in the terminal
4. Execute the command ---> gulp serve
5. Once the localhost is up, the app will launch using port 9000

D) Execution Steps
============================================================================


1. Clone the Test Automation Project from github to your local
2. Open the project folder in your IDE
3. In the terminal, execute the command--> 'npm install' inorder to download all the dependencies required to run the tests
4. Execute the command --> 'npm run test' inorder to trigger the tests
5. Once the tests are executed , copy the path of cucumber_Report.html and paste in the url of browser and hit enter to see the test execution report


