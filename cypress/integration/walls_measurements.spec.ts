/// <reference types="cypress" />
import '../support'

describe('Calculator walls measurements constraints', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get("[data-testid='nextStepButton']").as('nextStepButton')
    cy.get("[data-testid='inputErrorMessage']").as('inputErrorMessage')
    cy.get("[data-testid='wallMeasurementsInput']").as('wallMeasurementsInput')
  })

  // UNHAPPY PATH

  describe('Not allowed actions constraints (Unhappy path)', () => {
    it('Should get error while all inputs have no defined values', () => {
      cy.get("@wallMeasurementsInput").each(($wallMeasurementInput) => {
        cy.get('@nextStepButton').should('be.disabled')
        cy.get('@inputErrorMessage').should('be.visible')

        cy.wrap($wallMeasurementInput).as('wallMeasurementInput')
        cy.inputType('wallMeasurementInput', '3')

        cy.get('@nextStepButton').should('be.disabled')
        cy.get('@wallMeasurementInput').clear()
        cy.get('@nextStepButton').should('be.disabled')
      })
    })

    it('Should get error while exist some height value less than 30cm greater than doors height', () => {
      cy.get("@wallMeasurementsInput").each(($wallMeasurementInput) => {
        cy.get('@nextStepButton').should('be.disabled')
        cy.get('@inputErrorMessage').should('be.visible')

        cy.wrap($wallMeasurementInput).as('wallMeasurementInput')
        cy.inputType('wallMeasurementInput', '2')

        cy.get('@nextStepButton').should('be.disabled')
      })
    })

    it('Should get error while exist some wall with area greater than 15', () => {
      cy.get("@wallMeasurementsInput").each(($wallMeasurementInput) => {
        cy.get('@nextStepButton').should('be.disabled')
        cy.get('@inputErrorMessage').should('be.visible')

        cy.wrap($wallMeasurementInput).as('wallMeasurementInput')
        cy.inputType('wallMeasurementInput', '5')

        cy.get('@nextStepButton').should('be.disabled')
      })
    })

    it('Should get error while all measurements follow the constraints except by the last one', () => {
      cy.get("@wallMeasurementsInput").each(($wallMeasurementInput) => {
        cy.get('@nextStepButton').should('be.disabled')
        cy.get('@inputErrorMessage').should('be.visible')

        cy.wrap($wallMeasurementInput).as('wallMeasurementInput')
        cy.inputType('wallMeasurementInput', '3')
      })

      cy.get("@wallMeasurementsInput")
        .last()
        .clear()
        .type('10')
        .invoke('val')
        .should('eq', '10')

      cy.get('@nextStepButton').should('be.disabled')
    })

    it('Do not allow letters on walls measurements inputs', () => {
      cy.get("@wallMeasurementsInput").each(($wallMeasurementInput) => {
        cy.get('@nextStepButton').should('be.disabled')
        cy.get('@inputErrorMessage').should('be.visible')

        cy.wrap($wallMeasurementInput).as('wallMeasurementInput')
        cy.inputType('wallMeasurementInput', 'qwertyuiopasdfghjklç~', '')
      })

      cy.get('@nextStepButton').should('be.disabled')
    })
  })

  //HAPPY PATH

  describe('Allowed actions constraints (Happy path)', () => {

    it('Able next step button when all measurements follow the rules', () => {
      cy.get("[data-testid='doorsAndWindowsNumbers']")
        .as('doorsAndWindowsNumbers')
        .should('not.exist')

      cy.get("@wallMeasurementsInput").each(($wallMeasurementInput) => {
        cy.get('@nextStepButton').should('be.disabled')
        cy.get('@inputErrorMessage').should('be.visible')

        cy.wrap($wallMeasurementInput).as('wallMeasurementInput')
        cy.inputType('wallMeasurementInput', '3.5')
      })

      cy.get('@nextStepButton').should('not.be.disabled')
      cy.get('@nextStepButton').click()
      cy.get("@doorsAndWindowsNumbers")
    })
  })
})