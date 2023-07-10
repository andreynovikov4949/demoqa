import { visitBookStore } from "../pages/bookStorePage";
import { openProfile } from "../pages/profilePage";
import { BookStore } from "../pages/bookStorePage";

const userToTest = {
  name: Cypress.env('users').testUser.username,
  password: Cypress.env('users').testUser.password,
  id: Cypress.env('users').testUser.id
};

Cypress.on('uncaught:exception', (err, runnable) => {
  // test fails due to error from origin script.
  // this prevent from failing
  if (err.message.includes('Script error.')) {
    return false
  }
});

describe('Verify UI tests', () => {
  context('Test scenario 1', () => {
    it('User is able to add a book to the collection', () => {
      const publisher = 'O\'Reilly Media';
      const bookName = 'Speaking JavaScript';
      const author = 'Axel Rauschmayer';
      cy.loginViaUI(userToTest.name, userToTest.password)
      const bookPage = visitBookStore()
        .openBookByPublisher(publisher, 4);
      bookPage.clickAddToCollection;
      cy.wait(100);
      openProfile()
        .verifyBookExistByNameAndAuthor(bookName, author);
    });
  });
  context('Test scenario 2', () => {
    it('If the user has no books - his collection is empty', () => {
      cy.loginViaUI(userToTest.name, userToTest.password)
      openProfile()
        .clickDeleteAllBooks()
        .confirmModalDeletion()
        .noRowsPlaceholder.should('be.visible');
    });
  });
});
