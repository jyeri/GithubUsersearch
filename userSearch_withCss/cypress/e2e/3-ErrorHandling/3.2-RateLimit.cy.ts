describe('Error handling', () => {
    it('No matches found', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]')
        for (let i = 0; i < 10; i++) {
            cy.get('[data-testid="cypress-input"]').type(`${i}`)
            .wait(2000)
            .clear()
        }
        cy.get('[data-testid="cypress-input"]').type('Rate error')
        .wait(2000)

        cy.get('[data-testid="cypress-suggestion"]').should("not.exist")
        cy.get('[data-testid="cypress-list"]').should("not.exist")
        cy.get('[data-testid="cypress-error"]').should("exist")
    })
  })