import React from 'react'
import { Widget } from './Widget'

describe('<Widget />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Widget />)
  })
})