import React from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../utilities/event'
import { Modal, Input } from 'antd';
import './CalendarComp.css'
import icon from '../assets/icons/dumbell.png'

export default class CalendarComp extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className='calendar-comp'>
        {this.renderSidebar()}
        <div className='calendar-comp-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='calendar-comp-sidebar'>
        <div className='calendar-comp-sidebar-section'>
        <img src={icon} alt="logo" className="logoCal" style={{ width: '150px', height: '150px'}} />
        </div>
        <div className='calendar-comp-sidebar-section'>
          <h2>Planned workouts and Future Goals ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    Modal.confirm({
      title: 'Add Workout or Goal',
      content: (
        <Input
          placeholder="Enter workout or goal"
        />
      ),
      onOk: () => {
        const title = document.querySelector('.ant-input').value.trim();
        if (title) {
          const calendarApi = selectInfo.view.calendar;
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
          });
          const newEvent = {
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
          };
          this.setState({
            currentEvents: [...this.state.currentEvents, newEvent],
          });
        }
      },
      onCancel: () => {
        Modal.destroyAll();
      },
    });
  }

  handleEventClick = (clickInfo) => {
    Modal.confirm({
      title: `Are you sure you want to delete '${clickInfo.event.title}'?`,
      okText: 'Delete',
      cancelText: 'Cancel',
      onOk: () => {
        clickInfo.event.remove();
        const currentEvents = this.state.currentEvents.filter((event) => event.id !== clickInfo.event.id);
        this.setState({ currentEvents });
      },
      onCancel: () => {},
    });
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}
