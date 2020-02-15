import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle,
  faCheckCircle,
  faTrashAlt
} from '@fortawesome/free-regular-svg-icons'

import { Todo } from './styles'

export default function Task(props) {
  const { name, status } = props.item

  return (
    <Todo status={status} color={props.color}>
      <FontAwesomeIcon
        icon={status ? faCheckCircle : faCircle}
        onClick={props.toggleTask}
      />
      <div>
        {name}
        <FontAwesomeIcon
          icon={faTrashAlt}
          size="lg"
          onClick={() => props.deleteTask(props.index)}
        />
      </div>
    </Todo>
  )
}
