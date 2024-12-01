"use client";
import React from 'react';
import './events.css'; // Import the CSS file

const newsAndEvents = [
  {
    title: 'Annual Alumni Meet 2024',
    date: 'December 20, 2024',
    description: 'Join us for our Annual Alumni Meet to reconnect with old friends and network with fellow alumni.',
    type: 'Event',
  },
  {
    title: 'Alumni Dinner Gala',
    date: 'January 10, 2025',
    description: 'An elegant evening of dining and networking at our Alumni Dinner Gala.',
    type: 'Event',
  },
  {
    title: 'Tech Innovation Conference',
    date: 'February 5, 2025',
    description: 'Attend the Tech Innovation Conference to learn about the latest trends and advancements in technology.',
    type: 'Conference',
  },
  {
    title: 'Career Advancement Workshop',
    date: 'March 3, 2025',
    description: 'A workshop designed to help alumni with career advancement through skill development and networking.',
    type: 'Workshop',
  },
  {
    title: 'Summer Reunion Picnic',
    date: 'June 15, 2025',
    description: 'Bring your family and enjoy a fun-filled day at our Summer Reunion Picnic.',
    type: 'Event',
  },
  {
    title: 'Entrepreneurship Summit',
    date: 'August 22, 2025',
    description: 'Join fellow alumni for a summit focused on entrepreneurship and startup growth.',
    type: 'Summit',
  }
];

export default function Events() {
  return (
    <div className="App">
      <header className="AppHeader">
        <h1>News and Events</h1>
      </header>
      
      <div className="NewsEventsList">
        {newsAndEvents.map((item, index) => (
          <div key={index} className="NewsEventCard">
            <h2>{item.title}</h2>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
