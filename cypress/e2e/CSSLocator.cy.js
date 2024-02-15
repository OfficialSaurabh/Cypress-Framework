describe("CSS Locator", () => {
  it("CSS Locator", () => {
    
    // CSS Selector
    // tag#id
    // tag.class
    // tag[attribute=value]
    // tag.calss[attribute=value]

    cy.visit("http://www.automationpractice.pl/index.php");
    // cy.get("#search_query_top").type("Shirt"); // id
    // cy.get(".search_query").type("Shirt"); // class
    cy.get(".search_query[name='search_query']").type("Shirt"); // class, attribute-value attribute is optional


    // cy.get("input[name='submit_search']").click(); // attribute
    cy.get("[name='submit_search']").click(); // attribute and value

    cy.get(".lighter").contains("Shirt");
  });
});
