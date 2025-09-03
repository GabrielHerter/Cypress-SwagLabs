/// <reference types="Cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo de compra de produtos', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')

        // Ordenação de produtos de menor para maior
        cy.get('.product_sort_container').select('Price (low to high)')
        // Validando se esta realmente de menor para maior
        cy.get('.inventory_list > :nth-child(1)').should('contain', 'Sauce Labs Onesie')
        cy.get('.inventory_list > :nth-child(2)').should('contain', 'Sauce Labs Bike Light')
        cy.get('.inventory_list > :nth-child(3)').should('contain', 'Sauce Labs Bolt T-Shirt')

        // Adiciona produto ao carrinho
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()

        // Clica no carrinho, verifica se esta no carrinho e verifica se o produto esta no carrinho
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_desc_label').should('contain', 'DESCRIPTION')
        cy.get('.inventory_item_name').should('contain', 'Sauce Labs Onesie')

        // Realiza as operacoes no checkout
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Ultimo Nome')
        cy.get('[data-test="postalCode"]').type('9910102')
        cy.get('.btn_primary').click()

        // Verifica se o checkout foi para pagina de overview e se colocou de forma correta a taxa sobre o produto
        cy.get('.summary_total_label').should('contain', 'Total: $8.63')

        // Clica para finalizar a compra e verifica se finalizou
        cy.get('.btn_action').click()
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')

        // Clica no botao hamburguer
        cy.get('.bm-burger-button > button').click()

        // Faz o logout
        cy.get('#logout_sidebar_link').click()

        //Fim do teste

    });
});