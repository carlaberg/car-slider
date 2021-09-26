describe('Movie list tests', () => {
  beforeEach(() => {
    cy.loadFixtures()
    cy.visit('/')
  })
  it('loads movies on page load and shows them in a list', () => {
    console.log('hello')
    
    // cy.get('.movie-list li')
    //   .should('have.length', 6)
  })

  // it('should sort list by year', () => {
  //   cy.get('.dropdown-toggle').click()
  //   cy.get('.dropdown-item').contains('Year').click()
  //   cy.get('.movie-list li')
  //     .first()
  //       .should(($item) => {
  //         expect($item.children('.episode-date')).to.contain('1977-05-25')
  //       })
  //   cy.get('.movie-list li')
  //     .last()
  //       .should(($item) => {
  //         expect($item.children('.episode-date')).to.contain('2005-05-19')
  //       })
  // })

  // it('should sort list by episode', () => {
  //   cy.get('.dropdown-toggle').click()
  //   cy.get('.dropdown-item').contains('Episode').click()
  //   cy.get('.movie-list li')
  //     .first()
  //       .should(($item) => {
  //         expect($item.children('.episode-number')).to.contain('1')
  //       })
  //   cy.get('.movie-list li')
  //     .last()
  //       .should(($item) => {
  //         expect($item.children('.episode-number')).to.contain('6')
  //       })
  // })

  // it('should filter list based on search string', () => {
  //   cy.get('.form-control').type('The Empire strikes back')
  //   cy.get('.movie-list li')
  //     .should('have.length', 1)

  //   cy.get('.movie-list li')
  //     .first()
  //       .should(($item) => {
  //         expect($item.children('.episode-title')).to.contain('Episode V - The Empire Strikes Back')
  //       })    
  // })

  // it('should display movie info when clicking on list item', () => {
  //   cy.get('.episode-title').contains('Episode V - The Empire Strikes Back').parent('li').click()
  //   cy.get('.active-movie-title')
  //     .should('have.text', 'Episode V - The Empire Strikes Back')
  // })
})