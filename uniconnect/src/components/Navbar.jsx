import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setActivePage, setShowLogin, user, onLogout }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRefs = useRef([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const navItems = [
    {
      title: "Academics",
      items: [
        { name: "Course Catalog", component: "CourseCatalog" },
        { name: "Registration", component: "Registration" },
        { name: "Academic Calendar", component: "AcademicCalendar" },
      ],
    },
    {
      title: "Campus Life",
      items: [
        { name: "Student Portal", component: "StudentPortal" },
        { name: "Financial Aid", component: "FinancialAid" },
        { name: "Campus Activities", component: "CampusLife" },
      ],
    },
    {
      title: "Research",
      items: [
        { name: "Faculty Directory", component: "FacultyDirectory" },
        { name: "Research Centers", component: "Research" },
        { name: "Publications", component: "Publications" },
      ],
    },
    {
      title: "About",
      items: [
        { name: "About Us", component: "AboutUs" },
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null && 
          !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (showSearch && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown, showSearch]);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleItemClick = (component) => {
    setActivePage(component);
    setActiveDropdown(null);
    if (component === "AboutUs") {
      navigate("/about-us");
    }
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setActiveDropdown(null);
  };

  const handleLogoutClick = () => {
    onLogout();
    setActiveDropdown(null);
    setActivePage("Login");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    setShowSearch(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 text-gray-800"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold mr-8">AMIGO</h1>
            {!isMobile && (
              <ul className="flex space-x-6">
                {navItems.map((item, index) => (
                  <li key={item.title} className="relative group">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title}
                    </button>
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.ul
                          ref={el => dropdownRefs.current[index] = el}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white"
                        >
                          {item.items.map((subItem) => (
                            <motion.li
                              key={subItem.name}
                              whileHover={{ backgroundColor: '#f7fafc' }}
                              className="px-4 py-2 cursor-pointer"
                              onClick={() => handleItemClick(subItem.component)}
                            >
                              {subItem.name}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <button onClick={() => setShowSearch(!showSearch)} className="text-xl">
              <FaSearch />
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <span>Welcome, {user.username}</span>
                <button
                  onClick={handleLogoutClick}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLoginClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Login
              </button>
            )}
            {isMobile && (
              <button onClick={() => setActiveDropdown(activeDropdown ? null : 'mobile')} className="text-xl">
                {activeDropdown ? <FaTimes /> : <FaBars />}
              </button>
            )}
          </motion.div>
        </div>
        <AnimatePresence>
          {showSearch && (
            <motion.form
              ref={searchRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSearchSubmit}
              className="mt-4"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full p-2 rounded-md bg-gray-100 text-gray-800"
              />
            </motion.form>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isMobile && activeDropdown === 'mobile' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md"
          >
            {navItems.map((item) => (
              <div key={item.title} className="px-4 py-2">
                <h2 className="font-bold mb-2">{item.title}</h2>
                <ul>
                  {item.items.map((subItem) => (
                    <li
                      key={subItem.name}
                      className="py-1 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                      onClick={() => handleItemClick(subItem.component)}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

Navbar.propTypes = {
  setActivePage: PropTypes.func.isRequired,
  setShowLogin: PropTypes.func.isRequired,
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;