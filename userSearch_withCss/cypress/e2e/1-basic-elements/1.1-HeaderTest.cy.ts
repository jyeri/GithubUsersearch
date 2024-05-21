describe('Renders title properly', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')
  
      cy.get('[data-testid="cypress-title"]').should("exist")
      .and('have.text', 'Github people finder')
      .and('have.class', 'Title__text');
    })
  })