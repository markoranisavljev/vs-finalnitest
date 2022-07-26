/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage';


describe('login test', () => {
  const validEmail = 'cypress@test.com';
  const validPassword = 'Test1234';

  it('login with valid credentials', () => {
    cy.visit('https://cypress.vivifyscrum-stage.com/');
    cy.url().should('include', '/login');
    cy.get("[type='email']").type(validEmail);
    cy.get("[type='password']").type(validPassword)
    cy.get('button').eq(0).click();
    cy.url().should('not.include', 'login');
  })

})




