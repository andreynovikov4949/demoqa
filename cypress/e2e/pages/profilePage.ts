export class ProfilePage {
    public verifyBookExistByNameAndAuthor = (name: string, author: string): ProfilePage => {
        cy.get('div.rt-tbody')
            .find('div.rt-tr-group')
            .eq(0)
            .should('contain', author)
            .and('contain', name);
        return this;
    }

    public clickDeleteAllBooks = (): ProfilePage => {
        cy.get('button#submit').contains('Delete All Books').click({force: true});
        return this;
    }

    public confirmModalDeletion = (): ProfilePage => {
        cy.get('button#closeSmallModal-ok').click();
        return this;
    }

    public get noRowsPlaceholder(): Cypress.Chainable {
        return cy.get('.rt-noData');
    }
}

export const openProfile = () => {
    cy.get('ul.menu-list').contains('Profile').click({force: true});
    return new ProfilePage();
}