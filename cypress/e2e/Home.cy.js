describe("Home", () => {
  it("should render `Home` page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Welcome to Tweeter 20");
  });
});
