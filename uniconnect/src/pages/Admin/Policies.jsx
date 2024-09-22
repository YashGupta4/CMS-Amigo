import { useState } from 'react';
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
//   policyList: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   policyItem: {
//     backgroundColor: '#f0f0f0',
//     margin: '10px 0',
//     padding: '15px',
//     borderRadius: '5px',
//   },
//   policyTitle: {
//     fontWeight: 'bold',
//     marginBottom: '5px',
//     cursor: 'pointer',
//   },
//   policyContent: {
//     marginTop: '10px',
//   },
// };

const Policies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState(null);

  const policies = [
    {
      id: 1,
      title: 'Academic Integrity',
      content: 'Our institution maintains a strict policy on academic integrity. Plagiarism, cheating, and other forms of academic dishonesty are not tolerated and may result in disciplinary action.',
    },
    {
      id: 2,
      title: 'Attendance Policy',
      content: 'Students are expected to attend all scheduled classes. Excessive absences may affect grades and financial aid eligibility.',
    },
    {
      id: 3,
      title: 'Policy',
      content: 'The university is committed to providing equal opportunities for all students, faculty, and staff. Discrimination based on race, gender, religion, or disability is strictly prohibited.',
    },
    {
      id: 4,
      title: 'Campus Safety',
      content: 'The safety of our campus community is paramount. We have implemented various measures including 24/7 campus security, emergency alert systems, and regular safety drills.',
    },
  ];

  const togglePolicy = (id) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Institutional Policies</h1>
      <ul style={sharedStyles.list}>
        {policies.map((policy) => (
          <li key={policy.id} style={sharedStyles.listItem}>
            <div
              style={{...sharedStyles.itemTitle, cursor: 'pointer'}}
              onClick={() => togglePolicy(policy.id)}
            >
              {policy.title}
            </div>
            {expandedPolicy === policy.id && (
              <div style={sharedStyles.itemContent}>{policy.content}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Policies;