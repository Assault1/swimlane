# Swimlane Cypress Framework (Cypress + GitHub Actions)
This cypress framework automatically attaches screenshots to failed test cases.
## Installation :

1. Download this project and type below commands in the terminal: 
	```bash
	npm install
	```
2. How to run the bundled tests from CLI:
	```bash
	npm run cy:scripts
	```
3. How to run the bundled tests from Cypress Test Runner:
	```bash
	npm run cy:open
	```
	
# In a nutshell
Cypress is a next generation front end testing tool built for the modern web. It addresses the key pain points that the developers and QA engineers face when testing modern applications.
Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.
This enables you to write faster, easier and more reliable tests.

## Cypress ecosystem
Cypress consists of a free, open source, locally installed Test Runner and a Dashboard Service for recording your tests. It also provides 3rd party integrations to various plugins and tools.
Cypress helps you set up and start writing tests every day while you build your application locally. Both BDD(Behavioral Driven Developement) and TDD(Test Driven Development) can be accomplished.
After building up a suite of tests and integrating Cypress with CI Provider which in our case is GitHub Actions, but Cypress Dashboard Service can even then record our test runs.

## Steps to contribute to this framework:
1. Clone this repository from GitHub into your local desktop.
2. Create a branch:
	```bash
	git checkout -b <branch_name>.
	```
3. 	Make your changes and commit them:
	```
	git commit -m '<commit_message>'
	```
4. Push to the original branch: 
	```
	git push
	```
5. Create a pull request and assign to your reviewer.

## How to write tests and How to organize the tests.
Current Cypress framework is structured in four layer. Design of current framework is comprised of -

1. End to End test - All test are written in cypress/integration/e2espec folder. Test cases are divided into two folder structure api and functional(ui). Under this based on functionality the spec file is created with functionality name. All test file should have *.spec.js filename in the end.
2. Page Actions - All repeatable action are written in this folder. Again we have divided the folder structure in two parts api action and web action. Based on the functionality again we have divided in different file.
3. Page Object - All object which are utilised actions files are being declared here and returned at per the requirement of the test.
4. Locator - CSS locator elements are stored here. Again based on the functionality we have filename of the locators. It is in JSON format.
  
  Note - Utility function is created in API to reduce the complexity of the current framework in api portion.

## Reports

Cypress mocha awesome reporter is used to generate the report file. HTML output of every test execution can be found in reports/html/index.html.

Plugin used to generate reports - cypress-mochawesome-reporter https://github.com/LironEr/cypress-mochawesome-reporter

                 
## Oldschool/Legacy Cucumber style
Not recommended. Please let us know if you decide to use it! The problem with the legacy structure is that everything is global. This is problematic for multiple reasons.

## Final Words
It makes it harder to create .feature files that read nicely - you have to make sure you are not stepping on toes of already existing step definitions. You should be able to write your tests without worrying about reusability, complex regexp matches, or anything like that. Just write a story. Explain what you want to see without getting into the details. Reuse in the .js files, not in something you should consider an always up-to-date, human-readable documentation.
The startup times get much worse - because we have to analyze all the different step definitions so we can match the .feature files to the test.
Hooks are problematic. If you put before() in a step definition file, you might think that it will run only for the .feature file related to that step definition. You try the feature you work on, everything seems fine and you push the code. Here comes a surprise - it will run for ALL .feature files in your whole project. Very unintuitive. And good luck debugging problems caused by that! This problem was not unique to this plugin, but to the way cucumberjs operates.

Suggestions are welcome !!.
