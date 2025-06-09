import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage";

const loginPage = new LoginPage;
const userPage = new UserPage;

describe('Cenários de fluxo de usuário', () => {

    it('Adicionar usuário', () => {
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        userPage.clicarBtnAdicionar()
        userPage.preencherCampoNome()
        userPage.preencherCampoEmail()
        userPage.clicarBtnModal()
        loginPage.clicarBtnLogout()
    })

    it('Adicionar usuario em duplicidade', () => {
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        cy.intercept('POST','/users').as('createuser')
        userPage.clicarBtnAdicionar()
        userPage.preencherCampoNome()
        userPage.preencherCampoEmail()
        userPage.clicarBtnModal()
        userPage.clicarBtnAdicionar()
        userPage.preencherCampoNome()
        userPage.preencherCampoEmail()
        userPage.clicarBtnModal()
        cy.wait('@createuser').then((interception) => {
            expect(interception.request.method).to.eq('POST')
            expect(interception.response.statusCode).to.eq(409)
        })
        loginPage.clicarBtnLogout()
    })
    it('Editar usuario',() => {
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        userPage.clicarBtnEditar()
        userPage.preencherCampoNome()
        userPage.preencherCampoEmail()
        userPage.clicarBtnModal()
        loginPage.clicarBtnLogout()
    })
    it('Deletar usuario',() => {
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        userPage.clicarBtnAdicionar()
        userPage.preencherCampoNome()
        userPage.preencherCampoEmail()
        userPage.clicarBtnModal()
        userPage.clicarBtnDeletar()
        loginPage.clicarBtnLogout()
    })
})