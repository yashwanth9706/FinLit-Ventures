import React from 'react';

const CopilotIneligible = ({ data, onNavigate }) => {
  return (
    <div className="container">
      <div className="header">
        <button 
          className="btn-secondary" 
          style={{ width: 'auto', padding: '8px 16px', border: 'none' }}
          onClick={() => onNavigate('PauseSIPInit')}
        >
          ← Back
        </button>
        <div className="header-title">FinLit Copilot</div>
        <div style={{ width: '70px' }}></div>
      </div>

      <div className="mb-6">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>Pause unavailable</h1>
      </div>

      <div className="card mb-6" style={{ borderLeft: '4px solid var(--error)' }}>
        <div className="flex align-center gap-2 mb-2">
          <span style={{ color: 'var(--error)', fontSize: '1.25rem' }}>⚠</span>
          <span className="font-bold text-error">You can't pause this installment</span>
        </div>
        <p className="text-secondary text-small mb-4">
          The pause request window for your upcoming installment has already closed.
        </p>

        <div className="p-4" style={{ backgroundColor: '#f8fafc', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
          <div className="flex justify-between mb-2">
            <span className="text-small text-muted">Next Installment</span>
            <span className="font-medium">₹{data.sip.amount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-small text-muted">Scheduled</span>
            <span className="font-medium">{data.sip.nextInstallmentDate}</span>
          </div>
          <div className="text-small text-secondary" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
            <span className="font-bold">Rule: </span>{data.copilot.ineligibilityRule}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button 
          className="btn btn-primary"
          onClick={() => onNavigate('SIPDetails')}
        >
          Okay
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => onNavigate('SIPDetails')}
          style={{ border: 'none' }}
        >
          Back to SIP
        </button>
      </div>
    </div>
  );
};

export default CopilotIneligible;
