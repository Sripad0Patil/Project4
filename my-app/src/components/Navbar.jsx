import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaUserCircle, FaCog, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import Logo from './Logo';
import "./Navbar.css";

const Navbar = ({ isDarkMode, toggleTheme, toggleSidebar, isSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEmpDropdownOpen, setIsEmpDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const dropdownRef = useRef(null);
  const empDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get user data from localStorage when component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setUserData(user);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (empDropdownRef.current && !empDropdownRef.current.contains(event.target)) {
        setIsEmpDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear any stored user data or tokens
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUserData(null);
    
    // Close the dropdown
    setIsDropdownOpen(false);
    
    // Redirect to auth page
    navigate('/auth');
  };

  const handleEmpLogout = () => {
    localStorage.removeItem('employee');
    setIsEmpDropdownOpen(false);
    navigate('/employee-auth');
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-left">
        {['/auth', '/employee-auth'].includes(location.pathname) ? (
          <button 
            className={`menu-button`} 
            aria-label="Toggle Sidebar"
            style={{ opacity: 0.5, cursor: 'default' }}
            disabled
          >
            <FaBars />
          </button>
        ) : (
          <button 
            className={`menu-button ${isSidebarOpen ? 'active' : ''}`} 
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        )}
        {['/auth', '/employee-auth'].includes(location.pathname) ? (
          <span className="logo" style={{ cursor: 'default', color: '#2563eb', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Logo className="logo-svg" />
            <span>BankEase</span>
          </span>
        ) : (
          <Link to="/" className="logo">
            <Logo className="logo-svg" />
            <span>BankEase</span>
          </Link>
        )}
      </div>

      <div className="navbar-right">
        <div className="user-menu" ref={dropdownRef}>
          <button 
            className={`user-button ${isDropdownOpen ? 'active' : ''}`}
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <FaUserCircle />
            <span>Account</span>
          </button>
          <div className={`user-dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <div className="user-info">
              <div className="user-name">User: {userData?.name || 'Guest'}</div>
              <div className="user-email">{userData?.email || 'guest@example.com'}</div>
            </div>
            <button 
              className="signup-button"
              onClick={() => {
                navigate('/auth');
                setIsDropdownOpen(false);
              }}
            >
              <FaUserPlus />
              <span>Sign Up</span>
            </button>
            <button 
              className="logout-button"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
        {/* Employee Account Dropdown */}
        <div className="user-menu" ref={empDropdownRef}>
          <button
            className={`user-button ${isEmpDropdownOpen ? 'active' : ''}`}
            onClick={() => setIsEmpDropdownOpen((v) => !v)}
            aria-expanded={isEmpDropdownOpen}
            aria-haspopup="true"
            style={{ marginLeft: 16 }}
          >
            <FaUserCircle />
            <span>Employee Account</span>
          </button>
          <div className={`user-dropdown ${isEmpDropdownOpen ? 'show' : ''}`}>
            <button
              className="signup-button"
              onClick={() => {
                navigate('/employee-auth');
                setIsEmpDropdownOpen(false);
              }}
            >
              <FaUserPlus />
              <span>Sign Up</span>
            </button>
            <button
              className="logout-button"
              onClick={handleEmpLogout}
            >
              <FaSignOutAlt />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
