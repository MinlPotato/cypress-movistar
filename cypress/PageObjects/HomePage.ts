class HomePage {

    getProductList() {
        return cy.get(".products > ol > li");
    }

    getProductInList(productName: string) {
        return this.getProductList().contains(productName);
    }

    filterByPrice(priceIndex: number) {
        cy.get("body").then($body => {
            if ($body.find('.block-subtitle').is(':visible')) {
                cy.get('.block-subtitle').as('filterBtn')
                cy.get('@filterBtn').click()

                cy.get('.price > .filter-title').then($button => {
                    if (!$button.attr('aria-expanded')) {
                        cy.get('.price > .filter-title').click()
                    }
                })
                
                cy.get('.price > .filter-content > .items > li').as('selections')             
                cy.get('@selections').eq(priceIndex).click()
                cy.wait(5000)
            } else {
                cy.get('#filters-items > .price').as('filterPrice')

                cy.get('.price > .filter-title').then($button => {
                    if (!$button.attr('aria-expanded')) {
                        cy.get('.price > .filter-title').click()
                    }
                })

                cy.get('@filterPrice').find('.items > li').as('selections')
                cy.get('@selections').eq(priceIndex).click()
                cy.wait(5000)
            }
        })
    }

}

export default HomePage