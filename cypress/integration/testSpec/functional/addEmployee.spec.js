/// <reference types="cypress" />

import loginActions from "../../pageAction/webAction/loginAction";
import employeeActions from "../../pageAction/webAction/addEmployeeAction";


var login = new loginActions();
var addEmp = new employeeActions();

describe('Application Record and adding new employee functionality', () => {




    it('Adding a new employee', () => {

        login.launchURL()
        login.enterCredentials()
        login.loginButton()
        addEmp.click_NewEmployeeSubmission()
        addEmp.addEmployeeRequiredField()
        addEmp.saveEmployeNewRecord()
        addEmp.confirmEmployeNewRecord()
        addEmp.getNewRecord()
        addEmp.validateNewlyCreatedRecord()
    })
    
  })