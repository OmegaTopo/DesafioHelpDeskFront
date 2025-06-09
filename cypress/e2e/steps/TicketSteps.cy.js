import LoginPage from "../pages/LoginPage";
import TicketPage from "../pages/TicketPage";

const loginPage = new LoginPage;
const ticketPage = new TicketPage;

describe('Cenários do fluxo de tickets', () => {
    
    it('Criação de ticket com sucesso', () =>{
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        ticketPage.clicarBtnTickets()
        cy.intercept('POST','/tickets').as('adicionaticket')
        ticketPage.clicarBtnAdicionar()
        ticketPage.preencherCampoEmail()
        ticketPage.preencherCampoDescricao()
        ticketPage.clicarBtnCriar()
        cy.wait('@adicionaticket').then((interception) => {
            expect(interception.request.method).to.eq('POST')
            expect(interception.response.statusCode).to.eq(404)
        })      
        ticketPage.clicarBtnFecharModal()
        loginPage.clicarBtnLogout()
    })

    it('Acessar tickets com status CLOSED', () =>{
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        ticketPage.clicarBtnTickets()
        ticketPage.clicarBtnStatusClosed()
        cy.wait(500)
        ticketPage.validarTextoStatusClosed()
        loginPage.clicarBtnLogout()
    })
    it('Acessar tickets com status OPEN', () =>{
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        ticketPage.clicarBtnTickets()
        ticketPage.clicarBtnStatusOpen()
        cy.wait(500)
        ticketPage.validarTextoStatusOpen()
        loginPage.clicarBtnLogout()
    })
    
    it('Editar ticket', () =>{
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        ticketPage.clicarBtnTickets()
        ticketPage.clicarBtnEditar()
        loginPage.clicarBtnLogout()
    })

    it('Deletar ticket', () =>{
        loginPage.navegar()
        loginPage.preencherCampoEmail()
        loginPage.preencherCampoSenha()
        loginPage.clicarBtnLogar()
        ticketPage.clicarBtnTickets()
        ticketPage.clicarBtnDeletar()
        loginPage.clicarBtnLogout()
    })
})