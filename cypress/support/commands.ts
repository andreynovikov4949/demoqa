/// <reference types="cypress" />

Cypress.Commands.add('loginViaUI', (username, password) => {
    cy.intercept('/Account/v1/GenerateToken').as('tokenReq')
    cy.intercept('/Account/v1/Login').as('loginReq')
    cy.visit('/login');
    cy.get('div.main-header').contains('Login');
    cy.get('input#userName').type(username);
    cy.get('input#password').type(password);
    cy.get('button#login').click();
    cy.wait('@tokenReq');
    cy.wait('@loginReq');
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }