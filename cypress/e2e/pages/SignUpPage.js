import Utils from "../utils/utils"
import { faker } from '@faker-js/faker'


const utils = new Utils

export default class SignupPage {
    
    
    url = 'http://127.0.0.1:5500/view/signUp.html'
    textoCadastro = 'h1'
    campoNome = '[for="name"] > input'
    campoEmail = '[for="email"] > input'
    campoSenha = '#password'
    btnCadastrar = 'button'
    btnLogar = 'a'
    
    
    navegar(){
        cy.visit(this.url)
    }

    clicarBtnCadastrar(){
        utils.click(this.btnCadastrar)
    }

    clicarBtnLogar(){
        utils.click(this.btnLogar)
    }

    preenchercampoNome(){ 
        utils.preencherInput(this.campoNome, faker.person.firstName())
    }

    preenchercampoNomecomNumeros(){
        utils.preencherInput(this.campoNome, 111111)
    }

    preenchercampoEmail(){
        utils.preencherInput(this.campoEmail, faker.internet.email())
    }

    preenchercampoEmailSemArroba(){
        utils.preencherInput(this.campoEmail, faker.person.firstName())
    }

    preenchercampoSenha(){
        utils.preencherInput(this.campoSenha, 'aguasdemarco')
    }

    validarTextoCadastro(){
        utils.validarTexto(this.textoCadastro,'Cadastro')
    }

}