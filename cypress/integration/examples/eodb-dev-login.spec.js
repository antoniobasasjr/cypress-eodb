describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-dev.ml', () => {
        cy.visit('https://eodb-dev.ml/app')
        cy.log()
    })
    it('Applicant Login', () => {
        cy.get(':nth-child(6) > a > .ant-btn').click({ delay: 100 })
        cy.get('#login-email').type('antoniobasasjr@gmail.com' , { delay: 100 })
        cy.get('#login-password').type('1234567890' , { delay: 100 })
        cy.get('#login-btn').click()
        cy.log()
    })

})