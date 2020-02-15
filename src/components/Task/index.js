import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle,
  faCheckCircle,
  faTrashAlt
} from '@fortawesome/free-regular-svg-icons'

import { Todo } from './styles'

export default function Task(props) {
  const [status, setStatus] = useState(false)

  const toggleTask = () => {
    status ? setStatus(false) : setStatus(true)
  }

  return (
    <Todo color={props.color}>
      <FontAwesomeIcon
        icon={status ? faCheckCircle : faCircle}
        onClick={toggleTask}
      />
      <div>
        {props.value}
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => props.deleteTask(props.index)}
        />
      </div>
    </Todo>
  )
}
