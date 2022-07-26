class AddBoard {

    get createBoard() {
        return cy.get('.vs-c-organization-boards__item--add-new');
    }


    get boardNameInput() {
        return this.boardModal.find('input');
    }

    get boardTitleInput() {
        return this.boardModal.find('input');
    }

    get nextBtn() {
        return cy.get('button[name="next_btn"]')
    }

    get boardKanban() {
        return this.boardModal.find('.vs-c-radio-check');
    }

    get nextBtn() {
        return cy.get('button[name="next_btn"]')
    }

    get nextBtn() {
        return cy.get('button[name="next_btn"]')
    }

    get actionBtn() {
        return this.addBoardModal.find('button').last();
    }

    
    addBoard(name) {
        this.boardCard.last().click();
        this.boardModal.should('be.visible');
        this.actionBtn.should('be.disabled')
        this.boardNameInput.type(name)
        this.boardTitleInput.type(title)
        this.nextBtn.click()
        this.boardKanban.check()
        this.nextBtn.click()
        this.nextBtn.click()
        this.actionBtn.click()
    }
}

export const addBoard = new AddBoard();