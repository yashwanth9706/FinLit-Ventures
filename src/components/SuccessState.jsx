import React from 'react';

const SuccessState = ({ data, onNavigate }) => {
  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: '40px' }}>
      <div 
        style={{ 
          width: '64px', 
          height: '64px', 
          borderRadius: '50%', 
          backgroundColor: 'var(--success-bg)', 
          color: 'var(--success)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '32px',
          margin: '0 auto 24px auto'
        }}
      >
        ✓
      </div>
      
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '32px' }}>
        Your SIP pause has been submitted
      </h1>

      <div className="card text-left mb-8">
        <div className="flex justify-between mb-4 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div>
            <div className="font-bold text-small text-muted mb-1">Paused installment</div>
            <div className="font-medium">₹{data.sip.amount.toLocaleString('en-IN')} on {data.sip.nextInstallmentDate}</div>
          </div>
          <div className="status-badge status-warning align-self-start">Paused</div>
        </div>

        <div className="flex justify-between mb-4">
          <span className="text-secondary">Pause windows remaining</span>
          <span className="font-medium">{data.copilot.pauseWindowsRemaining - 1}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-secondary">Tentative goal projection after pause</span>
          <span className="font-medium text-warning">{data.copilot.pausedProjectionDate}</span>
        </div>
      </div>

      <p className="text-secondary text-small mb-8">
        Your future SIP installments remain unchanged unless you choose to modify them.
      </p>

      <button 
        className="btn btn-primary"
        onClick={() => onNavigate('Dashboard')}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default SuccessState;
