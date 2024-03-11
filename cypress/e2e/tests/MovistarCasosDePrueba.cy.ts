import CarritoPage from '../../PageObjects/CarritoPage';
import HomePage from '../../PageObjects/HomePage';
import ProductPage from '../../PageObjects/ProductPage';


describe('movistar casos de prueba', () => { 
    beforeEach(() => {
        cy.visit('https://tiendaonline.movistar.com.ar')
        cy.viewport(550, 750)
    })

    it('CP001 - Validar cuotas en compra de equipo -Cuotas.3 -Equipo.A14', () => {
        const homePage      = new HomePage()
        const productPage   = new ProductPage()

        homePage.getProductList().contains('A14').as('product')
        cy.get('@product').click()
        productPage.Disponibility().screenshot()
        productPage.Disponibility().should('contain.text', '*Sujeto a disponiblidad')
        productPage.Cuotas().screenshot()
        productPage.Cuotas().should('contain.text', '3 cuotas sin interés')
    });


    it('CP002 - Aplicar filtro de equipos - Memoria Interna.128GB -Precio Entre 200Ky300K', () => {

        const homePage = new HomePage();

        homePage.filterBy('price', 0)
        homePage.filterBy('price', 2)

        homePage.getProductList().then(($list) => {
            const listLength = $list.length
            homePage.getProductList().should('have.length.above', 0)
            homePage.getTotalProducts().should('contain', listLength).screenshot()
        })
    });

    it('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', () => {

        const homePage      = new HomePage()
        const productPage   = new ProductPage()

        homePage.getProductList().eq(2).click()
        productPage.checkCardCuotas('Credicoop', 'Visa').screenshot().should('not.contain', '60 cuotas')
    });

    it('CP004 - Comprobar el correcto funcionamiento del Carrito de compras', () => {
        const homePage      = new HomePage()
        const productPage   = new ProductPage()
        const carritoPage   = new CarritoPage()

        homePage.getProductList().eq(0).as('product')
        cy.get('@product').screenshot()
        cy.get('@product').click()
        
        productPage.Buy()
        carritoPage.getProductsInCart().as('cart')
        cy.get('@cart').should('be.visible')
        cy.get('@cart').should('have.length.above', 0)
        cy.get('@cart').screenshot()

    });

 })