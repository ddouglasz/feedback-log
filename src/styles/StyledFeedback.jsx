import styled from 'styled-components'

export const StyledFeedBackLog = styled.div`
  width: 80%;
  border: 1px solid #000000;
  margin: 20px auto;

  .menu-tab {
    border-bottom: 1px solid #000000;
    text-align: start;
    position: relative;
    padding: 20px;
  }

  .upper-menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 500px) {
    .upper-menu {
      flex-direction: column;
      text-align: center;
    }
  }

  .lower-menu {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .lower-menu-tab{
    display: flex;
    justify-content: space-between;
    width: 50%;
    @media (max-width: 500px) { 
      flex-direction: column;
    }
  }

  .tab-spacing {
    margin-right: 20px
  }

  .title {
    font-weight: 900;
  }

  .search-input {
    padding: 5px;
    @media (max-width: 500px) { 
      margin-top: 10px;
    }
  }


  .search-input:focus {
    outline: none;
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

  .center {
    margin: auto;
    width: 40%;
    padding: 40% 0;
    color: #808080;
  }

  .display-none {
    display: none;
  }

  @media(max-width: 500px) {
    .feedback-button, .customer-button {
      padding: 0;
      width: 70px;
      margin-top: 5px;
  }
  }
  

  .add-new {
    width: -webkit-fill-available;
    padding: 10px 20px;
    border: none;
    border-bottom: 1px solid;
    font-size: inherit;
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
    overflow-x: scroll;
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