import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const loginPage = new LoginPage;
const signupPage = new SignUpPage;

describe('Cenários de testes do fluxo de registro', () => {

    it('Registro com sucesso', () => {
        loginPage.navegar()
        loginPage.clicarBtnRegistrar()
        cy.intercept('POST','/register').as('requestRegister')
        signupPage.preenchercampoNome()
        signupPage.preenchercampoEmail()
        signupPage.preenchercampoSenha()
        signupPage.clicarBtnCadastrar()
        cy.wait('@requestRegister').then((interception) => {
            expect(interception.request.method).to.eq('POST')
            expect(interception.response.statusCode).to.eq(201)
        })
    })

    it('Registro com nome em números', () => {
        loginPage.navegar()
        loginPage.clicarBtnRegistrar()
        cy.intercept('POST','/register').as('requestRegister')
        signupPage.preenchercampoNomecomNumeros()
        signupPage.preenchercampoEmail()
        signupPage.preenchercampoSenha()
        signupPage.clicarBtnCadastrar()
        cy.wait('@requestRegister').then((interception) => {
            expect(interception.request.method).to.eq('POST')
            expect(interception.response.statusCode).to.eq(201)
        })
    })
    it('Registro com email sem arroba', () => {
        loginPage.navegar()
        loginPage.clicarBtnRegistrar()
        cy.intercept('POST','/register').as('requestRegister')
        signupPage.preenchercampoNome()
        signupPage.preenchercampoEmailSemArroba()
        signupPage.preenchercampoSenha()
        signupPage.clicarBtnCadastrar()
        cy.wait('@requestRegister').then((interception) => {
            expect(interception.request.method).to.eq('POST')
            expect(interception.response.statusCode).to.eq(201)
        })
    })
    it('Retornar para a pagina de login', () => {
        loginPage.navegar()
        loginPage.clicarBtnRegistrar()
        signupPage.clicarBtnLogar()
    })
})