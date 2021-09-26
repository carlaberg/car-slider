describe('Movie list tests', () => {
  beforeEach(() => {
    cy.loadFixtures()
    cy.visit('/')
  })
  it('loads cars on page load and shows them in a slider', () => {
    cy.get('.car-slide')
      .should('have.length', 8)
  })

  it('should filter cars by bodyType', () => {
    cy.get('#vcc-ui-select-input-1').select('suv')
    cy.get('.body-type')
      .should('have.length', 4)
      .then(($items) => {
        $items.each((ix, el) => {
          expect(el).to.contain('suv')
        });
      })
  })

  it('should test links to shop and learn', () => {
    cy.get('a[href="/shop/xc90-recharge"]').click()
    cy.url().should('include', '/shop/xc90-recharge')
    cy.get('a[href="/learn/xc90-recharge"]').click()
    cy.url().should('include', '/learn/xc90-recharge')
  })
})