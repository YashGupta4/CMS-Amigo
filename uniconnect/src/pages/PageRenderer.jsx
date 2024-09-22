//import React from 'react';
import PropTypes from 'prop-types';
import CourseCatalog from './Course/CourseCatalog';
import Registration from './Course/Registration';
import AcademicCalendar from './Course/AcademicCalendar';
import StudentPortal from './Student/StudentPortal';
import FinancialAid from './Student/FinancialAid';
import CampusLife from './Student/CampusLife';
import FacultyDirectory from './Faculty/FacultyDirectory';
import Research from './Faculty/Research';
import AcademicResources from './Faculty/AcademicResources';
import Policies from './Admin/Policies';
import Departments from './Admin/Departments';
import StaffDirectory from './Admin/StaffDirectory';

const PageRenderer = ({ activePage }) => {
  switch (activePage) {
    case 'CourseCatalog':
      return <CourseCatalog />;
    case 'Registration':
      return <Registration />;
    case 'AcademicCalendar':
      return <AcademicCalendar />;
    case 'StudentPortal':
      return <StudentPortal />;
    case 'FinancialAid':
      return <FinancialAid />;
    case 'CampusLife':
      return <CampusLife />;
    case 'FacultyDirectory':
      return <FacultyDirectory />;
    case 'Research':
      return <Research />;
    case 'AcademicResources':
      return <AcademicResources />;
    case 'Policies':
      return <Policies />;
    case 'Departments':
      return <Departments />;
    case 'StaffDirectory':
      return <StaffDirectory />;
    default:
      return <CourseCatalog />;
  }
};

PageRenderer.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default PageRenderer;