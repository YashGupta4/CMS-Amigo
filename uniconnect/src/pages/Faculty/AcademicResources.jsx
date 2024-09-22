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
//   resourceList: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   resourceItem: {
//     backgroundColor: '#f0f0f0',
//     margin: '10px 0',
//     padding: '15px',
//     borderRadius: '5px',
//   },
//   resourceTitle: {
//     fontWeight: 'bold',
//     marginBottom: '5px',
//   },
// };

function AcademicResources() {
  const resources = [
    {
      id: 1,
      title: 'University Library',
      description: 'Access to millions of books, journals, and online databases.',
      link: '#library',
    },
    {
      id: 2,
      title: 'Writing Center',
      description: 'Get help with essays, research papers, and other writing assignments.',
      link: '#writing-center',
    },
    {
      id: 3,
      title: 'Tutoring Services',
      description: 'One-on-one and group tutoring sessions for various subjects.',
      link: '#tutoring',
    },
    {
      id: 4,
      title: 'Career Development Center',
      description: 'Resources for career planning, internships, and job searches.',
      link: '#career-center',
    },
  ];

  return (
    <div style={sharedStyles.container}>
      <h1 style={sharedStyles.heading}>Academic Resources</h1>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Available Resources</h2>
        <ul style={sharedStyles.list}>
          {resources.map((resource) => (
            <li key={resource.id} style={sharedStyles.listItem}>
              <div style={sharedStyles.title}>{resource.title}</div>
              <p style={sharedStyles.content}>{resource.description}</p>
              <a href={resource.link} style={sharedStyles.link}>Learn More</a>
            </li>
          ))}
        </ul>
      </div>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Technology Resources</h2>
        <ul style={sharedStyles.list}>
          <li style={sharedStyles.listItem}>Computer Labs</li>
          <li style={sharedStyles.listItem}>Software Licenses for Students</li>
          <li style={sharedStyles.listItem}>Online Learning Management System</li>
          <li style={sharedStyles.listItem}>IT Help Desk</li>
        </ul>
      </div>
      <div style={sharedStyles.section}>
        <h2 style={sharedStyles.sectionTitle}>Research Support</h2>
        <ul style={sharedStyles.list}>
          <li style={sharedStyles.listItem}>Research Methodology Workshops</li>
          <li style={sharedStyles.listItem}>Statistical Analysis Software</li>
          <li style={sharedStyles.listItem}>Grant Writing Assistance</li>
          <li style={sharedStyles.listItem}>Institutional Review Board (IRB) Support</li>
        </ul>
      </div>
    </div>
  );
}

export default AcademicResources;