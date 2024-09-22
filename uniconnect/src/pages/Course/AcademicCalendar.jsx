import { useState, useEffect } from 'react';
import { sharedStylesCourse as sharedStyles } from '../../styles/sharedStyles';

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
//   eventList: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   eventItem: {
//     backgroundColor: '#f0f0f0',
//     margin: '10px 0',
//     padding: '15px',
//     borderRadius: '5px',
//   },
//   eventDate: {
//     fontWeight: 'bold',
//     color: '#4CAF50',
//   },
// };

function AcademicCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const mockEvents = [
        { id: 1, date: '2023-09-01', event: 'Fall Semester Begins' },
        { id: 2, date: '2023-11-24', event: 'Thanksgiving Break' },
        { id: 3, date: '2023-12-15', event: 'Fall Semester Ends' },
        { id: 4, date: '2024-01-15', event: 'Spring Semester Begins' },
        { id: 5, date: '2024-03-10', event: 'Spring Break' },
        { id: 6, date: '2024-05-15', event: 'Spring Semester Ends' },
      ];
      setEvents(mockEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Academic Calendar</h1>
      <ul style={sharedStyles.list}>
        {events.map((event) => (
          <li key={event.id} style={sharedStyles.listItem}>
            <span style={{...sharedStyles.title, color: '#3498db'}}>{event.date}</span>
            <div style={sharedStyles.content}>{event.event}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AcademicCalendar;