/// <reference types="cypress" />
import { authSignIn, authSignOut, APIURL } from '../support/helper';

describe('Todo', () => {
  beforeEach(() => {
    authSignIn(200);
  })
  it('As a user I want to add a task', () => {
    cy
      .get('input[name="new-task"]')
      .type('My new test task')
      .get('form#new-task')
      .submit()
      .intercept('POST', `${APIURL}/rest/**`, {
        statusCode: 200,
      })
      .intercept('GET', `${APIURL}/rest/**`, {
        statusCode: 200,
        body: [{
          id: 1,
          title: 'My new task',
          is_complete: false,
          user_id: 'someid'
        }]
      })
      .get('.tasklist-all #task-1')
      .contains('My new test task')
      .should('be.visible')
  });
  it('As a user I want to complete a task', () => {
    cy
      .intercept('GET', `${APIURL}/rest/**`, {
        statusCode: 200,
        body: [{
          id: 1,
          title: 'My new task',
          is_complete: false,
          user_id: 'someid'
        }]
      })
      .intercept('PATCH', `${APIURL}/rest/**`, {
        statusCode: 200
      })
      .get('#task-1 button[name="complete"]')
      .click()
  });
  
  it('As a user I want to edit a task', () => {
    cy
      .intercept('GET', `${APIURL}/rest/**`, {
        statusCode: 200,
        body: [{
          id: 1,
          title: 'My new task',
          is_complete: false,
          user_id: 'someid'
        }]
      })
      .get('#task-1 button[name="edit"]')
      .click()
      .get('#task-1 input')
      .type('new title')
      .intercept('PATCH', `${APIURL}/rest/**`, {
        statusCode: 200
      })
      .intercept('GET', `${APIURL}/rest/**`, {
        statusCode: 200,
        body: [{
          id: 1,
          title: 'My new task',
          is_complete: true,
          user_id: 'someid'
        }]
      })
      .get('button[name="update"]')
      .submit()
      .get('.tasklist-main #task-1')
      .contains('new title')
      .should('be.visible')
  });
  it('As a user I want to delete a task', () => {
    cy
      .intercept('GET', `${APIURL}/rest/**`, {
        statusCode: 200,
        body: [{
          id: 1,
          title: 'My new task',
          is_complete: false,
          user_id: 'someid'
        }]
      })
      .intercept('PATCH', `${APIURL}/rest/**`, {
        statusCode: 200
      })
      .get('#task-1 button[name="delete"]')
      .click()
      .get('.tasklist-all')
      .contains('#task-1')
      .should('not.be.visible')
  });
  it('As a user I want see my completed tasks', () => {
    cy
      .intercept('GET', `${APIURL}/rest/**`, {
        statusCode: 200,
        body: [{
          id: 1,
          title: 'My new task',
          is_complete: false,
          user_id: 'someid'
        }]
      })
      .get('.tasklist-complete #task-1')
      .contains('My new test task')
      .should('be.visible')
  });
});
