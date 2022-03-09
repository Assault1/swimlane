// <reference types="cypress" />

import UserTokenGenerateAPI from "../../../support/pageAction/apiAction/userToken";
import httpMethod from "../../../support/pageAction/apiAction/httpMethod";


describe("API functionality", () => {
  it("Generate a new token", () => {
    UserTokenGenerateAPI.generateToken();
  });

  it("Create a new record using API", () => {
    httpMethod.createNewRecordAPI("POST", 200);
  });

  it("Retrieve new record using API", () => {
    httpMethod.getNewRecordAPI("GET", 200);
  });

  it("Delete new record using API", () => {
    httpMethod.deleteNewRecordAPI("DELETE", 204);
  });
});
