import React from "react";
import "../css/EventPage.css";

const EventPage = () => {
  return (
    <div className='relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden'>
      <div className='layout-container flex h-full grow flex-col'>
        <header className='header'>
          <div className='flex items-center gap-4 text-[#0d151c]'>
            <div className='size-4'>
              <svg
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
            <h2 className='title'>Friendship</h2>
          </div>
          <div className='flex flex-1 justify-end gap-8'>
            <div className='nav-links flex items-center gap-9'>
              <a
                className='text-[#0d151c] text-sm font-medium leading-normal'
                href='#'
              >
                Home
              </a>
              <a
                className='text-[#0d151c] text-sm font-medium leading-normal'
                href='#'
              >
                Events
              </a>
              <a
                className='text-[#0d151c] text-sm font-medium leading-normal'
                href='#'
              >
                Groups
              </a>
              <a
                className='text-[#0d151c] text-sm font-medium leading-normal'
                href='#'
              >
                Discover
              </a>
              <a
                className='text-[#0d151c] text-sm font-medium leading-normal'
                href='#'
              >
                Chat
              </a>
            </div>
            <div className='buttons flex gap-2'>
              <button className='new-event'>
                <span className='truncate'>New event</span>
              </button>
              <button className='notifications'>
                <div
                  className='text-[#0d151c]'
                  data-icon='Bell'
                  data-size='20px'
                  data-weight='regular'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20px'
                    height='20px'
                    fill='currentColor'
                    viewBox='0 0 256 256'
                  >
                    <path d='M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z'></path>
                  </svg>
                </div>
              </button>
            </div>
            <div
              className='profile bg-center bg-no-repeat aspect-square bg-cover rounded-full'
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/2be615f3-871c-4324-94cf-7ab3ee27b20a.png")',
              }}
            ></div>
          </div>
        </header>
        <div className='content'>
          <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
            <div className='event-title'>
              <p>New Year's Eve at the Park</p>
            </div>
            <p className='event-details'>
              Join us for a casual New Year's Eve celebration at the park. Bring
              your own picnic dinner, and we'll provide the s'mores and hot
              chocolate. We'll have some lawn games and music, and stay for the
              countdown to midnight.
            </p>
            <div className='event-image flex w-full grow bg-slate-50 @container p-4'>
              <div
                className='image w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1'
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/b7f3e6ad-970a-4a64-ad94-c257a3eb4225.png")',
                }}
              ></div>
            </div>
            <h2 className='details-title'>Details</h2>
            <div className='p-4 grid grid-cols-2'>
              <div className='detail-item'>
                <p className='label'>Date &amp; Time</p>
                <p className='value'>Fri, Dec 31, 2021, 9:00 PM PST</p>
              </div>
              <div className='detail-item'>
                <p className='label'>Location</p>
                <p className='value'>
                  Golden Gate Park, Music Concourse, San Francisco, CA
                </p>
              </div>
              <div className='detail-item col-span-2 pr-[50%]'>
                <p className='label'>Who's going</p>
                <p className='value'>20 people are going</p>
              </div>
            </div>
            <h2 className='rsvp-title'>RSVP</h2>
            <div className='rsvp'>
              <p>Are you going?</p>
              <button>Yes, I'm going</button>
            </div>
            <div className='attendee'>
              <div
                className='profile'
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/2079da0c-c390-414c-b50e-a5131cd0dfa6.png")',
                }}
              ></div>
              <div className='info'>
                <p className='name'>Me</p>
                <p className='status'>You're going</p>
              </div>
            </div>
            <div className='attendee'>
              <div
                className='profile'
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/81764109-6657-48c4-9830-f0f268cae340.png")',
                }}
              ></div>
              <div className='info'>
                <p className='name'>Ben</p>
                <p className='status'>You're going</p>
              </div>
            </div>
            <div className='attendee'>
              <div
                className='profile'
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/2c6606de-7031-4e84-b4d1-29e7ae26534e.png")',
                }}
              ></div>
              <div className='info'>
                <p className='name'>Lisa</p>
                <p className='status'>You're going</p>
              </div>
            </div>
            <div className='attendee'>
              <div
                className='profile'
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/b0ef21cb-5e5a-4ebe-b8bb-70e39ade1024.png")',
                }}
              ></div>
              <div className='info'>
                <p className='name'>Jordan</p>
                <p className='status'>You're going</p>
              </div>
            </div>
            <div className='attendee'>
              <div
                className='profile'
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/27749c18-9715-4ebc-8759-e75f7d1d7a3b.png")',
                }}
              ></div>
              <div className='info'>
                <p className='name'>Samantha</p>
                <p className='status'>You're going</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
