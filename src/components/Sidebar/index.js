import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faHome,
  faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import { Container, List } from './styles'

export default function Sidebar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { tasks } = props
  const favoredTasks = tasks.filter(task => task.favored === true)
  const finishedTasks = tasks.filter(task => task.status === true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const filterFavoredTasks = filter => {
    if (filter === 'favored') {
      const favoredTasks = tasks.filter(task => task.favored)
      props.filter(favoredTasks, true)
    } else if (filter === 'finished') {
      const finishedTasks = tasks.filter(task => task.status)
      props.filter(finishedTasks, true)
    } else {
      props.filter(false)
    }
  }

  return (
    <Container className={sidebarOpen ? 'open' : 'closed'}>
      <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
      <List>
        <li onClick={() => filterFavoredTasks('total')}>
          <div>
            <FontAwesomeIcon icon={faHome} />
            <span>Tarefas</span>
          </div>
          <span>{tasks.length}</span>
        </li>
        <li onClick={() => filterFavoredTasks('favored')}>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <span>Favoritos</span>
          </div>
          <span>{favoredTasks.length}</span>
        </li>
        <li onClick={() => filterFavoredTasks('finished')}>
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
