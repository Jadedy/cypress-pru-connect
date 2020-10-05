import data from '../fixtures/data.json'
import locations from '../fixtures/locations.json'

describe('Payment Page in LIFF App Test', () => {
    before(() => {
        cy.customVisit(data.payment.url + data.payment.user.line_id)
    })

    beforeEach(() => {
        cy.viewport('iphone-x')
    })

    it('Payment page should contain logo and title', function () {
        cy.get(locations.payment.img.logo)
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .should('include', data.payment.img.logo)
        cy.get(locations.payment.title1)
            .should('be.visible')
            .should('contain', data.payment.title1)
        cy.get(locations.payment.title2)
            .should('be.visible')
            .should('contain', data.payment.title2)
        cy.get(locations.payment.remark)
            .should('be.visible').should('contain', data.payment.remark)
    })

    it('Click to see details super link', function () {
        cy.get(locations.payment.bubble).contains('whole life 99/15')
            .should('be.visible').click()
    })

    it('Payment method page should contain logo and title', function () {
        cy.get(locations.payment_method.title1)
            .should('be.visible')
            .should('contain', data.payment_method.title1)
        cy.get(locations.payment_method.title2)
            .should('be.visible')
            .should('contain', data.payment_method.title2)
    })

    it('Click bank account', function () {
        cy.get(locations.payment_method.bank_account)
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .should('include', data.payment_method.img.bank_account)
        cy.get(locations.payment_method.bank_account)
            .click()
    })

    // it('Select ATM Flow', function () {
    //     cy.get(locations.payment_method.img.atm)
    //         .should('be.visible').click()
    //     cy.get(locations.payment_method.atm_title)
    //         .should('be.visible')
    //         .should('contain', data.payment_method.atm_title)
    //     cy.wrap(data.pru_details.whole_life.atm)
    //         .each((value) => {
    //             cy.get('[alt=' + value)
    //                 .should('be.visible').click()
    //                 .should('have.class', 'active')
    //             cy.get(locations.payment_method.order_detail)
    //                 .should('be.visible')
    //             cy.get(locations.payment_method.order_header)
    //                 .should('be.visible')
    //                 .should('contain', data.payment_method.order_header)
    //             cy.get(locations.payment_method.order_sub)
    //                 .should('be.visible')
    //                 .should('contain', getComp(value))
    //         })
    //     checkStepDetails('atm')
    // })

    it('Select Mobile Application Flow', function () {
        cy.get(locations.payment_method.img.mobile)
            .should('be.visible').click()
        cy.get(locations.payment_method.atm_title)
            .should('be.visible')
            .should('contain', data.payment_method.atm_title)
        cy.wrap(data.pru_details.whole_life.mobile)
            .each((value) => {
                cy.get('[data-cy=mobile-' + value + '-bank]')
                    .should('be.visible').click()
                    .should('have.class', 'active')
                cy.get(locations.payment_method.order_detail)
                    .should('be.visible')
                cy.get(locations.payment_method.order_header)
                    .should('be.visible')
                    .should('contain', data.payment_method.order_header)
                cy.get(locations.payment_method.order_sub)
                    .should('be.visible')
                    .should('contain', getComp(value))
            })
        checkStepDetails('mobile')
    })

    it('Select Internet Banking Flow', function () {
        cy.get(locations.payment_method.img.internet)
            .should('be.visible').click()
        cy.get(locations.payment_method.atm_title)
            .should('be.visible')
            .should('contain', data.payment_method.atm_title)
        cy.wrap(data.pru_details.whole_life.internet)
            .each((value) => {
                cy.get('[data-cy=internet-' + value + '-bank]')
                    .should('be.visible').click()
                    .should('have.class', 'active')
                cy.get(locations.payment_method.order_detail)
                    .should('be.visible')
                cy.get(locations.payment_method.order_header)
                    .should('be.visible')
                    .should('contain', data.payment_method.order_header)
                cy.get(locations.payment_method.order_sub)
                    .should('be.visible')
                    .should('contain', getComp(value))
                cy.get(locations.payment_method.link)
                    .should('be.visible')
                    .find('a').should('have.attr', 'href')
                    .should('include', getLink(value))
            })
        checkStepDetails('internet')
    })

    it('Go back to policy list page', function () {
        cy.scrollTo(0, 0)
        cy.get(locations.payment_method.nav_bar)
            .invoke('attr', 'class', '')
        clickBack()
        clickBack()
    })

    it('Click to see details healthy', function () {
        cy.get(locations.payment.bubble).contains('healthy')
            .should('be.visible').click()
    })

    it('Click bank account', function () {
        cy.get(locations.payment_method.bank_account)
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .should('include', data.payment_method.img.bank_account)
        cy.get(locations.payment_method.bank_account)
            .click()
    })

    // it('Select ATM Flow', function () {
    //     cy.get(locations.payment_method.img.atm)
    //         .should('be.visible').click()
    //     cy.get(locations.payment_method.atm_title)
    //         .should('be.visible')
    //         .should('contain', data.payment_method.atm_title)
    //     cy.wrap(data.pru_details.healthy.atm)
    //         .each((value, index) => {
    //             cy.get('[data-cy=atm-' + value + '-bank]')
    //                 .should('be.visible').click()
    //                 .should('have.class', 'active')
    //             cy.get(locations.payment_method.order_detail)
    //                 .should('be.visible')
    //             cy.get(locations.payment_method.order_header)
    //                 .should('be.visible')
    //                 .should('contain', data.payment_method.order_header)
    //             cy.get(locations.payment_method.order_sub)
    //                 .should('be.visible')
    //                 .should('contain', getComp(value))
    //             page(index)
    //         })
    //     checkStepDetails('atm')
    // })

    it('Select Mobile Application Flow', function () {
        cy.get(locations.payment_method.img.mobile)
            .should('be.visible').click()
        cy.get(locations.payment_method.atm_title)
            .should('be.visible')
            .should('contain', data.payment_method.atm_title)
        cy.wrap(data.pru_details.healthy.mobile)
            .each((value) => {
                cy.get('[data-cy=mobile-' + value + '-bank]')
                    .should('be.visible').click()
                    .should('have.class', 'active')
                cy.get(locations.payment_method.order_detail)
                    .should('be.visible')
                cy.get(locations.payment_method.order_header)
                    .should('be.visible')
                    .should('contain', data.payment_method.order_header)
                cy.get(locations.payment_method.order_sub)
                    .should('be.visible')
                    .should('contain', getComp(value))
            })
        checkStepDetails('mobile')
    })

    it('Select Internet Banking Flow', function () {
        cy.get(locations.payment_method.img.internet)
            .should('be.visible').click()
        cy.get(locations.payment_method.atm_title)
            .should('be.visible')
            .should('contain', data.payment_method.atm_title)
        cy.wrap(data.pru_details.healthy.internet)
            .each((value) => {
                cy.get('[data-cy=internet-' + value + '-bank]')
                    .should('be.visible').click()
                    .should('have.class', 'active')
                cy.get(locations.payment_method.order_detail)
                    .should('be.visible')
                cy.get(locations.payment_method.order_header)
                    .should('be.visible')
                    .should('contain', data.payment_method.order_header)
                cy.get(locations.payment_method.order_sub)
                    .should('be.visible')
                    .should('contain', getComp(value))
                cy.get(locations.payment_method.link)
                    .should('be.visible')
                    .find('a').should('have.attr', 'href')
                    .should('include', getLink(value))
            })
        checkStepDetails('internet')
    })

    it('Go back to policy list page', function () {
        cy.scrollTo(0, 0)
        cy.get(locations.payment_method.nav_bar)
            .invoke('attr', 'class', '')
        clickBack()
        clickBack()
    })

    it('Click to see details smile retirement', function () {
        cy.get(locations.payment.bubble).contains('smile retirement225')
            .should('be.visible').click()
    })

    it('Click bank account', function () {
        cy.get(locations.payment_method.bank_account)
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .should('include', data.payment_method.img.bank_account)
        cy.get(locations.payment_method.bank_account)
            .click()
    })

    // it('Select ATM Flow', function () {
    //     cy.get(locations.payment_method.img.atm)
    //         .should('be.visible').click()
    //     cy.get(locations.payment_method.atm_title)
    //         .should('be.visible')
    //         .should('contain', data.payment_method.atm_title)
    //     cy.wrap(data.pru_details.healthy.atm)
    //         .each((value, index) => {
    //             cy.get('[data-cy=atm-' + value + '-bank]')
    //                 .should('be.visible').click()
    //                 .should('have.class', 'active')
    //             cy.get(locations.payment_method.order_detail)
    //                 .should('be.visible')
    //             cy.get(locations.payment_method.order_header)
    //                 .should('be.visible')
    //                 .should('contain', data.payment_method.order_header)
    //             cy.get(locations.payment_method.order_sub)
    //                 .should('be.visible')
    //                 .should('contain', getComp(value))
    //             page(index)
    //         })
    //     checkStepDetails('atm')
    // })

    it('Select Mobile Application Flow', function () {
        cy.get(locations.payment_method.img.mobile)
            .should('be.visible').click()
        cy.get(locations.payment_method.atm_title)
            .should('be.visible')
            .should('contain', data.payment_method.atm_title)
        cy.wrap(data.pru_details.healthy.mobile)
            .each((value) => {
                cy.get('[data-cy=mobile-' + value + '-bank]')
                    .should('be.visible').click()
                    .should('have.class', 'active')
                cy.get(locations.payment_method.order_detail)
                    .should('be.visible')
                cy.get(locations.payment_method.order_header)
                    .should('be.visible')
                    .should('contain', data.payment_method.order_header)
                cy.get(locations.payment_method.order_sub)
                    .should('be.visible')
                    .should('contain', getComp(value))
            })
        checkStepDetails('mobile')
    })

    it('Select Internet Banking Flow', function () {
        cy.get(locations.payment_method.img.internet)
            .should('be.visible').click()
        cy.get(locations.payment_method.atm_title)
            .should('be.visible')
            .should('contain', data.payment_method.atm_title)
        cy.wrap(data.pru_details.healthy.internet)
            .each((value) => {
                cy.get('[data-cy=internet-' + value + '-bank]')
                    .should('be.visible').click()
                    .should('have.class', 'active')
                cy.get(locations.payment_method.order_detail)
                    .should('be.visible')
                cy.get(locations.payment_method.order_header)
                    .should('be.visible')
                    .should('contain', data.payment_method.order_header)
                cy.get(locations.payment_method.order_sub)
                    .should('be.visible')
                    .should('contain', getComp(value))
                cy.get(locations.payment_method.link)
                    .should('be.visible')
                    .find('a').should('have.attr', 'href')
                    .should('include', getLink(value))
            })
        checkStepDetails('internet')
    })

    it('Go back to policy list page', function () {
        cy.scrollTo(0, 0)
        cy.get(locations.payment_method.nav_bar)
            .invoke('attr', 'class', '')
        clickBack()
        clickBack()
    })
})

function clickBack() {
    cy.get(locations.payment_method.back)
        .should('be.visible').click()
}

function getComp(bank) {
    var comp = data.payment_method.comp
    var bank_comp = comp[bank]
    return bank_comp
}

function getLink(bank) {
    var link = data.payment_method.link
    var bank_link = link[bank]
    console.log('link: ' + bank_link)
    return bank_link
}

function checkStepDetails(howto) {
    var steps = data.payment_details[howto]
    cy.wrap(steps).each((value, index) => {
        cy.get('[data-cy=step-' + index + ']')
            .should('be.visible')
            .should('contain', value)
        cy.log(value)
    })
}

function page(index) {
    if (index != 0 && index % 3 == 0) {
        cy.get('ul[class="slick-dots"] > li:nth-child(' + index / 3 + ')')
    }
}