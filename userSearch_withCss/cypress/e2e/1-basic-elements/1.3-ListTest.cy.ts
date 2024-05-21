describe('Github user serach result list element', () => {
    it('List renders when typed', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').should("exist")
        .type('Jyeri')
        .wait(2000)

        cy.get('[data-testid="cypress-list"]').should("exist")
        .and('have.class', 'result-list')
        .and('have.be.visible')
    })

    it('renders suggestion when no results', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').should("exist")
        .type('Jyeridi928du')
        .wait(2000)

        cy.get('[data-testid="cypress-suggestion"]').should("exist")
        .and('have.class', 'result-list__suggestion')
        .and('have.be.visible')
    })
  })