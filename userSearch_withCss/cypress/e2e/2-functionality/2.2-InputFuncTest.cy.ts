describe('Title works properly and adds to context', () => {
    it('Input accepts sepcial characters', () => {
      cy.visit('http://localhost:5173/')
  
      cy.get('[data-testid="cypress-input"]').type('Jyeri')
        .wait(200).should('have.value', 'Jyeri')
        .clear()
        .type('!@#$%^&*()_+') // Special characters
        .wait(200).should('have.value', '!@#$%^&*()_+')
        .clear()
        .type('qwertyuiop') // Letters
        .wait(200).should('have.value', 'qwertyuiop')
        .clear()
        .type('1234567890') // Numbers;
        .wait(200).should('have.value', '1234567890')
        .clear()
    })

    it('Input doesnt trigger before debounce', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').type('Jye')
          cy.log('Expect no list to render or fetch to be made')
          cy.get('[data-testid="cypress-input"]').type('ri')
          .wait(500).should('have.value', 'Jyeri')
            cy.get('[data-testid="cypress-list"]').should("exist")
            cy.log('Fetched and rendered list')
        cy.get('[data-testid="cypress-input"]').clear()
            .wait(1000)
        cy.get('[data-testid="cypress-input"]').type('Jyeri')
            .wait(500).should('have.value', 'Jyeri')
            cy.get('[data-testid="cypress-list"]').should("exist")
            cy.log('List should be rendered from cache')
      })
  })