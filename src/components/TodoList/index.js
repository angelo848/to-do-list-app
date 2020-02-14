import React, { useState } from 'react'

import { List } from './styles'
import Task from '../Task'

export default function TodoList() {
  const [tasks, setTasks] = useState([])
  const [currentValue, setCurrentValue] = useState('')

  const handleAddTask = e => {
    e.preventDefault()

    const newTask = currentValue
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = value => {
    const newTasks = tasks.filter((task, idx) => (idx !== value ? task : null))
    setTasks(newTasks)
  }
  return (
    <List>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="todo"
          onChange={e => setCurrentValue(e.target.value)}
        />
        <button type="submit">salvar</button>
      </form>
      {tasks.map((task, idx) => (
        <Task
          key={idx}
          value={task}
          index={idx}
          onClick={handleDeleteTask}
        />
      ))}
    </List>
  )
}
