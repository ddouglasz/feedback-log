import React from 'react'
import styled from 'styled-components'
import Table from '../presentational/Table'
import Button from '../presentational/Button'
import { customerData } from '../../api/customerData'

const StyledFeedBackLog = styled.div`
  width: 80%;
  min-height: 60vh;
  border: 1px solid black;
  margin: 20px auto;

  .menu-tab {
    width: 100%;
    height: 20vh;
    border-bottom: 1px solid black;
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
    height: 100vh;
    border-right: 1px solid black;
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

  .titile {
    padding: 20px;
  }
`

const FeedBackLog = () => {
  return (
    <StyledFeedBackLog>
      <div className="menu-tab">
        <div className="title">Customer Feedback</div>
      </div>
      <div className="feedback-tabs">
        <div className="left-layout layout">
          <span className="customer-header">
            <span className="span-text-spacing">Customer</span>
            <Button classes="customer-button" name="add new" />
          </span>
          <Table tableType="customer" feedbackData={customerData} />
        </div>
        <div className="right-layout layout">
          <span className="feedback-header">
            <span className="span-text-spacing">Feedback</span>
            <Button classes="feedback-button" name="add new" />
          </span>
          <Table tableType="feedback" feedbackData={customerData} />
        </div>
      </div>
    </StyledFeedBackLog>
  )
}

export default FeedBackLog
