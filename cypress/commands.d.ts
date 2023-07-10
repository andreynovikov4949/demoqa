declare namespace Cypress {
    interface Chainable {
        loginViaUI(username: string, password: string): Chainable<void>;
    }
  }