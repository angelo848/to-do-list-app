import React, { Component } from 'react'
import {
  format,
  parseISO,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  addDays,
  isSameMonth,
  isSameDay
} from 'date-fns'
import pt from 'date-fns/locale/pt'

import './styles.css'

export default class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  }

  renderHeader() {
    const dateFormat = 'MMMM yyyy'

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {format(this.state.currentMonth, dateFormat, { locale: pt })}
          </span>
        </div>
        <div className="col col-end">
          <div className="icon" onClick={this.nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    )
  }

  renderDays() {
    const dateFormat = 'EEEEEE'
    const days = []

    let startDate = startOfWeek(this.state.currentMonth)

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: pt })}
        </div>
      )
    }

    return <div className="days row">{days}</div>
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const dateFormat = 'dd'
    const rows = []

    let days = []
    let day = startDate
    let formattedDate = ''

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        let cloneDay = format(day, 'yyyy-MM-dd')
        formattedDate = format(day, dateFormat)
        let taskDay = day
        var schedules = this.props.tasks
          .filter(task => isSameDay(task.schedule, taskDay))
          .map(task => task.schedule)
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? 'disabled'
                : isSameDay(day, selectedDate)
                ? 'selected'
                : isSameDay(day, schedules[0])
                ? 'scheduled'
                : ''
            }`}
            key={day}
            onClick={() => this.onDateClick(parseISO(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      )
      days = []
    }

    return <div className="body">{rows}</div>
  }

  onDateClick = day => {
    this.setState({ selectedDate: day })
    this.props.scheduleTask(this.props.indexTask, day)
  }

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    })
  }

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    })
  }

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    )
  }
}
