// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("customVisit", (path) => {
    cy.visit(path, {
        onBeforeLoad: (window) => {
            console.log('onBeforeLoad')
            const profile_liff = {
                displayName: 'Prudential',
                userId: 'Ua22555c3da426d81d743f53a8bd0c184',
                pictureUrl: 'image_url',
                statusMessage: 'liff is controlled by Cypress'
            }
            window.Cypress.liffMock = {
                isInClient: cy.stub().as('isInClient').returns(true),
                init: cy.stub().as('init').resolves(),
                getProfile: cy.stub().as('getProfile').resolves(profile_liff)
            };
        }
    })
});

Cypress.Commands.add("getDataCy", (id, options) => {
    return cy.get(`[data-cy="${id}"]`, options);
});