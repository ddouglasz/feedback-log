import styled from 'styled-components'

export const StyledFeedBackLog = styled.div`
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

  .customer-cell {
    /* background-color: #1e90ff; */
  }

  .customer-cell:hover {
    cursor: pointer;
  }

  .bg-blue {
    background-color: #1e90ff;
    color: #FFFF;
  }

  .table {
    height: 60%;
    width: 100%;
  }
`