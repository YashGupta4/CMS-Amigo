// sharedStyles.js
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const sharedStylesPages = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    animation: `${fadeIn} 0.5s ease-out`,
  },
  heading: {
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '15px',
    marginBottom: '30px',
    fontSize: '2.5rem',
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-2px',
      left: '50%',
      width: '50px',
      height: '2px',
      backgroundColor: '#e74c3c',
      transform: 'translateX(-50%)',
      transition: 'width 0.3s ease-in-out',
    },
    '&:hover::after': {
      width: '100px',
    },
  },
  section: {
    marginBottom: '30px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  sectionTitle: {
    color: '#2980b9',
    fontSize: '1.8rem',
    marginBottom: '15px',
    position: 'relative',
    paddingLeft: '15px',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      width: '5px',
      height: '70%',
      backgroundColor: '#3498db',
      transform: 'translateY(-50%)',
    },
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  listItem: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#2980b9',
      transform: 'translateY(-2px)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: 'none',
    },
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #bdc3c7',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#3498db',
      boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
    },
  },
};





// src/styles/sharedStyles.js
export const sharedStylesAdmin = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '15px',
      marginBottom: '30px',
      fontSize: '2.5rem',
      textAlign: 'center',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      backgroundColor: '#ffffff',
      margin: '15px 0',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out',
      ':hover': {
        transform: 'translateY(-5px)',
      },
    },
    itemTitle: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#2c3e50',
      fontSize: '1.2rem',
    },
    itemContent: {
      color: '#34495e',
      lineHeight: '1.6',
    },
    searchInput: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      marginBottom: '20px',
      borderRadius: '4px',
      border: '1px solid #bdc3c7',
      transition: 'border-color 0.3s ease',
      ':focus': {
        outline: 'none',
        borderColor: '#3498db',
      },
    },
  };

// sharedStyles.js for Course
export const sharedStylesCourse = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '15px',
      marginBottom: '30px',
      fontSize: '2.5rem',
      textAlign: 'center',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      backgroundColor: '#ffffff',
      margin: '15px 0',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#2c3e50',
      fontSize: '1.2rem',
    },
    content: {
      color: '#34495e',
      lineHeight: '1.6',
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      marginBottom: '20px',
      borderRadius: '4px',
      border: '1px solid #bdc3c7',
      transition: 'border-color 0.3s ease',
    },
    button: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'background-color 0.3s ease',
    },
    message: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#d4edda',
      border: '1px solid #c3e6cb',
      borderRadius: '4px',
      color: '#155724',
    },
  };


  // sharedStyles.js
export const sharedStylesFaculty = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '15px',
      marginBottom: '30px',
      fontSize: '2.5rem',
      textAlign: 'center',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      color: '#2980b9',
      fontSize: '1.8rem',
      marginBottom: '15px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      backgroundColor: '#ffffff',
      margin: '15px 0',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#2c3e50',
      fontSize: '1.2rem',
    },
    content: {
      color: '#34495e',
      lineHeight: '1.6',
    },
    link: {
      color: '#3498db',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.2s ease-in-out',
    },
    searchInput: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      marginBottom: '20px',
      borderRadius: '4px',
      border: '1px solid #bdc3c7',
      transition: 'border-color 0.3s ease',
    },
  };


  // sharedStyles.js
export const sharedStylesStudent = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '15px',
      marginBottom: '30px',
      fontSize: '2.5rem',
      textAlign: 'center',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      color: '#2980b9',
      fontSize: '1.8rem',
      marginBottom: '15px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      backgroundColor: '#ffffff',
      margin: '10px 0',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      margin: '10px 0',
      padding: '12px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #bdc3c7',
      transition: 'border-color 0.3s ease',
    },
    button: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'background-color 0.3s ease',
    },
    message: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#d4edda',
      border: '1px solid #c3e6cb',
      borderRadius: '4px',
      color: '#155724',
    },
  };