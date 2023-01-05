import React from 'react'
import ProductTemplate from './ProductTemplate'

describe('<ProductTemplate />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductTemplate />)
  })
})