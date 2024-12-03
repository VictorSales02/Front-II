import React, { useState } from 'react';

function EventSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Search Events</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.name}</h3>
            <p>{event.date} - {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSearch;
