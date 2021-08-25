import React from 'react'
import styled from 'styled-components'

interface ITableCellProps {
  children: any
  onclick?: () => void
  classes?: string
}

const StyledTableCell = styled.div`
  padding: 5px;
  text-align: start;
  border-bottom: 1px solid #000000;
`

const TableCell = ({ children, onclick, classes }: ITableCellProps) => {
  return (
    <StyledTableCell className={classes} onClick={onclick}>
      {children}
    </StyledTableCell>
  )
}

export default TableCell
