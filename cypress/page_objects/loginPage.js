/// <reference types="Cypress" /> 

class LoginPage {


    get emailInput() {
        return cy.get('#cypress@test.com');
    }

    get passwordInput() {
        return cy.get('#Test1234')
    }

    get loginButton() {
        return cy.get('button');
    }

    login(email, password) {
        this.emailInput.type('cypress@test.com')
        this.passwordInput.type('Test1234')
        this.loginButton.click()
    }

}

export const loginPage = new LoginPage();