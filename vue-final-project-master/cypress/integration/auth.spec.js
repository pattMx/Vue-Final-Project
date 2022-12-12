/// <reference types="cypress" />
import { authSignIn, authSignUp, authSignOut } from '../support/helper';

describe('Auth', () => {
  it('As a user I want to see an error if i cannot signin', () => {
    authSignIn(400);
    cy
      .get('body')
      .contains('Error from API')
      .should('be.visible');
  });
  it('As a user I want to signin', () => {
    authSignIn(200);
    cy.get('body')
      .contains('Welcome')
      .should('be.visible');
  });
  it('As a user I want to sign out', () => {
    authSignIn(200);
    authSignOut();
  });
  it('As a user I want to signup', () => {
    authSignUp(200);
  });
  it('As a user I want to see an error if i cannot signup', () => {
    authSignUp(400);
    cy.get('body')
      .contains('Could not sign you up please contact support')
      .should('be.visible');
  });
});
