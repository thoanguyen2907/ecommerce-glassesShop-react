import styled from 'styled-components'
//----------------button-------------------
export const ButtonNormal = styled.button`
    background-color: #5584AC;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold; 
    font-size: 18px;
    border: none;
  appearance: none;
  transition: all 0.5s;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #22577E;
  }
  &:disabled {
    cursor: no-drop;
  }
`
