/// <reference types="cypress" />

import loginElements from "../../pageObjects/loginPage";


const login = new loginElements();

class loginAction {

  launchURL() {
    cy.visit(Cypress.env("baseUrl"));
  }

  validateLabels_LoginScreen() {
    login.getUserNameLabel().should("be.visible");
    login.getPasswordLabel().should("be.visible");
  }

  validateButtons_LoginScreen() {
    login.getLoginButton().should("be.visible");
    login.getLoginButton().should("be.disabled")
  }

  validatePasswordBox(){
    login.getPasswordTextBox().invoke('attr','type').should('eq','password')
    login.getToggleEyeIcon().should('be.visible').click()
    login.getPasswordTextBox().invoke('attr','type').should('eq','text')
  }

  validateHeaders_SubHeaders_LoginScreen() {
    login.getWelocmeText();
    login.getSubHeaderText();
  }

  enterCredentials() {
    login.getUsernameTextBox().type(Cypress.env("username"))
    login.getPasswordTextBox().type(Cypress.env("password"))
  }

  invalidCredentials() {
    login.getUsernameTextBox().type("abc")
    login.getPasswordTextBox().type("xyz")
  }

  dashboardTitle() {
    cy.title().should("eq", Cypress.env("title"));
  }

  currentUrl() {
    cy.url().should("include", (Cypress.env("Dashboard")))
  }

  loginButton() {
    login.getLoginButton().click();
  }

  loginFailed() {
    login.getLoginFailed().should("be.visible")
  }
}

export default loginAction;
