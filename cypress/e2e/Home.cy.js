describe("Home", () => {
  it("should render `Home` page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("All Community Activities in Your Hands");
    cy.get("p").contains(
      "Create and promote their own events, connect with other community members, and share their experiences with others"
    );
  });
});
