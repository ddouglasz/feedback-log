import React from 'react'
import styled from 'styled-components'

import { ICustomerData } from '../../types/customerData.types'
interface TableProps {
  feedbackData: ICustomerData[]
  tableType: string
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
    border-bottom: 1px solid black;
  }
`

const Table = ({ feedbackData, tableType }: TableProps) => {
  return tableType === 'customer' ? (
    <StyledTable className="table">
      {feedbackData.map(customerDetails => (
        <div className="customer-name table-cell" key={customerDetails.customer.id}>
          {customerDetails.customer.name}
        </div>
      ))}
    </StyledTable>
  ) : (
    <StyledTable className="table">
      {feedbackData.map(customerDetails => (
        <div key={customerDetails.customer.id}>
          {customerDetails.customer.feedback.map((userFeedback, index) => (
            <div className="customer-feedback table-cell" key={index}>
              {userFeedback}
            </div>
          ))}
        </div>
      ))}
    </StyledTable>
  )
}

export default Table
