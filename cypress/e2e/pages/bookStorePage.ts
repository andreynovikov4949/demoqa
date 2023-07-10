export class BookStore {
    public clickAddToCollection = (): BookStore => {
        cy.intercept('/BookStore/v1/Books').as('addBook');
        cy.get('button#addNewRecordButton').contains('Add To Your Collection').click({force: true});
        cy.wait('@addBook');
        return this;
    }

    public openBookByPublisher = (publisher: string, numberOfBook: number): BookStore => {
        cy.get('div.rt-tbody')
            .find('div.rt-tr-group')
            .eq(numberOfBook - 1) // the first book is 0
            .contains(publisher)
            .siblings()
            .eq(1)
            .children()
            .click();
        return this;
    }
}

export const visitBookStore = () => {
    cy.visit('/books');
    return new BookStore();
}