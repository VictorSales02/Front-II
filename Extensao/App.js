import React, { useState } from 'react';
import Auth from './components/Auth';
import EventSearch from './components/EventSearch';
import EventCreate from './components/EventCreate';
import EventCalendar from './components/EventCalendar';
import MapView from './components/MapView';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <div>
      <header>
        <h1>Sports Events</h1>
      </header>
      <div className="container">
        {!user ? (
          <Auth onLogin={handleLogin} />
        ) : (
          <>
            <EventSearch />
            <EventCreate />
            <EventCalendar />
            <MapView />
          </>
        )}
      </div>
    </div>
  );
}