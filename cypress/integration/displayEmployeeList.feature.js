import { within } from "@testing-library/react"
/// <reference types="Cypress" />

describe('display list of Employees', () => {
  it('finds host and locates header', () => {
    cy.visit('http://localhost:3001'),
      cy.get('header[name="header"]').should('contain', 'Employee list'),
      cy.get('main[name="main"]').within(() => {
        cy.get('.item').should('have.length', 5)
      })
  })

  it('shows the right details', () => {
    cy.get('.item').within(() => {
      cy.get('.image').should('exist'),
      cy.get('.header').should('contain', 'George Bluth'),
      cy.get('.description').should('contain', 'george.bluth@reqres.in')
    })
  })
})