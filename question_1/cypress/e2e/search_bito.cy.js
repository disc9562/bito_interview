describe('Test search BitoEX', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com/')
    })

    it('Check BitoEX information can be searched', () => {
        cy.get('.gLFyf').type('BitoPro')
        cy.get('input[type=submit]').contains('Google').click()
        cy.contains('https://www.bitopro.com')
        cy.contains('BitoPro 台灣幣託交易所')
      })
})