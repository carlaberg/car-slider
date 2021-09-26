Cypress.Commands.add('loadFixtures', () => {
  cy.server()
  cy.route('GET', '/cars', 'fixture:cars')
})