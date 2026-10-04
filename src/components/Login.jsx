import React, { useState } from 'react';

const Login = ({ onNavigate }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('yashwanth@example.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('Dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f7fafc',
      padding: '24px 16px'
    }}>
      <div className="card" style={{ maxWidth: '420px', width: '100%', padding: '36px 28px', borderRadius: '16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: 'var(--primary)',
            color: 'white',
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            F
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '6px' }}>
            FinLit
          </h1>
          <p className="text-secondary" style={{ fontSize: '0.9375rem' }}>
            Before you act, understand what your decision means.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="emailOrPhone" 
              className="text-small font-medium text-secondary"
              style={{ display: 'block', marginBottom: '6px' }}
            >
              Email or Mobile Number
            </label>
            <input 
              id="emailOrPhone"
              type="text" 
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter email or 10-digit mobile"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mb-4" style={{ padding: '14px' }}>
            Continue
          </button>
        </form>

        <div style={{ position: 'relative', textAlign: 'center', margin: '20px 0' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '1px solid var(--border-color)', zIndex: 1 }}></div>
          <span className="text-xs text-muted" style={{ position: 'relative', zIndex: 2, backgroundColor: 'white', padding: '0 12px' }}>
            PROTOTYPE ENTRY
          </span>
        </div>

        <button 
          type="button"
          className="btn btn-outline"
          onClick={() => onNavigate('Dashboard')}
          style={{ fontSize: '0.875rem', padding: '10px' }}
        >
          Quick Demo Login (Yashwanth)
        </button>
      </div>
    </div>
  );
};

export default Login;
