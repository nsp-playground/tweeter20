describe("Home", () => {
  it("should render `Home` page", () => {
    cy.visit("http://localhost:3000/");

    // top
    cy.get(".username").contains("@shakib");
    cy.get(".status").contains("Offline");

    // posts
    cy.get(".header").contains("Posts");
    cy.get(".post-item").its("length").should("be.gt", 0);

    // input
    cy.get("textarea").should("exist");
    cy.get(".add-post-btn").contains("Add Post");
  });
});
