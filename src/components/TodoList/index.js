import React, { useState, useEffect } from 'react'

import { List } from './styles'
import Task from '../Task'

export default function TodoList() {
  const [tasks, setTasks] = useState([])

  return (
    <List>
      <Task text="texto" color="red" />
    </List>
  );
}
