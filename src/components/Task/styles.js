import styled from 'styled-components'

export const Todo = styled.li`
  width: 600px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.status ? '#6bbf59' : props.color)};
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-decoration: ${props => (props.status ? 'line-through' : 'normal')};
  input {
    color: #fff;
    font-size: 18px;
    height: 34px;
    background-color: inherit;
    border: none;
    border-color: #fffffc;
    width: 80%;
    cursor: pointer;
    transition: 0.25s border-bottom ease-in-out;
  }
  input:focus {
    border-bottom: 2px solid #fffffc;
    cursor: text;
  }
  svg {
    cursor: pointer;
  }
  & > svg {
    margin-right: 30px;
  }
  div.wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  div svg:first-child {
    color: #fff;
    margin-right: 15px;
  }
  div svg:nth-child(2) {
    color: #ffad05;
    margin-right: 15px;
  }
  div svg:last-child {
    color: #ef5d60;
  }
`
