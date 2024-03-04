describe("XPATH Locator", () => {
  it("Test 1", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.xpath("//input[@id='search_query_top']").type("dress");

    cy.xpath("//button[@name='submit_search']").click();

    cy.xpath("//span[@class='lighter']").contains("dress");
  });
});
