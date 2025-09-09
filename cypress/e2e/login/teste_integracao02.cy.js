/// <reference types="Cypress"/>

describe('Teste funcional de Login', () => {
    it('Deve colocar e remover produto do carrinho', () => {
        cy.visit("https://www.saucedemo.com/v1/inventory.html")
        cy.contains('Sauce Labs Backpack').click()
        cy.get('.btn_primary').click()

        cy.get('.shopping_cart_link').click()
        cy.get('.cart_desc_label').should('contain', 'DESCRIPTION')
        cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')

        cy.get('.item_pricebar > .btn_secondary').click()
        cy.get('.inventory_item_name').should('not.exist')
        cy.get('.btn_secondary').click()
    });

    
});