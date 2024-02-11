import React from 'react'
import { Widget } from './Widget'

describe('<Widget />', () => {
  it('renders', () => {
    cy.mount(<Widget />)
  })
})