import styled from 'styled-components'
export const Table = styled.table`
  color: ${(props) => props.theme.color};
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-spacing: 2px;
  border-color: ${(props) => props.theme.bgColor}; ;
`
export const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border: 1px solid #22577E ;
`
export const Tfoot = styled.tfoot`
  display: table-footer-group;
  vertical-align: middle;
  border: 1px solid #22577E ;
`

export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`
export const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border: 1px solid #22577E;
`
export const Td = styled.td`
  padding: 0.75rem;
  vertical-align: middle;
  border: 1px solid #22577E;
  border-right: none;
  color:  #22577E;
  border-bottom: 0;
`

export const Th = styled.th`
  background-color: #F6F2D4;
  color: #22577E;
  vertical-align: middle;
  text-align: inherit;
  border-top: 1px solid #22577E;
  padding: 0.75rem;
  vertical-align: middle;
  border-bottom: 1px solid #22577E ;
`
