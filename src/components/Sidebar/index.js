import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'

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
          <FontAwesomeIcon icon={faHome} />
          <span>Tarefas</span>
        </li>
      </List>
    </Container>
  )
}
