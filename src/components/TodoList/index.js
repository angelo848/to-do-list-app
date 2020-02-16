import React, { useState } from 'react'

import { Form, List, Input, Button } from './styles'
import Task from '../Task'

export default function TodoList() {
  const [tasks, setTasks] = useState([])
  const [currentValue, setCurrentValue] = useState('')
  const colors = [
    '#4bc0d9',
    '#14248A',
    '#6E9887',
    '#C75146',
    '#276FBF',
    '#99E1D9',
    '#AF5B5B',
    '#21D19F',
    '#A03E99',
    '#394648'
  ]

  const handleAddTask = e => {
    e.preventDefault()

    const newTask = currentValue
    const color = generateRandomColor()

    setTasks([
      ...tasks,
      {
        name: newTask,
        status: false,
        favored: false,
        color
      }
    ])
    setCurrentValue('')
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

  const generateRandomColor = () => {
    const cor = colors[Math.floor(Math.random() * 10)]

    return cor
  }

  return (
    <>
      <Form onSubmit={handleAddTask}>
        <Input
          type="text"
          name="todo"
          placeholder="Adicionar uma tarefa"
          value={currentValue}
          onChange={e => setCurrentValue(e.target.value)}
        />
        <Button type="submit">Salvar</Button>
      </Form>
      <List>
        {tasks.map((task, idx) => (
          <Task
            key={idx}
            item={task}
            index={idx}
            toggleTask={() => handleToggleStatus(idx)}
            favorTask={() => handleToggleFavor(idx)}
            updateTask={handleUpdateTask}
            deleteTask={handleDeleteTask}
          />
        ))}
      </List>
    </>
  )
}
