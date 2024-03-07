import HomePage from '../../PageObjects/HomePage';
import ProductPage from '../../PageObjects/ProductPage';


describe('movistar casos de prueba', () => { 
    beforeEach(() => {
        cy.visit('https://tiendaonline.movistar.com.ar')
        cy.viewport(550, 750)
    })

    it('CP001 - Validar cuotas en compra de equipo -Cuotas.3 -Equipo.A14', () => {
        const homePage = new HomePage();
        const productPage = new ProductPage

        homePage.getProductList().contains('A14').as('product')
        cy.get('@product').click()
        productPage.Disponibility().should('contain.text', '*Sujeto a disponiblidad').screenshot()
        productPage.Cuotas().should('contain.text', '3 cuotas sin interés').screenshot()
    });


    it.only('CP002 - Aplicar filtro de equipos - Memoria Interna.128GB -Precio Entre 200Ky300K', () => {

        const homePage = new HomePage();

        homePage.filterByPrice(0)
        homePage.filterByPrice(2)

        homePage.getProductList().then(($list) => {
            const listLength = $list.length           
            cy.get('.total-products').should('contain', listLength).screenshot()
        })
    });

    it('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', () => {

        const homePage = new HomePage();
        const productPage = new ProductPage

        homePage.getProductList().eq(2).click()
        productPage.checkCardCuotas('Credicoop', 'Visa').should('not.contain', '60 cuotas').screenshot()
    });

    it('CP004 - ', () => {
        
    });

 })