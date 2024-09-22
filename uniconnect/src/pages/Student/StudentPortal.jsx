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

const StudentPortal = () => {
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      const mockStudentInfo = {
        name: 'John Doe',
        id: '12345',
        courses: [
          { id: 1, name: 'Introduction to Computer Science', grade: 'A' },
          { id: 2, name: 'Calculus I', grade: 'B+' },
          { id: 3, name: 'English Composition', grade: 'A-' },
        ],
        announcements: [
          { id: 1, text: 'Midterm exams start next week' },
          { id: 2, text: 'Library hours extended for finals' },
        ],
      };
      setStudentInfo(mockStudentInfo);
    };

    fetchStudentInfo();
  }, []);

  if (!studentInfo) {
    return <div style={sharedStyles.container}>Loading...</div>;
  }

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Student Portal</h1>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Welcome, {studentInfo.name}</h2>
        <p>Student ID: {studentInfo.id}</p>
      </div>
      <div style={sharedStyles.section}>
        <h3 style={sharedStyles.sectionTitle}>Your Courses</h3>
        <ul style={sharedStyles.list}>
          {studentInfo.courses.map((course) => (
            <li key={course.id} style={sharedStyles.listItem}>
              {course.name} - Grade: {course.grade}
            </li>
          ))}
        </ul>
      </div>
      <div style={sharedStyles.section}>
        <h3 style={sharedStyles.sectionTitle}>Announcements</h3>
        <ul style={sharedStyles.list}>
          {studentInfo.announcements.map((announcement) => (
            <li key={announcement.id} style={sharedStyles.listItem}>
              {announcement.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default StudentPortal;