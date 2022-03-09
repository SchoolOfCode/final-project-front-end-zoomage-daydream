// beforeEach((done) => setTimeout(done,3000));

describe("Test for space APP", () => {
  it("Visits the right page", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("The place to find your Space");
  });
  it("types an input into the location field", () => {
    cy.get("#location").type("London").should("have.value", "London");
  });
  it("select a set of dates", () => {
    cy.get("#dates").click();
    cy.contains("10").click();
    cy.contains("13").click();
    cy.contains("15").click();
    cy.contains("March").click();
    cy.contains("June").click();
    cy.contains("5").click();
    cy.contains("2022").click();
    cy.contains("2023").click();
    cy.contains("5").click();
    cy.get("#dates")
      .invoke("val")
      .should(
        "deep.equal",
        "10/03/2022, 13/03/2022, 15/03/2022, 05/06/2022, 05/06/2023"
      );
    cy.get("#fbackground").click();
  });
  it("selects the right type of space", () => {
    cy.get("#spaces").select("house");
  });
  it("submits the button and goes to the next page", () => {
    cy.get("#submit").click();
  });

  it("clicks on the image taskes you to reserve page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#1").click();
  });
});
