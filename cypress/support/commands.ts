// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('inputType', (testIdAlias, inputValue, expectedInputValue) => {
  cy.get(`@${testIdAlias}`).invoke('val').should('eq', '')
  cy.get(`@${testIdAlias}`)
    .type(inputValue)
    .invoke('val')
    .should(
      'eq',
      typeof expectedInputValue === 'string' ? expectedInputValue : inputValue
    )
})

Cypress.Commands.add('getCalculatorResult', (
  wallsMeasurementsName,
  nextStepButtonName,
  doorsNumberName,
  windowsNumberName,
  resultInfoHeaderName,
  recommendedPaintCanName,
  wallsMeasurementsInputs,
  totalPaintLiters,
  recommendedPaintCans
) => {
  cy.get(`[data-testid=${wallsMeasurementsName}`).each(($wallMeasurementInput) => {
    cy.wrap($wallMeasurementInput).as('wallMeasurementInput')
    cy.inputType('wallMeasurementInput', wallsMeasurementsInputs)
  })
  cy.get(`[data-testid=${nextStepButtonName}`).should('not.be.disabled').click()

  cy.get(`[data-testid=${doorsNumberName}`).invoke('val').should('eq', '0')
  cy.get(`[data-testid=${windowsNumberName}`).invoke('val').should('eq', '0')

  cy.get(`[data-testid=${nextStepButtonName}`).should('not.be.disabled').click()

  cy.get(`[data-testid=${resultInfoHeaderName}`).should('contain.text', `${totalPaintLiters}L`)
  
  cy.get(`[data-testid=${recommendedPaintCanName}`)
    .should('have.length', recommendedPaintCans.length)
    .each(($currentpaintCan, index) => {
      cy.wrap($currentpaintCan)
        .should('contain.text', `${recommendedPaintCans[index].liters}L`)
        .should('contain.text', `: ${recommendedPaintCans[index].amount}`)
    })
})
