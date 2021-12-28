import styled from 'styled-components'

export const Dropdown = styled.select`
  width: 50%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background-color: #22577E;
  border: 2px solid #22577E;
  color: #F6F2D4;
  padding: 10px;
  padding-right: 38px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* Adding transition effect */
  transition: color 0.3s ease, background-color 0.3s ease,
    border-bottom-color 0.3s ease;
  &:hover {
    color: #5584AC;
    background-color: #F6F2D4;
    border-bottom-color: #22577E;
  }
`
