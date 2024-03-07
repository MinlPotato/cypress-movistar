class ProductPage {
    

    Disponibility() {
        cy.get('#tab_card > .buttons').as('buyButton') 
        return cy.get('@buyButton').find('span')
    }

    Cuotas() {
        return cy.get('.price-content > .financing')    
    }

    checkCardCuotas(bank: string, card: string) {
        cy.get('#open-installments-modal').click()
        cy.get('#bankCardSelector').as('bankCardForm')

        cy.get('@bankCardForm').find('input[id=inputbank]').as('inputBank')
        cy.get('@inputBank').click()
        cy.get('@inputBank').type(bank)
        cy.get('@inputBank').click()

        cy.get('#selectBank > ul > li').contains(bank).click()
        
        cy.get('@bankCardForm').find('input[id=inputCard]').as('inputBank')
        cy.get('@inputBank').click()
        cy.get('#selectCardByBank > ul > li').as('cardList')
        cy.get('@cardList').contains(card).click()

        cy.get('#calculate_btn > button').as('calculateBtn')
        cy.get('@calculateBtn').click()  

        return cy.get('#bodyTable')
    }
}


export default ProductPage