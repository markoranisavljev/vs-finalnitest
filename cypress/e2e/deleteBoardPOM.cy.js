/// <reference types="Cypress" //
import { deleteBoard } from '../page_objects/deleteBoard';

describe('delete board test', () => {

  beforeEach('log in', () => {
    cy.loginViaBackend()
    cy.visit('https://cypress.vivifyscrum-stage.com/organizations/19245/boards')
    cy.visit(' vs-c-boards-item__content')
  })
  
  it('delete board', () => {
    cy.visit('https://cypress.vivifyscrum-stage.com/organizations/19245/boards');
    cy.url().should('include', '/boards');
    cy.get('.vs-c-boards-item__content').click();
    cy.get('.vs-c-site-logo router-link-exact-active router-link-active').click();
    cy.get('.vs-c-btn vs-c-btn--warning vs-c-btn--spaced').click();
    cy.get('.el-button el-button--success el-button').click();
    cy.url().should('not.include', '/19245/boards');
    })

  })

  

