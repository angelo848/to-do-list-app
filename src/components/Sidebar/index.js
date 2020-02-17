import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faHome,
  faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import { faStar, faCalendar } from '@fortawesome/free-regular-svg-icons'

import { Container, List } from './styles'

export default function Sidebar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { tasks } = props
  const favoredTasks = tasks.filter(task => task.favored === true)
  const finishedTasks = tasks.filter(task => task.status === true)
  const scheduledTasks = tasks.filter(task => task.schedule !== '')

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const filterTasks = filter => {
    if (filter === 'favored') {
      props.filter(favoredTasks, filter)
    } else if (filter === 'scheduled') {
      props.filter(scheduledTasks, filter)
    } else if (filter === 'finished') {
      props.filter(finishedTasks, filter)
    } else {
      props.filter(false)
    }
  }

  return (
    <Container className={sidebarOpen ? 'open' : 'closed'}>
      <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
      <List>
        <li onClick={() => filterTasks('total')}>
          <div>
            <FontAwesomeIcon icon={faHome} />
            <span>Tarefas</span>
          </div>
          <span>{tasks.length}</span>
        </li>
        <li onClick={() => filterTasks('favored')}>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <span>Importante</span>
          </div>
          <span>{favoredTasks.length}</span>
        </li>
        <li onClick={() => filterTasks('scheduled')}>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Agendadas</span>
          </div>
          <span>{scheduledTasks.length}</span>
        </li>
        <li onClick={() => filterTasks('finished')}>
          <div>
            <FontAwesomeIcon icon={faCheckDouble} />
            <span>Concluídas</span>
          </div>
          <span>{finishedTasks.length}</span>
        </li>
      </List>
    </Container>
  )
}
