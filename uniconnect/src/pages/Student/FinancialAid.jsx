import { useState } from 'react';
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

const FinancialAid = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    aidType: '',
    amount: '',
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
    console.log('Financial Aid Application:', formData);
    setMessage('Your financial aid application has been submitted successfully!');
    setFormData({ name: '', studentId: '', aidType: '', amount: '' });
  };

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Financial Aid</h1>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Available Aid Types</h2>
        <ul style={sharedStyles.list}>
          <li style={sharedStyles.listItem}>Scholarships</li>
          <li style={sharedStyles.listItem}>Grants</li>
          <li style={sharedStyles.listItem}>Work-Study Programs</li>
          <li style={sharedStyles.listItem}>Student Loans</li>
        </ul>
      </div>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Apply for Financial Aid</h2>
        <form style={sharedStyles.form} onSubmit={handleSubmit}>
          <input
            style={sharedStyles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            style={sharedStyles.input}
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="Student ID"
            required
          />
          <select
            style={sharedStyles.input}
            name="aidType"
            value={formData.aidType}
            onChange={handleChange}
            required
          >
            <option value="">Select Aid Type</option>
            <option value="scholarship">Scholarship</option>
            <option value="grant">Grant</option>
            <option value="workStudy">Work-Study</option>
            <option value="loan">Student Loan</option>
          </select>
          <input
            style={sharedStyles.input}
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Requested Amount"
            required
          />
          <button style={sharedStyles.button} type="submit">Submit Application</button>
        </form>
      </div>
      {message && <div style={sharedStyles.message}>{message}</div>}
    </div>
  );
};

export default FinancialAid;