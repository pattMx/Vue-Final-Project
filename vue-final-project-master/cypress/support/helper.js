// eslint-disable-next-line no-undef
export const APIURL = Cypress.env('apiurl');

export const isAuthenticated = () => {
  cy.intercept('POST', `${APIURL}/auth/**/*`, {
    statusCode: 200,
    body: {
      access_token: 'sometoken',
      user: {
        email: 'testvueironhack@seam.es',
        confirmed_at: '2022-03-10T09:51:56.08358Z'
      }
    }
  })
  .visit('/')
}

export const authSignIn = (response) => {
  cy
    .intercept('POST', `${APIURL}/auth/**`, {
      statusCode: response,
      body: response === 200
        ? {
            access_token: 'sometoken',
            user: {
              email: 'testvueironhack@seam.es',
              confirmed_at: '2022-03-10T09:51:56.08358Z'
            }
          }
        : {
            status: 'Error from API'
          }
    })
    .get('[name="email"]')
    .type('testvueironhack@seam.es')
    .get('[name="password"]')
    .type('1234!@£$asdASD')
    .get('form')
    .submit();
};

export const authSignUp = (response) => {
  cy
    .intercept('POST', `${APIURL}/auth/**`, {
      statusCode: response,
      body: response === 200
        ? {
            access_token: 'sometoken',
            user: {
              email: 'testvueironhack@seam.es',
              confirmed_at: '2022-03-10T09:51:56.08358Z'
            }
          }
        : {
            status: 'fail'
          }
    })
    .get('#signup')
    .click()
    .get('[name="email"]')
    .type('testvueironhack@seam.es')
    .get('[name="password"]')
    .type('1234!@£$asdASD')
    .get('[name="confirmPassword"]')
    .type('1234!@£$asdASD')
    .get('form')
    .submit();
};

export const authSignOut = () => {
  cy
    .get('#signout')
    .click()
    .url()
    .should('contain', '/auth');
};
