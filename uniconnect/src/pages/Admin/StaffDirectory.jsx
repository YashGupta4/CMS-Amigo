import { useState, useEffect } from 'react';
import { sharedStylesAdmin as sharedStyles } from '../../styles/sharedStyles';

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
//   staffList: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   staffItem: {
//     backgroundColor: '#f0f0f0',
//     margin: '10px 0',
//     padding: '15px',
//     borderRadius: '5px',
//   },
//   staffName: {
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

const StaffDirectory = () => {
  const [staff, setStaff] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulating an API call to fetch staff data
    const fetchStaff = async () => {
      // In a real application, this would be an API call
      const mockStaff = [
        { id: 1, name: 'Alice Johnson', position: 'Administrative Assistant', department: 'Student Affairs', email: 'ajohnson@university.edu' },
        { id: 2, name: 'Bob Williams', position: 'IT Support Specialist', department: 'Information Technology', email: 'bwilliams@university.edu' },
        { id: 3, name: 'Carol Davis', position: 'Financial Aid Counselor', department: 'Financial Aid', email: 'cdavis@university.edu' },
        { id: 4, name: 'David Brown', position: 'Facilities Manager', department: 'Facilities Management', email: 'dbrown@university.edu' },
        { id: 5, name: 'Eva Martinez', position: 'Career Advisor', department: 'Career Services', email: 'emartinez@university.edu' },
      ];
      setStaff(mockStaff);
    };

    fetchStaff();
  }, []);

  const filteredStaff = staff.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Staff Directory</h1>
      <input
        type="text"
        placeholder="Search by name, department, or position"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={sharedStyles.searchInput}
      />
      <ul style={sharedStyles.list}>
        {filteredStaff.map((member) => (
          <li key={member.id} style={sharedStyles.listItem}>
            <div style={sharedStyles.itemTitle}>{member.name}</div>
            <div style={sharedStyles.itemContent}>Position: {member.position}</div>
            <div style={sharedStyles.itemContent}>Department: {member.department}</div>
            <div style={sharedStyles.itemContent}>Email: {member.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffDirectory;