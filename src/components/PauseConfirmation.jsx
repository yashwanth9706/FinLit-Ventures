import React from 'react';

const PauseConfirmation = ({ data, onNavigate }) => {
  return (
    <div className="container">
      <div className="header">
        <button 
          className="btn-secondary" 
          style={{ width: 'auto', padding: '8px 16px', border: 'none' }}
          onClick={() => onNavigate('CopilotImpact')}
        >
          ← Back
        </button>
        <div className="header-title">Confirm Pause</div>
        <div style={{ width: '70px' }}></div>
      </div>

      <div className="mb-6">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Confirm SIP Pause</h1>
      </div>

      <div className="card mb-6">
        <div className="flex justify-between mb-4">
          <span className="text-secondary">SIP</span>
          <span className="font-medium">{data.sip.name}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-secondary">Amount</span>
          <span className="font-medium">₹{data.sip.amount.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between mb-4 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <span className="text-secondary">Action</span>
          <span className="font-medium text-warning">Pause upcoming installment</span>
        </div>
        
        <div className="flex justify-between mb-4">
          <span className="text-secondary">Pause windows remaining</span>
          <span className="font-medium text-right">
            {data.copilot.pauseWindowsRemaining - 1 === 0 
              ? '0 pause windows remaining after this pause' 
              : `${data.copilot.pauseWindowsRemaining - 1} pause windows remaining after this pause`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-secondary">Tentative goal projection</span>
          <span className="font-medium text-warning">{data.copilot.pausedProjectionDate}</span>
        </div>
      </div>

      <div className="mb-8 p-4 text-center" style={{ backgroundColor: 'var(--success-bg)', borderRadius: 'var(--border-radius-sm)' }}>
        <p className="text-success font-medium text-small">
          ✓ You’ve reviewed the eligibility, pause history and tentative goal impact.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button 
          className="btn btn-primary"
          onClick={() => onNavigate('SuccessState')}
          style={{ backgroundColor: 'var(--warning)', color: 'white' }}
        >
          Pause SIP
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => onNavigate('CopilotImpact')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PauseConfirmation;
