import data from '../fixtures/data.json'
import locations from '../fixtures/locations.json'

describe('Setting Page in LIFF App Test', () => {
    before(() => {
        cy.customVisit(data.setting.url + data.setting.user.line_id)
    })

    beforeEach(() => {
        cy.viewport('iphone-x')
    })

    it('Page should contain logo', function () {
        cy.get(locations.setting.img.logo)
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .should('include', data.setting.img.logo)
    })

    it('Page should contain title', function () {
        cy.get(locations.setting.title)
            .should('be.visible')
    })

    it('Check notification button and click cancel', function () {
        cy.get(locations.setting.notification)
            .should('be.visible').click()
        cy.get(locations.setting.img.warning)
            .find('img')
            .should('have.attr', 'src')
            .should('include', data.setting.img.warning)
        cy.getDataCy('btn-confirm-cancel')
            .should('be.visible').click()
        cy.get(locations.setting.notification_button)
            .should('be.visible')
            .should('be.checked')
    })

    it('Check notification button and click confirm', function () {
        cy.get(locations.setting.notification)
            .should('be.visible').click()
        cy.get(locations.setting.img.warning)
            .find('img')
            .should('have.attr', 'src')
            .should('include', data.setting.img.warning)
        cy.getDataCy('btn-confirm')
            .should('be.visible').click()
        cy.get(locations.setting.notification_button)
            .should('be.visible')
            .should('not.be.checked')
    })

    it('Turn notification back on', function () {
        cy.get(locations.setting.notification)
            .should('be.visible').click()
        cy.get(locations.setting.img.warning)
            .find('img')
            .should('have.attr', 'src')
            .should('include', data.setting.img.warning)
        cy.getDataCy('btn-confirm')
            .should('be.visible').click()
        cy.get(locations.setting.notification_button)
            .should('be.visible')
            .should('be.checked')
    })

    it('Click logout but cancel', function () {
        cy.get(locations.setting.logout_button)
            .should('be.visible').click()
        cy.get(locations.setting.img.warning)
            .find('img')
            .should('have.attr', 'src')
            .should('include', data.setting.img.logout)
        cy.getDataCy('btn-confirm-cancel')
            .should('be.visible').click()
        cy.reload()
        cy.get(locations.setting.login_button)
            .should('not.be.visible')
    })

    // it('Click logout and confirm', function () {
    //     cy.get(locations.setting.logout_button)
    //         .should('be.visible').click()
    //     cy.get(locations.setting.img.warning)
    //         .find('img')
    //         .should('have.attr', 'src')
    //         .should('include', data.setting.img.logout)
    //     cy.getDataCy('btn-confirm')
    //         .should('be.visible').click()
    //     cy.get(locations.setting.logout_button)
    //         .should('be.visible')
    //     cy.reload()
    //     cy.get(locations.setting.login_button)
    //         .should('be.visible')
    // })
})