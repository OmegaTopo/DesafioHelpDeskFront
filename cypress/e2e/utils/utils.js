export default class Utils{


    click(element){
        cy.get(element).click()
    }

    clickPrimeiro(element){
        cy.get(element).first().click()
    }

    clickSeTiver(element){
        cy.get(element).then(($btn) => {
            if ($btn.length > 0) {
                cy.wrap($btn).first().click()
            } else {
                cy.log('Nenhum botão de deletar encontrado')
            }
        })
    }

    selecionar(element, child){
        cy.get(element).select(child)
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