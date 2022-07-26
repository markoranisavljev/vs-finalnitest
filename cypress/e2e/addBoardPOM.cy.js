/// <reference types="Cypress" //
import { addBoard } from '../page_objects/addBoard';

describe('create board test', () => {

  beforeEach('log in', () => {
    cy.loginViaBackend()
    cy.visit('https://cypress.vivifyscrum-stage.com/organizations/19245/boards')
  })
  
  it('create board', () => {

    let boardName = 'test board'

    cy.url().should('include', '/boards')
    boardCard.createBoard(boardName)

    cy.visit('https://cypress.vivifyscrum-stage.com/organizations/19245/boards')
    cy.url().should('include', '/boards')
    addBoard.createBoard
      .eq(-2)
      .find('h2')
      .should('have.text', boardName)

    })

  })

  

