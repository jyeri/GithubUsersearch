describe('SingleResult is correctly formatted and functional', () => {
    it('Highlight, enlarges on hover', () => {
      cy.visit('http://localhost:5173/')
  
      cy.get('[data-testid="cypress-input"]').type('Jyeri')

      cy.get('[data-testid="cypress-list"]').should('be.visible')
        .wait(200)

      cy.get('[data-testidunique="jyeri-element"]').should('have.css', 'display', 'flex')
      cy.get('[data-testidunique="jyeri-link"]').should('have.attr', 'href')
      cy.get('[data-testidunique="jyeri-img"]').should('have.attr', 'src')
      cy.get('[data-testidunique="jyeri-username-container"]').should('have.text', 'jyeri')
        .children().should('have.length', 1)
        .children().should('have.css', 'color', 'rgb(139, 0, 0)')
      cy.get('[data-testidunique="jyeri-username-text"]').should('have.css', 'transition', 'all 0.5s ease 0s')
    })

    it('Lists clickable elements', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="cypress-input"]').type('Jyeri')
            .wait(500)
  
        cy.get('[data-testid="cypress-list"]').should('be.visible')
  
        cy.get("a").each(page => {
          const link = page.prop('href')
          cy.request({
            url: link,
            failOnStatusCode: false  // allow good and bad response to pass into then
          }).then(response => {
            Cypress.log({
              name: link,
              message: response.status
            })
          })
        })
      })
})