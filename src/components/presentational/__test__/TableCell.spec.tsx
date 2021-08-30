import React from 'react'
import { render } from '@testing-library/react'
import TableCell from '../TableCell'
import jest from 'jest-mock'

const props = {
  children: [],
  onclick: jest.fn(),
  id: '',
  active: false,
}

describe('TableCell component', () => {
  test('renders Table cell wrapper element', () => {
    const { getAllByTestId } = render(<TableCell {...props} />)
    expect(getAllByTestId('table-cell-id').length).toEqual(1)
  })
})
