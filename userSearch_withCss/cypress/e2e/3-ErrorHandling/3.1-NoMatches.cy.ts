describe('Error handling and reseting api limits', () => {

    it('Waiting for api rate limits', () => {
        cy.visit('http://localhost:5173/')
        cy.wait(50000)
      })

    it('No matches found', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').should("exist")
        .type('Jyeridi928du')
        .wait(2000)

        cy.get('[data-testid="cypress-resultElem"]').should("not.exist")
        cy.get('[data-testid="cypress-suggestion"]').should("exist")
        .wait(2000)
        .should('have.text', 'No matches, check the spelling, or try searching for "Jyeri"')

        cy.get('[data-testid="cypress-input"]').clear().type('Jyeri')
        .wait(2000)
        cy.get('[data-testid="cypress-suggestion"]').should("not.exist")
        cy.get('[data-testid="cypress-resultElem"]').should("exist")
    })
  })