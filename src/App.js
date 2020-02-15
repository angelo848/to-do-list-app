import React from 'react'

import TodoList from './components/TodoList'
import GlobalStyle from './styles/global'

import { Title } from './styles/App'

function App() {
  return (
    <div className="App">
      <Title>Tarefas</Title>
      <TodoList />
      <GlobalStyle />
    </div>
  )
}

export default App
