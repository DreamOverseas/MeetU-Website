import React from "react";
import "../css/Events.css";

const EventPage = () => {
  return (
    <div
      className='relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden'
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className='layout-container flex h-full grow flex-col'>
        <div className='content'>
          <div className='layout-content-container'>
            <div className='title-bar'>
              <p className='title'>Upcoming Events</p>
              <button className='create-button'>Create Event</button>
            </div>
            <EventItem
              image='https://cdn.usegalileo.ai/stability/915c9a7f-72d9-4a15-ad77-6f0c8cf616c2.png'
              title='Game Night'
              type='Online Event'
            />
            <EventItem
              image='https://cdn.usegalileo.ai/sdxl10/2375f216-e2f7-463b-b8b5-fe8ab47ff2c4.png'
              title='Board Game Cafe'
              type='In-Person Event'
            />
            <EventItem
              image='https://cdn.usegalileo.ai/sdxl10/932ed300-5c9e-4645-a839-a0dda0e1c7a7.png'
              title='Trivia Night'
              type='Online Event'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EventItem = ({ image, title, type }) => {
  return (
    <div className='event-item'>
      <div className='event-info'>
        <div
          className='event-image'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className='event-details'>
          <p className='event-title'>{title}</p>
          <p className='event-type'>{type}</p>
        </div>
      </div>
      <div className='rsvp-container'>
        <button className='rsvp-button'>RSVP</button>
      </div>
    </div>
  );
};

export default EventPage;
