import Utils from "../utils/utils"

const utils = new Utils

export default class LoginPage {
    url          = 'http://127.0.0.1:5500/view/login.html'
    campoEmail   = '#user'
    campoSenha   = 'input[type=password]'
    btnLogar     = 'button'
    btnRegistrar = 'a'
    textoLogar   = 'h1'
    btnLogout    = 'header > button'


    navegar(){
        cy.visit(this.url)
    }

    clicarBtnLogar(){
        utils.click(this.btnLogar)
    }

    clicarBtnRegistrar(){
        utils.click(this.btnRegistrar)
    }

    clicarBtnLogout(){
        utils.click(this.btnLogout)
    }
    clicarBtnLogoutSeTiver(){
        utils.clickSeTiver(this.btnLogout)
    }

    preencherCampoEmail(){
        utils.preencherInput(this.campoEmail, "greg@nunes.com")
    }

    preencherCampoEmailInvalido(){
        utils.preencherInput(this.campoEmail, "joao@email.com")
    }

    preencherCampoSenha(){
        utils.preencherInput(this.campoSenha, "1234")
    }

    preencherCampoSenhaInvalida(){
        utils.preencherInput(this.campoSenha, "1111")
    }

    validarTextoLogar(){
        utils.validarTexto(this.textoLogar,'Logar')
    }

}