import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header component', () => {
  test('renders Header component wiith text', () => {
    render(<Header />)
    const linkElement = screen.getByText(/Fedback Log/i)
    expect(linkElement).toBeInTheDocument()
  })
})
