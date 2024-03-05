import * as assert from "assert";
// const { describe } = require("mocha");
/*
1) implicit assetion
  should
  and
  
along with should we can use the follwing assertion
eq
contain
include
exist
have.length
have.value


2) Explicit assertion
  expect -BDD
  asser - TDD

*/

describe("Assertions Test", () => {
  it("Implicit assertion", () => {
    // Should and
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // cy.url().should("include", "orangehrmlive")
    // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.url().should('contain', 'orangehrmlive')

    // should assertion
    /*cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login").should("include", "orangehrmlive")
    .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain', 'orangehrmlive')*/

    //should and assertion
    cy.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .should("include", "orangehrmlive")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrmlive")
      .and("not.contain", "greenhrm"); //negative assertion

    cy.title()
      .should("contain", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");
  });

  // Explicit assertion

  it("Explicit assertion", () => {
    // Should and
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let exptName = "ReSoPOakKZ kumbimath";
    cy.get("p[class='oxd-userdropdown-name'] ").then(x => {
      // BDD Assertions
      let actName = x.text();
      expect(actName).to.equal(exptName);
      expect(actName).to.not.equal(exptName);

      // TDD Assertions
      assert.equal(actName, exptName);
      assert.notEqual(actName, exptName);
    });
  });
});
