import 'cypress-file-upload';
 Cypress.on('uncaught:exception', (err, runnable) => {
     return false
})
describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-dev.ml', () => {
        cy.visit('https://eodb-dev.ml/app')
    })
    it('Applicant Login', () => {
        cy.get(':nth-child(6) > a > .ant-btn').click({ delay: 100 })
        cy.get('#login-email').type('antoniobasasjr@gmail.com' , { delay: 100 })
        cy.get('#login-password').type('1234567890' , { delay: 100 })
        cy.get('#login-btn').click()
        cy.pause()

    })
    it('Applicant Apply for New Police Clearance', () => {
        cy.get('.ant-menu :nth-child(3)').click({ delay: 100 })
        cy.get(':nth-child(2) > .item-buttons').click({ delay: 100 })
        cy.get('.ant-col-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('li[style="user-select: none;"]').contains('Adoption Purpose').click();
        cy.get('input[placeholder="Select date"]').click()
        cy.get('.ant-calendar-input').type('1982-05-13')
        cy.get(':nth-child(6) > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click()
        cy.get(':nth-child(5) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Male').click()
        cy.get(':nth-child(5) > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Single').click()
        cy.get(':nth-child(6) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('Iligan City')
        cy.get(':nth-child(7) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('5')
        cy.get(':nth-child(7) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('6')
        cy.get(':nth-child(7) > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('A+').click()
        cy.get(':nth-child(8) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Light').click()
        cy.get(':nth-child(9) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Primary').click()
        cy.get(':nth-child(9) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('Doctor')
        cy.get('.ant-row-flex-space-around > .ant-col-xs-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('CC1234567890')
        cy.get('.ant-btn').wait(5000).click()
        //Page2
        cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('li[class="ant-select-dropdown-menu-item"]').contains('Putol').click().get('.ant-btn-primary').click()
        cy.get(':nth-child(5) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('042111111')
        cy.get(':nth-child(5) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('09121212121').get('.ant-btn-primary').click()
    })
    it('Applicant Upload Required Documents', () => {
        const fileName = 'police-clearance.json';
        cy.fixture(fileName).then(fileContent => {
        cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })
        cy.get('.ant-btn-group > :nth-child(1)').click()
        cy.get(':nth-child(17) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click()
        cy.get('.ant-btn').click().wait(5000)
        cy.get('button[class="ant-btn ant-btn-primary"]').click().wait(5000)
        //cy.get('button[class="ant-btn ant-btn-primary"]').click()
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.pause()
        
    })

    })
    it('Payment', () => {
    cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control').type('4111111111111111' , { delay: 100 })
    cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control').type('Antonio Basas' , { delay: 100 })
    cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control').type('12/22' , { delay: 100 })
    cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('123' , { delay: 100 })
    cy.get('form > :nth-child(1) > :nth-child(1)').click().wait(5000)
    cy.get('.ant-card-body > .ant-btn').click().wait(5000)
    cy.get('.ant-drawer-close').click(1000)
    cy.pause()
    cy.get('.ant-menu > :nth-child(3)').wait(10000).click()
    //cy.get('.ant-tabs-tab-active').wait(10000).click()
    //cy.get('.ant-table-fixed-left > .ant-table-header > .ant-table-fixed > .ant-table-thead > tr > th').click().wait(5000)
   
   // cy.get('class="ant-table-row ant-table-row-level-0"').click().wait(5000)
    //cy.get('[data-row-key="0"] > :nth-child(5)').click().wait(5000)
   
    // cy.get('[key="status"]').click()
    // cy.get('.ant-table-body-inner > .ant-table-fixed > .ant-table-tbody > [data-row-key="0"] > td').click()
    // cy.get('[key="action"]').click()
    // cy.get('[data-row-key="0"] > :nth-child(5)').click()
    // cy.get('style="overflow: scroll"').click().scrollTo()
    

    //cy.get('.ant-drawer-body > .ant-tabs > .ant-tabs-bar > .ant-tabs-nav-container > .ant-tabs-nav-wrap > .ant-tabs-nav-scroll > .ant-tabs-nav > :nth-child(1)').wait(3000).click()
    //cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)').wait(3000).click()
    // cy.get('.ant-collapse-header').click()
    }) 
    it('checking' , () => {

 
})


})