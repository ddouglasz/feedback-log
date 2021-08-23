import React, { useState } from 'react'
import styled from 'styled-components'
import Table from '../presentational/Table'
import Button from '../presentational/Button'
import { customerData } from '../../api/customerData'

const StyledFeedBackLog = styled.div`
  width: 80%;
  border: 1px solid #000000;
  margin: 20px auto;

  .menu-tab {
    width: 100%;
    height: 20vh;
    border-bottom: 1px solid #000000;
    text-align: start;
  }

  .feedback-tabs {
    display: flex;
    position: relative;
    justify-content: start;
  }

  .layout {
    width: 50%;
  }

  .left-layout {
    min-height: 50vh;
    border-right: 1px solid #000000;
  }

  .customer-header {
    position: absolute;
    top: -40px;
    left: 5%;
  }

  .feedback-header {
    position: absolute;
    top: -40px;
    right: 5%;
  }

  .span-text-spacing {
    margin-right: 150px;
  }

  .title {
    padding: 20px;
    font-weight: 900;
  }

  .center {
    margin: auto;
    width: 40%;
    padding: 40% 0;
    color: #808080;
  }

  .display-none {
    display: none;
  }

  .add-new {
    width: -webkit-fill-available;
    padding: 5px;
  }

  .add-new:focus {
    outline: none;
  }

  .add-new::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #1e90ff;
  }

  .add-new:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #1e90ff;
  }

  .add-new::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #1e90ff;
  }
`

const FeedBackLog = () => {
  const [feedback, setFeedback] = useState([])
  const [newCustomerInput, setNewCustomerInput] = useState('display-none')
  const [newFeedbackInput, setNewFeedbackInput] = useState('display-none')
  const [newCustomerName, setNewCustomerName] = useState('')
  const [customers, setCustomers] = useState(customerData)

  const hideInput = () => {
    setNewCustomerName('')
    setNewCustomerInput('display-none')
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const customersCopy = [...customers]
    const id = customers.length + 1
    const newCustomerDetails = { customer: { id, name: newCustomerName, feedback: [] } }
    //@ts-ignore
    setCustomers([...customersCopy, newCustomerDetails])
    hideInput()
  }

  const handleChange = (event: { preventDefault: () => void; target: { value: any } }) => {
    event.preventDefault()
    setNewCustomerName(event.target.value)
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
              onChange={handleChange}
              onBlur={hideInput}
            />
          </form>
          <Table tableType="customer" customerData={customers} />
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
                  placeholder="New Customer"
                  className={`${newCustomerInput} add-new`}
                  type="text"
                  value={newCustomerName}
                  onChange={handleChange}
                  onBlur={hideInput}
                />
              </form>
              <Table tableType="feedback" feedback={feedback} />
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
