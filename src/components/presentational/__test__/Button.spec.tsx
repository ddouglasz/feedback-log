import React from 'react'
import { render } from '@testing-library/react'
import Button from '../Button'
import jest from 'jest-mock'

const props = {
  classes: '',
  name: '',
  onclick: jest.fn(),
}

test('renders button component', () => {
  const { getAllByTestId } = render(<Button {...props} />)
  expect(getAllByTestId('input-button').length).toEqual(1)
})
