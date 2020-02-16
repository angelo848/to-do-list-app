import React from 'react'

import TodoList from './components/TodoList'
import Sidebar from './components/Sidebar'
import GlobalStyle from './styles/global'

import { Title } from './styles/App'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar className="menu" />
      <div className="todo">
        <Title>Tarefas</Title>
        <TodoList />
      </div>
    </div>
  )
}

export default App
