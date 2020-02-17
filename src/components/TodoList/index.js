import React, { useState } from 'react'

import { Form, List, Input, Button } from './styles'
import Task from '../Task'

export default function TodoList(props) {
  const { tasks } = props
  const [currentValue, setCurrentValue] = useState('')
  const colors = [
    '#4bc0d9',
    '#3F334D',
    '#6E9887',
    '#C75146',
    '#276FBF',
    '#99E1D9',
    '#AF5B5B',
    '#21D19F',
    '#A03E99',
    '#394648'
  ]

  const addTask = e => {
    e.preventDefault()

    const newTask = currentValue
    const color = generateRandomColor()

    props.addTask(newTask, color)
    setCurrentValue('')
  }

  const handleUpdateTask = (value, index) => {
    props.editTask(value, index)
  }

  const handleDeleteTask = value => {
    props.deleteTask(value)
  }

  const handleToggleStatus = index => {
    props.toggleStatus(index)
  }

  const handleToggleFavor = index => {
    props.toggleFavor(index)
  }

  const generateRandomColor = () => {
    const cor = colors[Math.floor(Math.random() * 10)]

    return cor
  }

  return (
    <>
      <Form onSubmit={addTask}>
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
            toggleCalendar={props.toggleCalendar}
          />
        ))}
      </List>
    </>
  )
}
