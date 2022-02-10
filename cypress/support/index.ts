// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { IRecommendedPaintCan } from '../types';
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to type and validate type actions on input element
       * @example cy.inputType('wallMeasurementInput', '3')
       */
      inputType(
        testIdAlias: string,
        inputValue: string,
        expectedInputValue?: string
      ): Chainable<Element>
    }

    interface Chainable {
      /**
       * Custom command to do automatically all calculation process by passing all steps, filling the field, validating each one and validating the calculation result
       * @example cy.getCalculatorResult(
       *  'wallMeasurementsInput',
       *  'nextStepButton',
       *  'doorsNumber',
       *  'windowsNumber',
       *  'resultInfoHeader',
       *  'recommendedPaintCan',
       *  '3',
       *  '7.2',
       *  [{ liters: '3.6', amount: '2' }]
       * )
       */
      getCalculatorResult(
        wallsMeasurementsName: string,
        nextStepButtonName: string,
        doorsNumberName: string,
        windowsNumberName: string,
        resultInfoHeaderName: string,
        recommendedPaintCanName: string,
        wallsMeasurementsInputs: string,
        totalPaintLiters: string,
        recommendedPaintCans: IRecommendedPaintCan[]
      ): Chainable<Element>
    }
  }
}

// Alternatively you can use CommonJS syntax:
// require('./commands')
