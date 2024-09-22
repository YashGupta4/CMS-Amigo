import { useState } from 'react';
import { sharedStylesCourse as sharedStyles } from '../../styles/sharedStyles';

// const styles = {
//   container: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     color: '#333',
//     borderBottom: '2px solid #333',
//     paddingBottom: '10px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     margin: '10px 0',
//     padding: '10px',
//     fontSize: '16px',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '15px',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '18px',
//   },
//   message: {
//     marginTop: '20px',
//     padding: '10px',
//     backgroundColor: '#dff0d8',
//     border: '1px solid #d6e9c6',
//     borderRadius: '4px',
//   },
// };

function Registration() {
  const [formData, setFormData] = useState({
    studentId: '',
    courseCode: '',
    semester: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    setMessage('Registration successful! You have been enrolled in the course.');
    setFormData({ studentId: '', courseCode: '', semester: '' });
  };

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Course Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={sharedStyles.input}
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          placeholder="Student ID"
          required
        />
        <input
          style={sharedStyles.input}
          type="text"
          name="courseCode"
          value={formData.courseCode}
          onChange={handleChange}
          placeholder="Course Code"
          required
        />
        <input
          style={sharedStyles.input}
          type="text"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          placeholder="Semester (e.g., Fall 2023)"
          required
        />
        <button style={sharedStyles.button} type="submit">Register</button>
      </form>
      {message && <div style={sharedStyles.message}>{message}</div>}
    </div>
  );
}

export default Registration;