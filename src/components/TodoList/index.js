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
    '#FFAD05',
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
    setTasks([...tasks, { name: newTask, status: false }])
    setCurrentValue('')
  }

  const handleToggleTask = index => {
    const updatedTask = tasks[index]

    updatedTask.status
      ? (updatedTask.status = false)
      : (updatedTask.status = true)
    const newTasks = tasks.filter((task, idx) =>
      idx === index ? updatedTask : task
    )

    setTasks(newTasks)
  }

  const handleDeleteTask = value => {
    const newTasks = tasks.filter((task, idx) => (idx !== value ? task : null))
    setTasks(newTasks)
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
            color={colors[idx] ? colors[idx] : colors[idx - 10]}
            toggleTask={() => handleToggleTask(idx)}
            deleteTask={handleDeleteTask}
          />
        ))}
      </List>
    </>
  )
}
