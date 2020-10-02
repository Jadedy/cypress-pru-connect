import data from '../fixtures/data.json'
import locations from '../fixtures/locations.json'

describe('Login in LIFF App Test', () => {
    before(() => {
        cy.customVisit(data.login.url)
    })

    beforeEach(() => {
        cy.viewport('iphone-x')
    })

    //log-in page
    it('Page should contain logo', function () {
        cy.get(locations.login.img.logo)
            .find('img')
            .should('have.attr', 'src')
            .should('include', data.login.img.logo)
    })

    it('Input ID Card', function () {
        cy.get(locations.login.id_card).type(data.login.user.id_card)
        cy.get(locations.login.submit).should('be.visible').click()
    })

    //otp page
    it('Page should contain otp logo', function () {
        cy.get(locations.login.img.otp)
            .find('img')
            .should('have.attr', 'src')
            .should('include', data.login.img.otp)
        cy.get(locations.login.submit_otp).should('be.visible') //.click()
    })
})