import React, { useState, useEffect } from 'react'
import TableCell from '../presentational/TableCell'
import Button from '../presentational/Button'
import Form from '../presentational/Form'
import { customerData } from '../../data/customerData'
import { ICustomerData } from '../../types/customerData.types'
import { StyledFeedBackLog } from '../../styles/StyledFeedback'
import Loader from '../utils/LoadingComponent'

const FeedBackLog = () => {
  const [newFeedback, setNewFeedback] = useState<string>('')
  const [feedbackInput, setFeedbackInput] = useState<boolean>(false)
  const [newCustomerInput, setNewCustomerInput] = useState<boolean>(false)
  const [newCustomerName, setNewCustomerName] = useState<string>('')
  const [customers, setCustomers] = useState<ICustomerData[]>(customerData)
  const [customerId, setCustomerId] = useState<number>(0)
  const [isClicked, setIsClicked] = useState<number>()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResult, setSearchResult] = useState<string[]>([])

  const hideInput = () => {
    setNewCustomerName('')
    setNewFeedback('')
    setNewCustomerInput(false)
    setFeedbackInput(false)
  }

  const handleCustomerSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const customersCopy = [...customers]
    const id = customers.length + 1
    const newCustomerDetails = { id, name: newCustomerName, feedback: [] }
    //@ts-ignore
    setCustomers([...customersCopy, newCustomerDetails])
    hideInput()
  }

  const selectedCustomer = customers.filter(cus => cus.id === customerId)[0]

  const handleFeedbackSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // //@ts-ignore
    const copiedCustomers = [...customers]
    selectedCustomer.feedback = [newFeedback, ...selectedCustomer.feedback]
    setCustomers(copiedCustomers)
    hideInput()
  }

  const handleNameChange = (event: { preventDefault: () => void; target: { value: string } }) => {
    event.preventDefault()
    setNewCustomerName(event.target.value)
  }

  const handleFeedbackChange = (event: {
    preventDefault: () => void
    target: { value: string }
  }) => {
    event.preventDefault()
    setNewFeedback(event.target.value)
  }

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      hideInput()
    }
  })

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(event.target.value)
    const singleFeecbackWord = selectedCustomer.feedback.filter(singleFeeback =>
      singleFeeback.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    setSearchResult(singleFeecbackWord)
  }

  useEffect(() => {
    if (searchTerm.length === 0) setSearchResult([])
  }, [searchTerm])

  /**Unlikely in this case because of where out data is coming from
   *  but assuming we were fetching from an api,
   *  we need to wait for data to be available before performing any operations. */
  if (!customerData) return <Loader />

  const regex = new RegExp(`${searchTerm}`, 'gi')
  const createMarkup = (html: string) => {
    return { __html: html }
  }

  return (
    <StyledFeedBackLog>
      <div className="menu-tab">
        <div className="upper-menu">
          <div className="title">Customer Feedback</div>
          <Form
            classes={!selectedCustomer ? 'display-none' : 'search-input'}
            onchange={handleSearchChange}
            type="text"
            value={searchTerm}
            placeHolder="Search feedback"
          />
        </div>

        <div className="lower-menu">
          <div className="lower-menu-tab tab-spacing">
            <span className="customer-text">Customer</span>
            <Button
              classes="customer-button"
              onclick={() => setNewCustomerInput(true)}
              name="add new"
            />
          </div>

          <div className="lower-menu-tab">
            <span className="feedback-text">Feedback</span>
            <Button
              classes={!selectedCustomer ? 'display-none' : 'feedback-button'}
              onclick={() => setFeedbackInput(true)}
              name="add new"
            />
          </div>
        </div>
      </div>
      <div className="feedback-tabs">
        <div className="left-layout layout">
          <Form
            classes={newCustomerInput ? 'add-new' : 'display-none'}
            onchange={handleNameChange}
            onblur={hideInput}
            type="text"
            value={newCustomerName}
            placeHolder="New Customer"
            onsubmit={handleCustomerSubmit}
          />
          <div className="table">
            {customers &&
              customers.map(customerDetails => (
                <TableCell
                  key={customerDetails.id}
                  id={customerDetails.id.toString()}
                  active={customerDetails.id === isClicked}
                  onclick={() => {
                    setIsClicked(customerDetails.id)
                    setCustomerId(customerDetails.id)
                    setSearchResult([])
                    setSearchTerm('')
                  }}
                >
                  {customerDetails.name}
                </TableCell>
              ))}
          </div>
        </div>
        <div className="right-layout layout">
          {customerId ? (
            <>
              <Form
                classes={feedbackInput ? 'add-new' : 'display-none'}
                onchange={handleFeedbackChange}
                onblur={hideInput}
                type="text"
                value={newFeedback}
                placeHolder="New Feedback"
                onsubmit={handleFeedbackSubmit}
              />
              <div className="table">
                {searchResult.length > 0 ? (
                  searchResult.map((userFeedback, index) => (
                    <TableCell
                      dangerouslySetInnerHTML={createMarkup(
                        userFeedback.replace(
                          regex,
                          `<span style="background: #1e90ff; color: #ffff">${searchTerm}</span>`,
                        ),
                      )}
                      key={index}
                    />
                  ))
                ) : searchTerm.length > 0 ? (
                  <div className="center">
                    No result for <span style={{ color: '#000000' }}>{searchTerm}</span>
                  </div>
                ) : (
                  selectedCustomer.feedback.map((userFeedback, index) => (
                    <TableCell key={index}>{userFeedback}</TableCell>
                  ))
                )}
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
