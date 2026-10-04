import React, { useState } from 'react';

const SIPDetails = ({ data, onNavigate }) => {
  const [showManageMenu, setShowManageMenu] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <button 
          className="btn-secondary" 
          style={{ width: 'auto', padding: '8px 16px', border: 'none' }}
          onClick={() => onNavigate('Investments')}
        >
          ← Back to Investments
        </button>
        <div className="header-title">SIP Details</div>
        <div style={{ width: '70px' }}></div>
      </div>

      <div className="card">
        <div className="flex justify-between align-center mb-2">
          <span className="text-xs text-muted font-bold" style={{ letterSpacing: '0.05em' }}>{data.sip.category.toUpperCase()}</span>
          <span className="status-badge status-success">{data.sip.status}</span>
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px' }}>{data.sip.name}</h1>
        
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-small text-muted">Monthly SIP</div>
            <div className="font-bold" style={{ fontSize: '1.125rem' }}>₹{data.sip.amount.toLocaleString('en-IN')}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="text-small text-muted">SIP Investment Value</div>
            <div className="font-bold text-success" style={{ fontSize: '1.125rem' }}>₹{data.sip.currentValue.toLocaleString('en-IN')}</div>
            <div className="text-xs text-muted">Portfolio share of ₹{data.portfolio.currentValue.toLocaleString('en-IN')}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
          <div>
            <div className="text-small text-muted">Next Installment</div>
            <div className="font-medium">{data.sip.nextInstallmentDate}</div>
          </div>
          <div>
            <div className="text-small text-muted">Started</div>
            <div className="font-medium">{data.sip.startDate}</div>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: '#f8fafc', boxShadow: 'none', marginBottom: '0' }}>
          <div className="text-small text-muted mb-2">Linked Goal</div>
          <div className="font-bold mb-4">{data.sip.linkedGoal}</div>
          
          <div className="flex justify-between mb-2">
            <span className="text-secondary">Target</span>
            <span className="font-bold">₹{data.sip.goalTarget.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-secondary">Tentative Projection</span>
            <span className="font-bold text-success">{data.copilot.currentProjectionDate}</span>
          </div>
          <div className="text-small text-muted" style={{ fontStyle: 'italic' }}>
            Projection based on your current plan and assumptions. Actual results may vary.
          </div>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <button 
          className="btn btn-primary"
          onClick={() => setShowManageMenu(!showManageMenu)}
        >
          Manage SIP
        </button>

        {showManageMenu && (
          <div style={{
            position: 'absolute',
            bottom: '100%',
            left: '0',
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 'var(--border-radius)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)',
            marginBottom: '8px',
            overflow: 'hidden',
            zIndex: 10
          }}>
            <button 
              style={{
                width: '100%',
                padding: '16px',
                textAlign: 'left',
                border: 'none',
                borderBottom: '1px solid var(--border-color)',
                backgroundColor: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 500
              }}
              onClick={() => onNavigate('PauseSIPInit')}
            >
              Pause SIP
            </button>
            <button 
              style={{
                width: '100%',
                padding: '16px',
                textAlign: 'left',
                border: 'none',
                backgroundColor: 'white',
                cursor: 'default',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <span>Cancel SIP</span>
              <span className="text-small status-badge" style={{ backgroundColor: '#edf2f7', color: 'var(--text-secondary)' }}>Coming soon</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SIPDetails;
