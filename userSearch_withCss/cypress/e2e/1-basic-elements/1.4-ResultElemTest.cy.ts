describe('Github user serach result elements', () => {
    it('result renders when fetched', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').should("exist")
        .type('Jyeri')
        .wait(2000)
        cy.get('[data-testid="cypress-resultElem"]').should("exist")
        .and('have.class', 'single-result')
        .and('have.be.visible')
    })

    it('renders suggestion properly when no results', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').should("exist")
        .type('Jyeridi928du')
        .wait(2000)

        cy.get('[data-testid="cypress-resultElem"]').should("not.exist")
        cy.get('[data-testid="cypress-suggestion"]').should("exist")
    })
  })