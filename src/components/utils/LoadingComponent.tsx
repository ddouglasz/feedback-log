import React from 'react'
import Image from '../../images/loading_spinner.gif'

import styled from 'styled-components'

const StyledLoader = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding: 200px;
`

const Loader = () => {
  return (
    <StyledLoader>
      <img alt="loader" src={Image} className="loader-component" />
    </StyledLoader>
  )
}

export default Loader
