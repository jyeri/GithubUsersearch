describe('Github user inputbox', () => {
    it('Renders searchbar correctly', () => {
      cy.visit('http://localhost:5173/')
  
      cy.get('[data-testid="cypress-input"]').should("exist")
      .and('have.class', 'search__input')
      .and ('have.attr', 'placeholder', 'Try searching for Jyeri')
      .and ('have.attr', 'value')
    })

    it('Inputbox should be able to type', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').should("exist")
        .type('Jyeri')
        .should('have.value', 'Jyeri')
    })
  })