import 'cypress-file-upload';
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-dev.ml', () => {
        cy.visit('https://eodb-dev.ml/app')
        
    })
    it('click Login()', () => {
        cy.get(':nth-child(6) > a > .ant-btn').click({ delay: 100 })    
    })
    it('input Username()', () => {
        cy.get('#login-email').type('antoniobasasjr@gmail.com' , { delay: 100 })
        .should('have.value' , 'antoniobasasjr@gmail.com' , { delay: 100 })
        
    })
    it('input Password()', () => {
        cy.get('#login-password').type('1234567890' , { delay: 100 })
        .should('have.value' , '1234567890' , { delay: 100 })
    })
    it('click Submit()', () => {
        cy.get('#login-btn').click()
    })

    it('click Business Licensing Office', () => {
        cy.get('.ant-menu :nth-child(3)').click({ delay: 100 })
      
    })
    it('click Police Clearance', () => {
        cy.get(':nth-child(2) > .item-buttons').click({ delay: 100 })
    })

    it('- - PAGE 1 - -', () => {
    })

    it('- - PAUSE - -', () => {
        // cy.pause()
    })

    it('input Purpose of Application', () => {
        cy.get('.ant-col-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('li[style="user-select: none;"]').contains('Adoption Purpose').click()
    })

    it('input Middle Name', () => {
        cy.get(':nth-child(4) > .ant-col-sm-6 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Arado').click()
          .should('have.value' , 'Arado' , { delay: 100 })
    })

    it('input Prefix Name', () => {
        cy.get(':nth-child(4) > .ant-col-sm-3 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Jr.').click()
        .should('have.value' , 'Jr.' , { delay: 100 })
    })

    it('input Birthday', () => {
        cy.get('input[placeholder="Select date"]').click()
        cy.get('.ant-calendar-input').type('1982-05-13')
    })

    it('input Gender', () => {
       cy.get(':nth-child(6) > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click()
       cy.get(':nth-child(5) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
       cy.get('li[style="user-select: none;"]').contains('Male').click()
    })

    it('input Civil Status', () => {
       cy.get(':nth-child(5) > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
       cy.get('li[style="user-select: none;"]').contains('Single').click()
    })

    it('input Birthday', () => {
       cy.get(':nth-child(6) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('Iligan City')
         .should('have.value' , 'Iligan City' , { delay: 100 })
    })

    it('input If Other Country', () => {
        cy.get(':nth-child(6) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('none').click()
        .should('have.value' , 'none' , { delay: 100 })
    })
  
    it('input ICR No. (if alien)', () => {
        cy.get(':nth-child(6) > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('none').click()
        .should('have.value' , 'none' , { delay: 100 })
    })
   
    it('input Height(cm)', () => {
        cy.get(':nth-child(7) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('167')
        .should('have.value' , '167' , { delay: 100 })
    })
    
    it('input Weight(kg)', () => {
        cy.get(':nth-child(7) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('70')
        .should('have.value' , '70' , { delay: 100 })
    })
       
    it('input Blood Type', () => {
        cy.get(':nth-child(7) > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('A+').click()
    })   
    
    it('input Identification Marks', () => {
        cy.get(':nth-child(8) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Mole').click()
        .should('have.value' , 'Mole' , { delay: 100 })
    })

    it('input Complexion', () => {
        cy.get(':nth-child(8) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Light').click()
    })
    
    it('input Educational Attainment', () => {
        cy.get(':nth-child(9) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Primary').click()
    })

    it('input Occupation', () => {
        cy.get(':nth-child(9) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('Technician')
    })
    
    it('input Community Tax Certificate Number', () => {
        cy.get('.ant-row-flex-space-around > .ant-col-xs-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('CC1234567890')
          .should('have.value' , 'CC1234567890' , { delay: 100 })
    })  
    
    it('click Next Button', () => {
        cy.get('.ant-btn').wait(5000).click()
    })
   
    it('- - PAGE 2 - -', () => {
    })

    it('input House/Bldg No' , () => {
        cy.get('.ant-col-sm-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('PH12').click()
        .should('have.value' , 'PH12' , { delay: 100 })
    })

    it('input Unit No' , () => {
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('99').click()
        .should('have.value' , '99' , { delay: 100 })
    })
    
    it('input Building Name', () => {
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('A').click()
          .should('have.value' , 'A' , { delay: 100 })
    })

    it('input Street', () => {
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('PASCAM II').click()
    .should('have.value' , 'PASCAM II' , { delay: 100 })
    })

    it('input Subdivision', () => {
    cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Wellington Place').click()
    })

    it('select Barangay', () => {
        cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('li[class="ant-select-dropdown-menu-item"]').contains('Putol').click().get('.ant-btn-primary').click()
    })

    it('input Telephone No', () => {
        cy.get(':nth-child(5) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('042111111')
          .should('have.value' , '042111111' , { delay: 100 })
    })

    it('input Mobile No', () => {
        cy.get(':nth-child(5) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click().type('09121212121')
          .should('have.value' , '09121212121' , { delay: 100 })
    })
    it('click Next Button', () => {
        cy.get('.ant-btn-primary').click()
    })

    it('upload Required Document', () => {
        const fileName = 'police-clearance.json';
        cy.fixture(fileName).then(fileContent => {
        cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })
        cy.get('.ant-btn-group > :nth-child(1)').click()
        cy.get(':nth-child(17) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click()
        cy.get('.ant-btn').click().wait(5000)
        cy.get('button[class="ant-btn ant-btn-primary"]').click().wait(5000)
        // cy.get('button[class="ant-btn ant-btn-primary"]').click()
        cy.get('.ant-btn-primary').click().wait(5000)
        // cy.pause()
    })

    it('Payment', () => {
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('4111111111111111' , { delay: 100 })
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control').type('Antonio Basas' , { delay: 100 })
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control').type('12/22' , { delay: 100 })
        cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('123' , { delay: 100 })
        cy.get('form > :nth-child(1) > :nth-child(1)').click().wait(5000)
        cy.get('.ant-card-body > .ant-btn').click().wait(5000)
        cy.get('.ant-drawer-close').click(1000)
        // cy.pause()
        cy.get('.ant-menu > :nth-child(3)').wait(10000).click()

    })
})
})


