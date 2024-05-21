describe('Title works properly and reset api timer', () => {
  it('Waiting for api rate limits', () => {
    cy.visit('http://localhost:5173/')
    cy.wait(50000)
  })

  it('changes colors when hover', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="cypress-title"]').should('have.css', 'background-color', 'rgb(220, 20, 60)')

    cy.get('[data-testid="cypress-title"]').realHover()
      .should('have.css', 'transition', 'all 0.5s ease 0s')
  })
  })