/// <reference types="cypress" />


describe('e2e tests for product details page', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.gamestop.com/')
  })

  it('checks if product details page is correct', () => {

    cy.get('.navbar-toggler').click()
    cy.get('span[data-catname1="Gaming Accessories"]').contains('Gaming Accessories').click()
    cy.get('span[data-catname2="Cases & Stands"]').contains('Cases & Stands').click()
    cy.get('a[title="PowerA Protection Case for Nintendo Switch - Kirby"]').click()
    cy.get('.product-name').should('have.text', 'PowerA Protection Case for Nintendo Switch - Kirby')
    cy.get('.pdp-delivery-option-button').should('have.length', 3)
    cy.get('.add-to-cart').should('have.length', 2)
    cy.get('#product-info-accordion').contains('Features')
    cy.get('#product-info-accordion').contains('Product Description')
  })

  it('filters games for SPS 5 and picks FC 24', () => {
    cy.get('.navbar-toggler').click()
    cy.get('span[data-catname1="Video Games"]').contains('Video Games').click()
    cy.get('span[data-catname2="PlayStation 5"]').contains('PlayStation 5').click()
    cy.get('a[title="EA Sports FC 24 - PlayStation 5"]').click()
  })

})
