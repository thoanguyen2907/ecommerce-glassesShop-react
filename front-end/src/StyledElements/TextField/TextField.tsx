import React from 'react'

import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid #22577E;
  min-height: 40px;
  height: 35px;
  font-size: 17px;
  width: 40%;
  display: initial;
  margin: 20px 0;
  padding: 3px 25px 3px 25px;
`

export const Label = styled.span`
  color: #22577E;
  width: auto;
`

export const TextField = ({ ...props }) => {
  return (
    <span>
      <Input {...props} />
    </span>
  )
}
