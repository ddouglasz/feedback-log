import React from 'react'
import { ICustomerData } from '../../types/customerData.types'

interface TableProps {
  data: ICustomerData[]
  tableType: string
  classes: string
}

const Table = ({ data, tableType, classes }: TableProps) => {
  return tableType === 'customer' ? (
    <div className={classes}>
      {data.map((customerDetails, index) => (
        <div key={index}>{customerDetails.customer.name}</div>
      ))}
    </div>
  ) : (
    <div className={classes}>
      {data.map((customerDetails, index) => (
        <div key={index}>
          {customerDetails.customer.feedback.map((userFeedback, index) => (
            <div key={index}>{userFeedback}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Table
