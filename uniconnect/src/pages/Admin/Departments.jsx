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
//   departmentList: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   departmentItem: {
//     backgroundColor: '#f0f0f0',
//     margin: '10px 0',
//     padding: '15px',
//     borderRadius: '5px',
//   },
//   departmentName: {
//     fontWeight: 'bold',
//     marginBottom: '5px',
//   },
// };

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch department data
    const fetchDepartments = async () => {
      // In a real application, this would be an API call
      const mockDepartments = [
        { id: 1, name: 'Computer Science', head: 'Dr. Jane Smith', faculty: 25, students: 500 },
        { id: 2, name: 'Mathematics', head: 'Prof. John Doe', faculty: 20, students: 400 },
        { id: 3, name: 'Biology', head: 'Dr. Emily Johnson', faculty: 30, students: 600 },
        { id: 4, name: 'History', head: 'Prof. Michael Brown', faculty: 15, students: 300 },
        { id: 5, name: 'Physics', head: 'Dr. Sarah Lee', faculty: 22, students: 350 },
      ];
      setDepartments(mockDepartments);
    };

    fetchDepartments();
  }, []);

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Academic Departments</h1>
      <ul style={sharedStyles.list}>
        {departments.map((department) => (
          <li key={department.id} style={sharedStyles.listItem}>
            <div style={sharedStyles.itemTitle}>{department.name}</div>
            <div style={sharedStyles.itemContent}>Department Head: {department.head}</div>
            <div style={sharedStyles.itemContent}>Faculty Members: {department.faculty}</div>
            <div style={sharedStyles.itemContent}>Enrolled Students: {department.students}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;