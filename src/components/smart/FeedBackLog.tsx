import React, { useState } from 'react'
import TableCell from '../presentational/Table'
import Button from '../presentational/Button'
import { customerData } from '../../api/customerData'
import { ICustomerData } from '../../types/customerData.types'
import { StyledFeedBackLog } from '../../styles/StyledFeedback'

const FeedBackLog = () => {
  const [feedback, setFeedback] = useState([])
  const [newFeedback, setNewFeedback] = useState('')
  const [newFeedbackInput, setNewFeedbackInput] = useState('display-none')
  const [newCustomerInput, setNewCustomerInput] = useState('display-none')
  const [newCustomerName, setNewCustomerName] = useState('')
  const [customers, setCustomers] = useState(customerData)
  const [cellColor, setCellColor] = useState('')

  const hideInput = () => {
    setNewCustomerName('')
    setNewCustomerInput('display-none')
    setNewFeedbackInput('display-none')
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const customersCopy = [...customers]
    const id = customers.length + 1
    const newCustomerDetails = { id, name: newCustomerName, feedback: [] }
    //@ts-ignore
    setCustomers([...customersCopy, newCustomerDetails])
    hideInput()
  }

  const handleNameChange = (event: { preventDefault: () => void; target: { value: any } }) => {
    event.preventDefault()
    setNewCustomerName(event.target.value)
  }

  const handleFeedbackChange = (event: { preventDefault: () => void; target: { value: any } }) => {
    event.preventDefault()
    setNewFeedback(event.target.value)
  }

  const getCustomerFeedback = (id: number) => {
    const [selectedCustomer]: ICustomerData[] | any = customers.filter(user => user.id === id)
    setFeedback(selectedCustomer.feedback)
  }

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      hideInput()
    }
  })

  return (
    <StyledFeedBackLog>
      <div className="menu-tab">
        <div className="title">Customer Feedback</div>
      </div>
      <div className="feedback-tabs">
        <div className="left-layout layout">
          <span className="customer-header">
            <span className="span-text-spacing">Customer</span>
            <Button
              classes="customer-button"
              onclick={() => setNewCustomerInput('')}
              name="add new"
            />
          </span>
          <form onSubmit={handleSubmit} action="">
            <input
              placeholder="New Customer"
              className={`${newCustomerInput} add-new`}
              type="text"
              value={newCustomerName}
              onChange={handleNameChange}
              onBlur={hideInput}
            />
          </form>
          <div className="table">
            {customers &&
              customers.map(customerDetails => (
                <TableCell
                  classes="customer-cell"
                  key={customerDetails.id}
                  onclick={() => getCustomerFeedback(customerDetails.id)}
                >
                  {customerDetails.name}
                </TableCell>
              ))}
          </div>
        </div>
        <div className="right-layout layout">
          <span className="feedback-header">
            <span className="span-text-spacing">Feedback</span>
            <Button
              classes={`${feedback.length === 0 ? 'display-none' : ''} feedback-button`}
              onclick={() => setNewFeedbackInput('')}
              name="add new"
            />
          </span>
          {feedback.length !== 0 ? (
            <>
              <form onSubmit={handleSubmit} action="">
                <input
                  placeholder="New Feedback"
                  className={`${newFeedbackInput} add-new`}
                  type="text"
                  value={newFeedback}
                  onChange={handleFeedbackChange}
                  onBlur={hideInput}
                />
              </form>
              <div className="table">
                {feedback &&
                  feedback.map((userFeedback, index) => (
                    <TableCell key={index}>{userFeedback}</TableCell>
                  ))}
              </div>
            </>
          ) : (
            <div className="center">Please select a customer</div>
          )}
        </div>
      </div>
    </StyledFeedBackLog>
  )
}

export default FeedBackLog
