import React, { useState } from 'react'

import GlobalStyle from './styles/global'
import TodoList from './components/TodoList'
import Sidebar from './components/Sidebar'
import Calendar from './components/Calendar'

import { Title } from './styles/App'

function App() {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [renderizingFilteredTasks, setRenderizingFilteredTasks] = useState(
    false
  )
  const [calendar, setCalendar] = useState({})

  const scheduledTasks = tasks.filter(task => task.schedule !== '')

  const handleAddTask = (value, color) => {
    setTasks([
      ...tasks,
      {
        name: value,
        color,
        status: false,
        favored: false,
        schedule: ''
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

  const filterTasks = (filteredTasks, filter) => {
    setFilteredTasks(filteredTasks)
    setRenderizingFilteredTasks(filter)
    if (filter === 'scheduled') {
      toggleCalendar()
    } else {
      if (calendar.status !== false) {
        toggleCalendar()
      }
    }
  }

  const toggleCalendar = index => {
    setCalendar({
      status: !calendar.status,
      editingTask: index
    })
  }

  const pickDate = (index, date) => {
    const scheduledTask = tasks[index]

    scheduledTask.schedule = date

    const newTasks = tasks.filter((task, idx) =>
      idx === index ? scheduledTask : task
    )
    setTasks(newTasks)
    setCalendar({})
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar className="menu" tasks={tasks} filter={filterTasks} />
      <div className="todo">
        <Title>Tarefas</Title>
        <TodoList
          tasks={renderizingFilteredTasks ? filteredTasks : tasks}
          addTask={handleAddTask}
          editTask={handleUpdateTask}
          deleteTask={handleDeleteTask}
          toggleStatus={handleToggleStatus}
          toggleFavor={handleToggleFavor}
          toggleCalendar={toggleCalendar}
        />
      </div>
      {calendar.status && (
        <Calendar
          className="calendar"
          scheduleTask={pickDate}
          indexTask={calendar.editingTask}
          tasks={scheduledTasks}
        />
      )}
    </div>
  )
}

export default App
