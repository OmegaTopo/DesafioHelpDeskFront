import Utils from "../utils/utils"

const utils = new Utils

export default class UserPage {

    url          = 'http://127.0.0.1:5500/view/user.html'
    btnAdicionar = '#addButton'
    btnEditar = '[onclick*="triggerModalEdit"]'
    btnDeletar = 'button[onclick*="deleteCard"]'
    btnModal = '#modal-button'
    campoNome = '#name'
    campoEmail = '#email'



    navegar(){
        cy.visit(this.url)
    }
    clicarBtnAdicionar(){
        utils.click(this.btnAdicionar)
    }
    clicarBtnEditar(){
        utils.clickPrimeiro(this.btnEditar)
    }
    clicarBtnDeletar(){
        utils.clickPrimeiro(this.btnDeletar)
    }
    clicarBtnModal(){
        utils.click(this.btnModal)
    }
    preencherCampoNome(){
        utils.preencherInput(this.campoNome, "Antonio")
    }
    preencherCampoEmail(){
        utils.preencherInput(this.campoEmail, "tom.jobim@email.com")
    }


}