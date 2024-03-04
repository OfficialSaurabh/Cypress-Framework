// const { describe } = require("mocha");

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

    cy.get(".orangehrm-login-branding > img").should("be.visible")
    .and("exist"); 

  });
});
