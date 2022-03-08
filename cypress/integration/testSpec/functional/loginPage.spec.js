/// <reference types="cypress" />

import loginActions from "../../pageAction/webAction/loginAction";

var login = new loginActions();

describe('Welcome page and Login functionality', () => {

    before(() => {

        login.launchURL()
      
    })

    it('Verify Welcome page', () => {
        
        login.validateHeaders_SubHeaders_LoginScreen()
        login.validateLabels_LoginScreen()
        login.validateButtons_LoginScreen()
    })

    it('Verify password text box', () => {

        login.validatePasswordBox()
    })

    it('Verify validation message for invalid credentials on login form', () => {

        login.invalidCredentials()
        login.loginButton()
        login.loginFailed()
    })

    it('Verify login functionality', () => {

        login.enterCredentials()
        login.loginButton()
        login.currentUrl()
    })
    
  })
  