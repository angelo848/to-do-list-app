import styled from 'styled-components'

export const Form = styled.form`
  margin-bottom: 25px;
`

export const List = styled.ul`
  list-style: none;
`

export const Input = styled.input`
  padding: 10px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #bababa;
  margin-right: 20px;
`

export const Button = styled.button`
  padding: 7px;
  border-radius: 5px;
  border: 2px solid #2d98ad;
  background-color: #2d98ad;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out;
  &:hover {
    background-color: #6bbf59;
    border-color: #6bbf59;
  }
`
