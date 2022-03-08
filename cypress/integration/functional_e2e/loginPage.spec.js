/// <reference types="cypress" />

import loginActions from "../pageAction/webAction/loginAction";

var login = new loginActions();

describe('Login Functionality', () => {

    it('Verify login functionality', () => {

        login.launchURL()
        login.enterCredentials()
        login.loginButton()
        cy.url().should('include','welcome')
    })
    
  })
  