import styled from 'styled-components'

export const Todo = styled.li`
  width: 600px;
  display: flex;
  background-color: ${props => (props.status ? '#6bbf59' : props.color)};
  padding: 15px;
  color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  text-decoration: ${props => (props.status ? 'line-through' : 'normal')};
  svg {
    cursor: pointer;
  }
  & > svg {
    margin-right: 30px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  div svg {
    color: #ef5d60;
  }
`
