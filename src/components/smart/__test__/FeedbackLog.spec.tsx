import React from 'react'
import { render, screen } from '@testing-library/react'
import FeedbackLog from '../FeedBackLog'
import jest from 'jest-mock'
import { customerData } from '../../../api/customerData'

describe('Feedback Component', () => {
  test('should render all customer data passed to it', () => {
    render(<FeedbackLog />)

    for (const customer of customerData) {
      expect(screen.getByText(customer.name)).toBeDefined()
    }
  })
})
