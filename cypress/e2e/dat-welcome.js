describe('e2e tests welcome page',  () => {
    beforeEach(() => {
        cy.visit('https://www.dat.com/')
    })

    it.skip("can find Products menu tab and click'",  () => {

        cy.get('#menu-item-11327', {
            timeout: 10000
        }).first().click();
        // cy.get('.search-toggle-btn-main').click();
        // cy.get('.search-field').type('top').type('{enter}')
        // cy.get('div.result-count').contains('156 results')
        // // cy.get('div.result-count').should('have.text','156 results')
    })

})
