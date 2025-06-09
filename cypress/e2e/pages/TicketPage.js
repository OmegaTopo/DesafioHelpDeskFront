import Utils from "../utils/utils"

const utils = new Utils

export default class TicketPage {

    url            = 'http://127.0.0.1:5500/view/ticket.html'
    btnTickets     = '[href="./ticket.html"]'
    btnStatus      = 'select'
    btnAdicionar   = '.addButton'
    btnEditar      = '[onclick="editCard(4)"]'
    btnDeletar     = '[onclick="deleteCard(3)"]'
    btnCriar       = '.input-container > button'
    btnFechaJanela = '.modal form span'
    modal          = '.modal'
    campoEmail     = '[for="name"] > input'
    campoDescricao = '[for="description"] > input'
    textoStatus    = '.lower'

    navegar(){
        cy.visit(this.url)
    }
    clicarBtnStatusClosed(){
        utils.selecionar(this.btnStatus, "Closed")
    }
    clicarBtnStatusOpen(){
        utils.selecionar(this.btnStatus, "Open")
    }
    clicarBtnTickets(){
        utils.click(this.btnTickets)
    }
    clicarBtnAdicionar(){
        utils.click(this.btnAdicionar)
    }
    clicarBtnEditar(){
        utils.click(this.btnEditar)
    }
    clicarBtnDeletar(){
        utils.click(this.btnDeletar)
    }
    clicarBtnCriar(){
        utils.click(this.btnCriar)
    }
    clicarBtnFecharModal(){
        cy.get(this.modal).should('be.visible')
        utils.click(this.btnFechaJanela)
    }
    preencherCampoEmail(){
        utils.preencherInput(this.campoEmail, "greg@nunes.com")
    }
    preencherCampoDescricao(){
        utils.preencherInput(this.campoDescricao, "Estou sem energia")
    }

    validarTextoStatusClosed(){
        utils.validarTexto(this.textoStatus,'Closed')
    }
    validarTextoStatusOpen(){
        utils.validarTexto(this.textoStatus,'Open')
    }

}





