import data from '../fixtures/data.json'
import locations from '../fixtures/locations.json'

describe('Contact Page in LIFF App Test', () => {

    before(() => {
        cy.window().then((win) => {
            win.sessionStorage.clear()
        });
        cy.customVisit('/contact')
    })

    beforeEach(() => {
        cy.viewport('iphone-x')
    })

    it('Page should contain logo', function () {
        cy.get(locations.contact.src.logo)
            .find('img')
            .should('have.attr', 'src')
            .should('include', data.contact.img.logo)
    })

    it('Contact email is visible', function () {
        cy.get(locations.contact.src.email)
            .should('have.attr', 'src')
            .should('include', data.contact.img.email)
        cy.get(locations.contact.email)
            .contains(data.contact.email)
            .should('be.visible')
    })

    it('Complaint section', function () {
        cy.get(locations.contact.src.complaint)
            .should('have.attr', 'src')
            .should('include', data.contact.img.complaint)
        cy.get(locations.contact.text)
            .contains(data.contact.complaint)
            .should('be.visible')
    })

    it('Address section', function () {
        cy.get(locations.contact.src.address)
            .should('have.attr', 'src')
            .should('include', data.contact.img.address)
        cy.get(locations.contact.text)
            .contains(data.contact.address)
            .should('be.visible')
    })

    it('Working hour section', function(){
        cy.get(locations.contact.src.working_hour)
            .should('have.attr', 'src')
            .should('include', data.contact.img.working_hour)
        cy.get(locations.contact.working_hour)
            .contains(data.contact.working_hour)
            .should('be.visible')
    })

    // it('Fax section', function(){
    //     cy.get(locations.contact.src.fax)
    //         .should('have.attr', 'src')
    //         .should('include', data.contact.img.fax)
    //     cy.get(locations.contact.text)
    //         .contains(data.contact.fax)
    //         .should('be.visible')
    // })

    it('Faq section', function(){
        cy.get(locations.contact.src.faq)
            .should('have.attr', 'src')
            .should('include', data.contact.img.faq)
        cy.get(locations.contact.faq)
            .should('have.attr', 'href')
            .should('include', data.contact.img.faq)
    })
})