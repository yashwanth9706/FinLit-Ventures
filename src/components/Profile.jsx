import React from 'react';
import Navbar from './Navbar';

const Profile = ({ data, onNavigate }) => {
  return (
    <>
      <Navbar currentScreen="Profile" onNavigate={onNavigate} userName={data.user.name} />

      <div className="platform-container">
        <div className="mb-6">
          <h1 style={{ fontSize: '1.625rem', fontWeight: 700, color: 'var(--text-primary)' }}>Account & Profile</h1>
          <p className="text-secondary text-small">Manage account preferences and decision co-pilot settings</p>
        </div>

        <div className="card mb-6">
          <div className="flex align-center gap-4 mb-6">
            <div className="avatar" style={{ width: '56px', height: '56px', fontSize: '1.5rem' }}>
              {data.user.name.charAt(0)}
            </div>
            <div>
              <h2 className="font-bold" style={{ fontSize: '1.25rem' }}>{data.user.name}</h2>
              <p className="text-secondary text-small">{data.user.profileType}</p>
            </div>
          </div>

          <div className="grid-2 mb-4 p-4" style={{ backgroundColor: '#f8fafc', borderRadius: 'var(--border-radius-sm)' }}>
            <div>
              <div className="text-xs text-muted">Email Address</div>
              <div className="font-medium text-small">{data.user.email}</div>
            </div>
            <div>
              <div className="text-xs text-muted">Mobile Number</div>
              <div className="font-medium text-small">{data.user.mobile}</div>
            </div>
          </div>
        </div>

        <div className="card mb-6">
          <h3 className="font-bold mb-4" style={{ fontSize: '1.125rem' }}>Decision Support Settings</h3>
          
          <div className="flex justify-between align-center mb-4 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <div>
              <div className="font-medium text-small">FinLit Copilot Decision Layer</div>
              <div className="text-xs text-muted">Surfaces eligibility, rules, and goal impact before taking key investment actions</div>
            </div>
            <span className="status-badge status-success">Active</span>
          </div>

          <div className="flex justify-between align-center">
            <div>
              <div className="font-medium text-small">Goal Impact Projections</div>
              <div className="text-xs text-muted">Uses tentative rule-based calculation engine to model skips and changes</div>
            </div>
            <span className="status-badge status-success">Enabled</span>
          </div>
        </div>

        <div className="card text-center" style={{ backgroundColor: '#fff5f5', borderColor: '#fed7d7' }}>
          <button 
            className="btn" 
            style={{ backgroundColor: 'var(--error)', color: 'white', maxWidth: '200px', margin: '0 auto' }}
            onClick={() => onNavigate('Login')}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
