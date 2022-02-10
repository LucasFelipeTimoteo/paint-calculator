/// <reference types="cypress" />
import '../support'

describe('Calculator windows and doors constraints', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get("[data-testid='nextStepButton']").as('nextStepButton')
    cy.get("[data-testid='inputErrorMessage']").as('inputErrorMessage')

    cy.get("[data-testid='wallMeasurementsInput']").each(($wallMeasurementInput) => {
      cy.wrap($wallMeasurementInput).type('3').invoke('val').should('eq', '3')
    })

    cy.get('@nextStepButton').click()
    cy.get("[data-testid='doorsAndWindowsNumbers']")
      .as('doorsAndWindowsNumbers')
      .click()

    cy.get('[data-testid="prevButton"]').as('prevButton')
    cy.get("[data-testid='doorsNumber']").as('doorsNumber')
    cy.get("[data-testid='windowsNumber']").as('windowsNumber')
  })

  // UNHAPPY PATH

  describe('Not allowed actions constraints (Unhappy path)', () => {
    it('Should get error when some input is ampty', () => {
      cy.get('@doorsNumber').clear().invoke('val').should('eq', '')
      cy.get('@windowsNumber').clear().invoke('val').should('eq', '')

      cy.inputType('doorsNumber', '0')
      cy.get('@inputErrorMessage')
      cy.get('@doorsNumber').clear()


      cy.inputType('windowsNumber', '0')
      cy.get('@inputErrorMessage')
      cy.get('@windowsNumber').clear()
    })

    it('Should get error when some windows or doors total area is bigger than 50% of walls total area', () => {
      // all walls measurements are 3, so the total area is 36
      // total area of windows and doors maximum value should be 18

      cy.get('@windowsNumber').clear().inputType('windowsNumber', '10000')
      cy.get('@inputErrorMessage')
      cy.get('@nextStepButton').should('be.disabled')

      cy.get('@doorsNumber').clear().inputType('doorsNumber', '10000')
      cy.get('@inputErrorMessage')
      cy.get('@nextStepButton').should('be.disabled')

      cy.get('@windowsNumber').clear()
      cy.get('@inputErrorMessage')
      cy.get('@nextStepButton').should('be.disabled')
    })

    it('Should get error when some windows or doors number total area is bigger than 50% of walls total area', () => {
      cy.get('@windowsNumber').clear().inputType('windowsNumber', '10000')
      cy.get('@inputErrorMessage')
      cy.get('@nextStepButton').should('be.disabled')

      cy.get('@doorsNumber').clear().inputType('doorsNumber', '10000')
      cy.get('@inputErrorMessage')
      cy.get('@nextStepButton').should('be.disabled')

      cy.get('@windowsNumber').clear()
      cy.get('@inputErrorMessage')
      cy.get('@nextStepButton').should('be.disabled')
    })

    it('Do not allow letters on walls measurements inputs', () => {
      cy.get('@doorsNumber')
        .clear()
        .inputType('doorsNumber', 'qwertyuioasdfghjkl', '')

      cy.get('@windowsNumber')
        .clear()
        .inputType('windowsNumber', 'qwertyuioasdfghjkl', '')

      cy.get('@nextStepButton').should('be.disabled')
    })

    it('Do not allow decimal numbers on walls measurements inputs', () => {
      cy.get('@doorsNumber')
        .clear()
        .inputType('doorsNumber', '2.32', '232')

      cy.get('@windowsNumber')
        .clear()
        .inputType('windowsNumber', '2.32', '232')
    })
  })

  // HAPPY PATH

  describe('Allowed actions contraints (Happy path)', () => {
    it('Should have 0 as default input windowsNumber value and should be valid', () => {
      cy.get('@windowsNumber').invoke('val').should('eq', '0')
      cy.get('@nextStepButton').should('not.be.disabled')
    })

    it('Prev step button should go to walls measurements step', () => {
      cy.get('@prevButton')
        .as('prevButton')
        .should('not.be.disabled')
        .click()

      cy.get("[data-testid='wallMeasurementsInput']")
    })

    it('Next step button should go to results step', () => {
      cy.get('@nextStepButton')
        .should('not.be.disabled')
        .click()

      cy.get("[data-testid='resultInfo']")
    })
  })
})