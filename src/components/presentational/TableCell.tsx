import React from 'react'
import styled from 'styled-components'

interface ITableCellProps {
  children: any
  onclick?: (event: any) => void
  // classes?: string
  id?: string
  active?: any
}

const StyledTableCell = styled.div`
  padding: 5px;
  text-align: start;
  border-bottom: 1px solid #000000;

  .customer-cell:hover {
    cursor: pointer;
  }

  .bg-blue {
    background-color: #1e90ff;
    color: #ffff;
  }
`

const TableCell = ({ children, onclick, id, active }: ITableCellProps) => {
  return (
    <StyledTableCell
      className={active ? 'bg-blue customer-cell' : 'customer-cell'}
      onClick={onclick}
      id={id}
    >
      {children}
    </StyledTableCell>
  )
}

export default TableCell
