import React from 'react'
import PageFormat from './PageFormat'

describe('<PageFormat />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PageFormat />)
  })
})