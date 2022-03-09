/// <reference types="cypress" />

import loginActions from "../../../support/pageAction/webAction/loginAction";
import employeeActions from "../../../support/pageAction/webAction/addEmployeeAction";

var login = new loginActions();
var addEmp = new employeeActions();

describe("New employee functionality", () => {
  before(() => {
    login.launchURL();
    login.enterCredentials();
    login.loginButton();
  });

  it("Adding a new employee", () => {
    addEmp.click_NewEmployeeSubmission();
    addEmp.addEmployeeRequiredField();
    addEmp.saveEmployeNewRecord();
    addEmp.confirmEmployeNewRecord();
    addEmp.getNewRecord();
    addEmp.validateNewlyCreatedRecord();
  });
});
