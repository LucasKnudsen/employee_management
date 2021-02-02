import { within } from "@testing-library/react"
/// <reference types="Cypress" />

describe('display list of Employees', () => {
  it('finds host and locates header', () => {
    cy.visit('http://localhost:3001'),
      cy.get('section[name="header"]').should('contain', 'Employee list'),
      cy.get('section[name="main"]').within(() => {
        cy.get('li').should('have.length', 5)
      })
  })
})