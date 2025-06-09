import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;

describe('Cenários de fluxo de login', () => {
    it('Login realizado com sucesso', () => {
        loginPage.navegar()
        loginPage.validarTextoLogar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        loginPage.clicarBtnLogout()
    })

    it('Login utilizando email inválido', () => {
        loginPage.navegar()
        cy.intercept('POST','/login').as('requestLogin')
        loginPage.preencherCampoEmailInvalido()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        cy.wait('@requestLogin').then((interception) => {
            expect(interception.request.method).to.eq('POST')
            expect(interception.response.statusCode).to.eq(400)
        })
    })

    it('Login utilizando senha inválida', () => {
        loginPage.navegar()
        cy.intercept('POST','/login').as('requestLogin')
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenhaInvalida()
        loginPage.clicarBtnLogar()
        cy.wait('@requestLogin').then((interception) => {
            expect(interception.request.method).to.eq('POST')
        })
        loginPage.clicarBtnLogout()
    })
    
})