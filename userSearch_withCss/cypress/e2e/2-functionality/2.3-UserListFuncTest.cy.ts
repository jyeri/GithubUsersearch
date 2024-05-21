describe('Userlist is correctly constructed', () => {
    it('Userlist is scrollable', () => {
      cy.visit('http://localhost:5173/')
  
      cy.get('[data-testid="cypress-input"]').type('Jyeri')

      cy.get('[data-testid="cypress-list"]').should('be.visible')
        .wait(200)
        .scrollTo('bottom')
        .wait(200)
        .scrollTo('top')
        
    })

    it('Userlist has correct number of elements, and in flex', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').type('Jyeri')
    
        cy.get('[data-testid="cypress-list"]').should('have.css', 'display', 'flex')
        .wait(500)
        .children().should('have.length', 15)
    })

    it('Userlist has correct number of elements when there is only one', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').type('Jyeriv')
    
        cy.get('[data-testid="cypress-list"]').should('have.css', 'display', 'flex')
        .wait(500)
        .children().should('have.length', 1)
    })

    it('Userlist has correct number of elements when there are none', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').type('Jyeridi928du')
    
        cy.get('[data-testid="cypress-list"]').should('be.visible')
        .wait(500)
        .children().should('have.length', 1)
            .and('contain', 'No matches, check the spelling, or try searching for "Jyeri"')
    })
  })