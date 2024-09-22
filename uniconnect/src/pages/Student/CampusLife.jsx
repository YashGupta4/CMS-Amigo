import { useState, useEffect } from 'react';
import { sharedStylesStudent as sharedStyles } from '../../styles/sharedStyles';

// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     color: '#333',
//     borderBottom: '2px solid #333',
//     paddingBottom: '10px',
//   },
//   section: {
//     marginBottom: '20px',
//   },
//   sectionTitle: {
//     color: '#4CAF50',
//     marginBottom: '10px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     backgroundColor: '#f0f0f0',
//     margin: '5px 0',
//     padding: '10px',
//     borderRadius: '5px',
//   },
// };

const CampusLife = () => {
  const [events, setEvents] = useState([]);
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchEventsAndClubs = async () => {
      const mockEvents = [
        { id: 1, name: 'Welcome Week', date: '2023-09-01', location: 'Main Quad' },
        { id: 2, name: 'Career Fair', date: '2023-10-15', location: 'Student Center' },
        { id: 3, name: 'Spring Festival', date: '2024-04-20', location: 'Campus Green' },
      ];

      const mockClubs = [
        { id: 1, name: 'Chess Club', meetingTime: 'Tuesdays, 7 PM' },
        { id: 2, name: 'Debate Society', meetingTime: 'Wednesdays, 6 PM' },
        { id: 3, name: 'Environmental Club', meetingTime: 'Thursdays, 5 PM' },
      ];

      setEvents(mockEvents);
      setClubs(mockClubs);
    };

    fetchEventsAndClubs();
  }, []);

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Campus Life</h1>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Upcoming Events</h2>
        <ul style={sharedStyles.list}>
          {events.map((event) => (
            <li key={event.id} style={sharedStyles.listItem}>
              <strong>{event.name}</strong> - {event.date} at {event.location}
            </li>
          ))}
        </ul>
      </div>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Student Clubs</h2>
        <ul style={sharedStyles.list}>
          {clubs.map((club) => (
            <li key={club.id} style={sharedStyles.listItem}>
              <strong>{club.name}</strong> - Meets {club.meetingTime}
            </li>
          ))}
        </ul>
      </div>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Campus Resources</h2>
        <ul style={sharedStyles.list}>
          <li style={sharedStyles.listItem}>Student Health Center</li>
          <li style={sharedStyles.listItem}>Counseling Services</li>
          <li style={sharedStyles.listItem}>Career Development Office</li>
          <li style={sharedStyles.listItem}>Fitness Center</li>
        </ul>
      </div>
    </div>
  );
};
export default CampusLife;