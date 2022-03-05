/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('assistanceRolManagment app is running!')
  })
})
