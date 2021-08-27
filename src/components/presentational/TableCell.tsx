import React from 'react'
import styled from 'styled-components'

interface ITableCellProps {
  children: any
  onclick?: (event: any) => void
  id?: string
  active?: boolean
}

const StyledTableCell = styled.div`
  padding: 5px;
  text-align: start;
  border-bottom: 1px solid #000000;
`

const TableCell = ({ children, onclick, id, active }: ITableCellProps) => {
  return (
    <StyledTableCell
      className={active ? 'bg-blue customer-cell' : 'customer-cell'}
      onClick={onclick}
      id={id}
      data-testid="table-cell-id"
    >
      {children}
    </StyledTableCell>
  )
}

export default TableCell
