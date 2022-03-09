// const { idleTimeoutMillis } = require("pg/lib/defaults");

describe("space-app-homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("it contains ", () => {
    cy.contains("space");
  });
  it("testing input location", () => {
    cy.get("#location").type("london").should("have.value", "london");
  });
  it("testing  date", () => {
    cy.get("#date").type("02-02-2022").should("have.value", "02-02-2022");
  });
});
