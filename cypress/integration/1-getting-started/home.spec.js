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
    cy.get("#date").click();
    cy.contains("5").click();
    cy.contains("March").click();
    cy.contains("April").click();
    cy.contains("5").click();
    cy.get("#date")
      .invoke("val")
      .should("deep.equal", "05/03/2022, 05/04/2022");
  });
  it("tests the time", () => {
    cy.get(".timerange").click();
    cy.contains("07:00 AM").click();
  });
});
