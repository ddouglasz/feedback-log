import React from 'react'
import Table from '../presentational/Table'
import { customerData } from '../../api/customerData'

const FeedBackLog = () => {
  return (
    <div>
      <Table tableType="customer" classes="table" data={customerData} />
      <Table tableType="feedback" classes="table" data={customerData} />
    </div>
  )
}

export default FeedBackLog
