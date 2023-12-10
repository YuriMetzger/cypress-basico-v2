/// <reference types="Cypress" />

describe('Central de atendimento TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html');
  });
    it('Verifica título da aplicação', () => {
      cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
    });
    it('preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('#firstName')
          .type('Yuri')
        cy.get('#lastName')
          .type('Santiago Metzger')
        cy.get('#email')
          .type('yuri@email.com.br')
        cy.get('#phone')
          .type('47996462000')
        cy.get('#open-text-area')
          .type('me fazer aprender cypress avançado me fazer aprender cypress avançado me fazer aprender cypress avançado me fazer aprender cypress avançado me fazer aprender cypress avançado me fazer aprender cypress avançado me fazer aprender cypress avançado', {delay:0})
        cy.get('.button')
          .click()
        cy.get('.success')
          .should('be.visible')
    });
    it('exibe mensagem de erro se subemeter o formulário com um email com formatação inválida', () => {
      cy.get('#firstName')
      .type('Yuri')
      cy.get('#lastName')
        .type('Santiago Metzger')
      cy.get('#email')
        .type('yuri@emailbr')
      cy.get('#phone')
        .type('47996462000')
      cy.get('#open-text-area')
        .type('me fazer aprender cypress avançado', {delay:0})
      cy.get('.button')
        .click()
      cy.get('.error')
        .should('be.visible')
    });
    it('Valida campo de telefone', () => {
      cy.get('#phone')
        .type('aa@@@~[')
        .should('be.empty')
      cy.get('#phone')
        .type('132456789')
        .should('have.value','132456789')
    });
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do fomrulário', () => {
        
    });
});