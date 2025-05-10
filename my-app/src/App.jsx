import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="app-wrapper">
          <Navbar 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme}
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="app-container">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
              <div className="content-wrapper">
                <AppRoutes />
              </div>
            </main>
          </div>
          <ChatBot />
        </div>
      </div>
    </Router>
  );
}

export default App;