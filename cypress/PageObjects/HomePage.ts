class HomePage {

    getProductList() {
        return cy.get(".products > ol > li")
    }

    getTotalProducts() {
        return cy.get('.total-products')
    }

    filterBy(filterType: 'price' | 'camera' | 'screen' | 'brand', index: number) {
        cy.get("body").then($body => {
            if ($body.find('.block-subtitle').is(':visible')) {
                cy.get('.block-subtitle').click()
            }

            cy.get(`.${filterType} > .filter-content`).then(($content) =>{
                if ($content.is(':hidden')) {
                    cy.get(`.${filterType} > .filter-title`).click()
                }
            })
            
            cy.get(`.${filterType} > .filter-content > .items > li`).as('selections')
            cy.get('@selections').eq(index).click()
            cy.wait(5000)
        })
    }

}

export default HomePage