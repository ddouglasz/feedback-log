import React from 'react'
import styled from 'styled-components'

import { ICustomerData } from '../../types/customerData.types'
interface TableProps {
  customerData?: ICustomerData[]
  tableType: string
  feedback?: string[]
}

const StyledTable = styled.div`
  .table {
    height: 60%;
    width: 50%;
    padding: 0 10px;
  }

  .table-cell {
    padding: 5px;
    text-align: start;
    border-bottom: 1px solid #000000;
  }
`

const Table = ({ customerData, tableType, feedback }: TableProps) => {
  return tableType === 'customer' ? (
    <StyledTable className="table">
      {customerData &&
        customerData.map(customerDetails => (
          <div className="customer-name table-cell" key={customerDetails.customer.id}>
            {customerDetails.customer.name}
          </div>
        ))}
    </StyledTable>
  ) : (
    <StyledTable className="table">
      {feedback &&
        feedback.map((userFeedback, index) => (
          <div className="customer-feedback table-cell" key={index}>
            {userFeedback}
          </div>
        ))}
    </StyledTable>
  )
}

export default Table
