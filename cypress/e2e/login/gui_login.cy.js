/// <reference types="Cypress"/>

describe('Teste funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
    });

    // Colocando apenas o usuario, deve dar uma mensagem dizendo que a senha é obrigatoria
    it('Validando campo senha nula', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required')
    });

    // Colocando apenas a senha, deve dar uma mensagem dizendo que o usuario é obrigatorio
    it('Validando campo usuario nulo', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
    });
    
    // Colocando usuario e senha invalido, deve dar uma mensagem dizendo que o login ou a senha não existem no serviço
    it('Validando usuario e senha invalidos', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("usuario_invalido")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});