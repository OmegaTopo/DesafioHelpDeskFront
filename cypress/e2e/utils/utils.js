export default class Utils{


    click(element){
        cy.get(element).click()
    }
   
    preencherInput(element, text){
        cy.get(element).type(text)
    }

    validarTexto(element, text){
        cy.get(element).should('contain', text)
    }

    validarPresenca(element){
        cy.get(element).should('exist')
    }

}