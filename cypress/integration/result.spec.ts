/// <reference types="cypress" />
import '../support'
import { GetCalculatorResultDefaultTestIds } from '../types'

const getCalculatorResultDefaultTestIds: GetCalculatorResultDefaultTestIds = [
  'wallMeasurementsInput',
  'nextStepButton',
  'doorsNumber',
  'windowsNumber',
  'resultInfoHeader',
  'recommendedPaintCan'
]

describe('Validate Result calculation process', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('The result must be correct according to information passed while filling in the data', () => {
    it('Since all wall measurement values are equal to 3, the total liters of paint required should be 7.2 and the recommended paint cans should be 3.6L:x2', () => {
      cy.getCalculatorResult(
        ...getCalculatorResultDefaultTestIds,
        '3',
        '7.2',
        [{ liters: '3.6', amount: '2' }]
      )
    })

    it('Since all wall measurement value are equal to 3.5, the total paint liters required should be 9.8 and recommended paint cans should be 3.6L:x2, 2.5L:x1, 0.5L:x1', () => {
      cy.getCalculatorResult(
        ...getCalculatorResultDefaultTestIds,
        '3.5',
        '9.8',
        [
          { liters: '3.6', amount: '2' },
          { liters: '2.5', amount: '1' },
          { liters: '0.5', amount: '1' }
        ]
      )
    })

    it('Since all wall measurement value are equal to 2.4, the total paint liters required should be 4.6 and recommended paint cans should be 3.6L:x1, 0.5L:x2', () => {
      cy.getCalculatorResult(
        ...getCalculatorResultDefaultTestIds,
        '2.4',
        '4.6',
        [
          { liters: '3.6', amount: '1' },
          { liters: '0.5', amount: '2' }
        ]
      )
    })

    it('Since all wall measurement value are equal to 2.2, the total paint liters required should be 3.9 and recommended paint cans should be 3.6L:x1, 0.5L:x1', () => {
      cy.getCalculatorResult(
        ...getCalculatorResultDefaultTestIds,
        '2.2',
        '3.9',
        [
          { liters: '3.6', amount: '1' },
          { liters: '0.5', amount: '1' }
        ]
      )
    })
  })

  describe('Result step buttons should do the correct action', () => {
    it('Reset button should reset the value of walls measuremnts, doors and windows numbers', () => {
      cy.getCalculatorResult(
        ...getCalculatorResultDefaultTestIds,
        '3',
        '7.2',
        [{ liters: '3.6', amount: '2' }]
      )

      cy.get("[data-testid='resetButton']").click()

      cy.get("[data-testid='wallMeasurementsInput']")
      cy.get("[data-testid='nextStepButton']").as('nextStepButton')
      cy.get("[data-testid='inputErrorMessage']").as('inputErrorMessage')

      cy.get("[data-testid='wallMeasurementsInput']").each(($wallMeasurementInput) => {
        cy.get('@nextStepButton').should('be.disabled')
        cy.get('@inputErrorMessage').should('be.visible')

        cy.wrap($wallMeasurementInput)
          .as('wallMeasurementInput')
          .invoke('val')
          .should('eq', '')

        cy.inputType('wallMeasurementInput', '3.5')
      })

      cy.get('@nextStepButton').should('not.be.disabled')
      cy.get('@nextStepButton').click()

      cy.get("[data-testid='doorsAndWindowsNumbers']")
      cy.get("[data-testid='doorsNumber']").invoke('val').should('eq', '0')
      cy.get("[data-testid='windowsNumber']").invoke('val').should('eq', '0')
    })

    it('Prev step button shoul go to windows and doors step', () => {
      cy.getCalculatorResult(
        ...getCalculatorResultDefaultTestIds,
        '3',
        '7.2',
        [{ liters: '3.6', amount: '2' }]
      )
      
      cy.get("[data-testid='prevButton']").click()
      cy.get("[data-testid='doorsAndWindowsNumbers']")
    }) 
  })
})