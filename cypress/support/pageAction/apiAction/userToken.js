import utilfunction from "../../../support/apiResuable/utilfunction";

const util = new utilfunction();
const statusCode = Cypress.env("SUCCESS_STATUS");
const loginURL = Cypress.env("APIURL") + Cypress.env("loginAPIURl");
const body = {
  username: Cypress.env("username"),
  password: Cypress.env("password"),
};
/** Generate token via Post call with User Credentials */
class UserTokenGenerateAPI {
  static token;
   static generateToken() {
    util.request("POST", loginURL, body, statusCode).then((response) => {
      this.token = response.body.token;
      cy.writeFile("cypress\\fixtures\\example.json", {
        token: this.token,
      });
    });
  }
}

export default UserTokenGenerateAPI;
