import React from 'react';

const PauseSIPInit = ({ data, onNavigate }) => {
  return (
    <div className="container">
      <div className="header">
        <button 
          className="btn-secondary" 
          style={{ width: 'auto', padding: '8px 16px', border: 'none' }}
          onClick={() => onNavigate('SIPDetails')}
        >
          ← Back
        </button>
        <div className="header-title">Pause SIP</div>
        <div style={{ width: '70px' }}></div>
      </div>

      <div className="mb-8 text-center">
        <h1 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>You’re about to pause your monthly SIP.</h1>
      </div>

      <div className="card mb-8">
        <div className="font-bold mb-4">{data.sip.name}</div>
        <div className="flex justify-between mb-4">
          <span className="text-secondary">Monthly Amount</span>
          <span className="font-medium">₹{data.sip.amount.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-secondary">Next Installment</span>
          <span className="font-medium">{data.sip.nextInstallmentDate}</span>
        </div>
      </div>

      <div className="copilot-panel">
        <div className="copilot-header">
          <div className="copilot-icon">✦</div>
          <div className="font-bold" style={{ fontSize: '1.125rem' }}>Before you pause</div>
        </div>
        <p className="mb-6">Let FinLit Copilot check what this means for your plan.</p>
        
        <button 
          className="btn btn-primary mb-4"
          onClick={() => {
            if (data.copilot.isEligible) {
              onNavigate('CopilotEligibility');
            } else {
              onNavigate('CopilotIneligible');
            }
          }}
        >
          Review with Copilot
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => onNavigate('SIPDetails')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PauseSIPInit;
