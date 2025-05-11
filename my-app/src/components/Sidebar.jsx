import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaUserPlus, 
  FaRobot, 
  FaCog, 
  FaQuestionCircle,
  FaChevronDown,
  FaUserCircle
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = React.useState('accounts');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <FaHome />,
      path: '/',
      color: '#0047ab'
    },
    {
      title: 'Accounts',
      icon: <FaUserPlus />,
      path: '/accounts',
      color: '#0047ab',
      subItems: [
        { title: 'Open Account', path: '/open-account' },
        { title: 'Track status', path: '/track-status' }
      ]
    },
    {
      title: 'About Us',
      icon: <FaUserCircle />,
      path: '/about',
      color: '#0047ab'
    },
    {
      title: 'Help',
      icon: <FaQuestionCircle />,
      path: '/help',
      color: '#0047ab'
    }
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>
      
      <motion.aside 
        className="sidebar"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="sidebar-content">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="sidebar-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.title === 'Dashboard' && ['/auth', '/employee-auth'].includes(location.pathname) ? (
                <span className="sidebar-item" style={{ cursor: 'default', color: '#2563eb', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                  {item.icon}
                  <span className="title">{item.title}</span>
                </span>
              ) : item.subItems ? (
                <>
                  <motion.button 
                    className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
                    onClick={() => toggleSection(item.title.toLowerCase())}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ '--item-color': item.color }}
                  >
                    <span className="icon" style={{ color: item.color }}>{item.icon}</span>
                    <span className="title">{item.title}</span>
                    <motion.div
                      animate={{ rotate: expandedSection === item.title.toLowerCase() ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="arrow" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedSection === item.title.toLowerCase() && (
                      <motion.div 
                        className="submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <motion.div
                            key={subIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.1 }}
                          >
                            <Link
                              to={subItem.path}
                              className={`submenu-item ${isActive(subItem.path) ? 'active' : ''}`}
                              onClick={onClose}
                            >
                              {subItem.title}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
                    style={{ '--item-color': item.color }}
                    onClick={onClose}
                  >
                    <span className="icon" style={{ color: item.color }}>{item.icon}</span>
                    <span className="title">{item.title}</span>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar; 