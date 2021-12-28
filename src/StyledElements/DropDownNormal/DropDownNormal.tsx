import styled from 'styled-components'

export const DropDownNormal = styled.select`
  width: 50%;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  border: 2px solid #22577E;
  color: #22577E;
  padding: 7px;
  padding-right: 30px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* Adding transition effect */
  transition: color 0.3s ease, background-color 0.3s ease,
    border-bottom-color 0.3s ease;
  &:hover {
    color: #5584AC;
    border-bottom-color: #22577E;
  }
`
