class CarritoPage {
 
    getProductsInCart() {
        return cy.get('#mycart')
    }
}

export default CarritoPage