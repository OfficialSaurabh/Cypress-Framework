describe("Test Case1", () => {
  it("Test Case 1 verify-title positive", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
  });
  it("Test Case 1 verify-title negative", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHR");
  });



});

