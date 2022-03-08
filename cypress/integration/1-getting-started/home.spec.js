// const { idleTimeoutMillis } = require("pg/lib/defaults");

describe("space-app-homepage", () => {
  beforeEach(() => {
    cy.visit("https://angry-perlman-7ec02a.netlify.app/");
  });
it ("it contains ",()=>{
    cy.contains("banana")
    
})
it("testing input location",()=>{
  cy.get("location").type("london").should("have.value","london")
})
});
