import styled from 'styled-components'
//----------------button-------------------
export const ButtonWhite = styled.button`
    background-color: #fff;
    padding: 5px 10px;
    color: #5584AC;
    font-weight: bold; 
    font-size: 18px;
    border: none;
  appearance: none;
  transition: all 0.5s;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: #22577E;
    background-color: #fff;
  }
  &:disabled {
    cursor: no-drop;
  }
`
