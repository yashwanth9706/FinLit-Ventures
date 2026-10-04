import React from 'react';

const Navbar = ({ currentScreen, onNavigate, userName }) => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-inner">
        <div className="navbar-brand" onClick={() => onNavigate('Dashboard')}>
          <span>FinLit</span>
          <span className="navbar-brand-badge">Platform</span>
        </div>

        <div className="navbar-menu">
          <button
            className={`nav-link ${currentScreen === 'Dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('Dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`nav-link ${currentScreen === 'Investments' ? 'active' : ''}`}
            onClick={() => onNavigate('Investments')}
          >
            Investments
          </button>
          <button
            className={`nav-link ${currentScreen === 'Goals' ? 'active' : ''}`}
            onClick={() => onNavigate('Goals')}
          >
            Goals
          </button>
          <button
            className={`nav-link ${currentScreen === 'Profile' ? 'active' : ''}`}
            onClick={() => onNavigate('Profile')}
          >
            Profile
          </button>
        </div>

        <div className="navbar-user" onClick={() => onNavigate('Profile')}>
          <div className="avatar" title={userName || 'Yashwanth'}>
            {userName ? userName.charAt(0) : 'Y'}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
