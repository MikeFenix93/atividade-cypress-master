describe('Teste Cypress', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

cy.contains('Ir para o Cadastro').click()

cy.get('input[name="user_name"]').type('MIKETEST')

cy.get('input[name="user_email"]').type('mike@teste.com')

cy.get('input[placeholder="senha"]').type('12345')

cy.get('input[placeholder="Confirme a senha"]').type('12345')  // Corrigido para '12345'

cy.get('[onclick="handleRegister()"]').click()  // Substitua ".class-ou-id-do-botao" pelo seletor correto

cy.contains('Você está logado!').should('be.visible')

cy.wait(4000)
    

  })

  it('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.wait(1000)

    cy.get('input[name="user_email"]').type('cypress@teste.com')

    cy.get('input[placeholder="senha"]').type('cypress')

    cy.get('[onclick="handleLogin()"]').click()

    cy.wait(1000)

    cy.contains('Você está logado!').should('be.visible')



  })
})