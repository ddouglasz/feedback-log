import React from 'react'
import { render } from '@testing-library/react'
import Form from '../Form'
import jest from 'jest-mock'

const props = {
  type: '',
  value: '',
  classes: '',
  placeHolder: '',
  onblur: jest.fn(),
  onchange: jest.fn(),
  onsubmit: jest.fn(),
}

describe('Form', () => {
  test('renders form element', () => {
    const { getAllByTestId } = render(<Form {...props} />)
    expect(getAllByTestId('input-form').length).toEqual(1)
  })

  test('renders input element', () => {
    const { getAllByTestId } = render(<Form {...props} />)
    expect(getAllByTestId('input-field').length).toEqual(1)
  })
})
