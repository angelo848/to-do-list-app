import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faStar } from '@fortawesome/free-regular-svg-icons'

import { Container, List } from './styles'

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Container className={sidebarOpen ? 'open' : 'closed'}>
      <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
      <List>
        <li>
          <div>
            <FontAwesomeIcon icon={faHome} />
            <span>Tarefas</span>
          </div>
          <span>2</span>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <span>Favoritos</span>
          </div>
          <span>5</span>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Agendado</span>
          </div>
          <span>4</span>
        </li>
      </List>
    </Container>
  )
}
