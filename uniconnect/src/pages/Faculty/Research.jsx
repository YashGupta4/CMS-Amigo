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
//   section: {
//     marginBottom: '20px',
//   },
//   sectionTitle: {
//     color: '#4CAF50',
//     marginBottom: '10px',
//   },
//   projectList: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   projectItem: {
//     backgroundColor: '#f0f0f0',
//     margin: '10px 0',
//     padding: '15px',
//     borderRadius: '5px',
//   },
//   projectTitle: {
//     fontWeight: 'bold',
//     marginBottom: '5px',
//   },
// };

function Research() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const mockProjects = [
        {
          id: 1,
          title: 'Artificial Intelligence in Healthcare',
          department: 'Computer Science',
          lead: 'Dr. Jane Smith',
          description: 'Exploring the applications of AI in diagnosing and treating diseases.',
        },
        {
          id: 2,
          title: 'Climate Change Impact on Biodiversity',
          department: 'Environmental Science',
          lead: 'Prof. Michael Green',
          description: 'Studying the effects of global warming on local ecosystems.',
        },
        {
          id: 3,
          title: 'Quantum Computing Algorithms',
          department: 'Physics',
          lead: 'Dr. Sarah Lee',
          description: 'Developing new algorithms for quantum computers to solve complex problems.',
        },
      ];
      setProjects(mockProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Research at Our Institution</h1>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Current Research Projects</h2>
        <ul style={sharedStyles.list}>
          {projects.map((project) => (
            <li key={project.id} style={sharedStyles.listItem}>
              <div style={sharedStyles.title}>{project.title}</div>
              <div style={sharedStyles.content}>Department: {project.department}</div>
              <div style={sharedStyles.content}>Lead Researcher: {project.lead}</div>
              <p style={sharedStyles.content}>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Research Opportunities</h2>
        <p style={sharedStyles.content}>
          We offer various research opportunities for both undergraduate and graduate students.
          If you are interested in participating in cutting-edge research, please contact the
          respective department or faculty member.
        </p>
      </div>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Research Facilities</h2>
        <ul style={sharedStyles.list}>
          <li style={sharedStyles.listItem}>Advanced Computing Lab</li>
          <li style={sharedStyles.listItem}>Biotechnology Research Center</li>
          <li style={sharedStyles.listItem}>Environmental Science Field Station</li>
          <li style={sharedStyles.listItem}>Nanotechnology Institute</li>
        </ul>
      </div>
    </div>
  );
}
export default Research;