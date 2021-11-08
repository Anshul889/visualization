import styled from 'styled-components'

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 54px;
  letter-spacing: 0.5px;
  line-height: 48px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: block;
  border: none;
  margin: 20px 0;
  background: #2573d5;
  color: white;
  border-radius: 10px;
  &:hover {
    background-color: #1e5ca9;
    color: white;
    border: none;
  }
`

export const SecondaryButton = styled(Button)`
  background-color: #e6e6e6;
  color: #29304d;
  &:hover {
    background-color: #cccccc;
    color: #29304d; 
  }
`
