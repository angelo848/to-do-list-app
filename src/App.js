import React, { useState } from 'react'

import TodoList from './components/TodoList'
import Sidebar from './components/Sidebar'
import GlobalStyle from './styles/global'

import { Title } from './styles/App'

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (value, color) => {
    setTasks([
      ...tasks,
      {
        name: value,
        color,
        status: false,
        favored: false
      }
    ])
  }

  const handleUpdateTask = (value, index) => {
    let updatedTask = tasks[index]
    updatedTask.name = value
    const newTasks = tasks.filter((task, idx) =>
      idx === index ? updatedTask : task
    )

    setTasks(newTasks)
  }

  const handleDeleteTask = value => {
    const newTasks = tasks.filter((task, idx) => (idx !== value ? task : null))

    setTasks(newTasks)
  }

  const handleToggleStatus = index => {
    const updatedTask = tasks[index]

    updatedTask.status
      ? (updatedTask.status = false)
      : (updatedTask.status = true)

    const newTasks = tasks.filter((task, idx) =>
      idx === index ? updatedTask : task
    )

    setTasks(newTasks)
  }

  const handleToggleFavor = index => {
    const favoredTask = tasks[index]

    favoredTask.favored
      ? (favoredTask.favored = false)
      : (favoredTask.favored = true)

    const newTasks = tasks.filter((task, idx) =>
      idx === index ? favoredTask : task
    )

    setTasks(newTasks)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar className="menu" />
      <div className="todo">
        <Title>Tarefas</Title>
        <TodoList
          tasks={tasks}
          addTask={handleAddTask}
          editTask={handleUpdateTask}
          deleteTask={handleDeleteTask}
          toggleStatus={handleToggleStatus}
          toggleFavor={handleToggleFavor}
        />
      </div>
    </div>
  )
}

export default App
