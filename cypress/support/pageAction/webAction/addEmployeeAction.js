import EmployeeSubmissionElements from "../../../support/pageObjects/addEmployee";
/// <reference types="cypress" />
const employee = new EmployeeSubmissionElements();
var randomstring = require("randomstring");

class employeeActions {
  click_NewEmployeeSubmission() {
    employee.getNewEmployeSubmission().click();
  }

  addEmployeeRequiredField() {
    employee.getFirstName_TextField().type(
      randomstring.generate({
        length: 7,
        charset: "alphabetic",
      })
    );
    employee.getLastName_TextField().type(
      randomstring.generate({
        length: 7,
        charset: "alphabetic",
      })
    );
    employee.getCity_TextField().type(
      randomstring.generate({
        length: 5,
        charset: "alphabetic",
      })
    );
  }

  saveEmployeNewRecord() {
    employee.getEmployeeSubmission_Save().click();
  }

  confirmEmployeNewRecord() {
    employee.getEmpployeeSubmision_ConfirmSave().click();
  }

  getNewRecord() {
    employee
      .getNewlyCreatedRecord()
      .invoke("text")
      .then((text) => {
        var text1 = text.trim();
        var text2 = text1.substring(0, text1.length - 9);
        var text3 = text2.replace(/\s+/g, "");
        cy.writeFile("cypress\\fixtures\\example.json", {
          recordid: text3,
        });
      });
  }

  click_NewSubmission_label() {
    employee.getNewEmployeSubmission_Label().click();
  }

  validateNewlyCreatedRecord() {
    cy.fixture("example.json").then(function (data) {
      this.data = data;
      cy.log(this.data.recordid);
      cy.contains(this.data.recordid);
    });
  }
}

export default employeeActions;
