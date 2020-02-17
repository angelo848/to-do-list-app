import React from 'react'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle,
  faCheckCircle,
  faTrashAlt,
  faStar,
  faCalendar
} from '@fortawesome/free-regular-svg-icons'
import { faStar as favoredStar } from '@fortawesome/free-solid-svg-icons'

import { Todo } from './styles'

export default function Task(props) {
  const { name, status, favored, color, schedule } = props.item
  let date = ''

  if (schedule !== '') {
    date = format(schedule, 'eee, dd MMMM', {
      locale: pt
    })
  }

  return (
    <Todo status={status} color={color}>
      <FontAwesomeIcon
        icon={status ? faCheckCircle : faCircle}
        onClick={props.toggleTask}
      />
      <div className="wrapper">
        <div className="info">
          <input
            value={name}
            onChange={event =>
              props.updateTask(event.target.value, props.index)
            }
          />
          <span>{date}</span>
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon
            icon={faCalendar}
            onClick={() => props.toggleCalendar(props.index)}
          />
          <FontAwesomeIcon
            icon={favored ? favoredStar : faStar}
            onClick={() => props.favorTask(props.index)}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            size="lg"
            onClick={() => props.deleteTask(props.index)}
          />
        </div>
      </div>
    </Todo>
  )
}
