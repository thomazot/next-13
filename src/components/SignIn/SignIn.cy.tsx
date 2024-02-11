import React from 'react'
import { SignIn } from './SignIn'

describe('<Widget />', () => {
  it('renders', () => {
    cy.mount(<SignIn />)
  })
  
  it('should username render', () => {
    cy.mount(<SignIn />)
    const username = cy.findByRole('textbox', { name: /username/g})
    username.type("admin")
  })
  
  it('should password render', () => {
    cy.mount(<SignIn />)
    const username = cy.findByLabelText( /password/g )
    username.type("password")
  })
})