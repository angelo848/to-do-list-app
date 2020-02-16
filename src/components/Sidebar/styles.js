import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  margin-left: 0;
  color: #f0f8ff;
  background-color: #5f9ea0;
  padding-top: 30px;
  transition: width 180ms ease;
  &.closed {
    width: 50px;
  }
  svg {
    cursor: pointer;
    color: #f0f8ff;
    margin-left: 18px;
  }
`

export const List = styled.ul`
  margin-top: 30px;
  list-style: none;
`
