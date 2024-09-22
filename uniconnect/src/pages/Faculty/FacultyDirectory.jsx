import { useState, useEffect } from 'react';
import { sharedStylesFaculty as sharedStyles } from '../../styles/sharedStyles';

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
//   facultyList: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   facultyItem: {
//     backgroundColor: '#f0f0f0',
//     margin: '10px 0',
//     padding: '15px',
//     borderRadius: '5px',
//   },
//   facultyName: {
//     fontWeight: 'bold',
//     marginBottom: '5px',
//   },
//   searchInput: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     marginBottom: '20px',
//   },
// };

function FacultyDirectory() {
  const [faculty, setFaculty] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFaculty = async () => {
      const mockFaculty = [
        { id: 1, name: 'Dr. Jane Smith', department: 'Computer Science', email: 'jsmith@university.edu' },
        { id: 2, name: 'Prof. John Doe', department: 'Mathematics', email: 'jdoe@university.edu' },
        { id: 3, name: 'Dr. Emily Johnson', department: 'Biology', email: 'ejohnson@university.edu' },
        { id: 4, name: 'Prof. Michael Brown', department: 'History', email: 'mbrown@university.edu' },
        { id: 5, name: 'Dr. Sarah Lee', department: 'Physics', email: 'slee@university.edu' },
      ];
      setFaculty(mockFaculty);
    };

    fetchFaculty();
  }, []);

  const filteredFaculty = faculty.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Faculty Directory</h1>
      <input
        type="text"
        placeholder="Search by name or department"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={sharedStyles.searchInput}
      />
      <ul style={sharedStyles.list}>
        {filteredFaculty.map((member) => (
          <li key={member.id} style={sharedStyles.listItem}>
            <div style={sharedStyles.title}>{member.name}</div>
            <div style={sharedStyles.content}>Department: {member.department}</div>
            <div style={sharedStyles.content}>Email: {member.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyDirectory;