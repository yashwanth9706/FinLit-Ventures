import React, { useState } from 'react';

const CopilotImpact = ({ data, onNavigate }) => {
  const [showCalculation, setShowCalculation] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <button 
          className="btn-secondary" 
          style={{ width: 'auto', padding: '8px 16px', border: 'none' }}
          onClick={() => onNavigate('CopilotEligibility')}
        >
          ← Back
        </button>
        <div className="header-title">FinLit Copilot</div>
        <div style={{ width: '70px' }}></div>
      </div>

      <div className="mb-6">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)' }}>What could change?</h1>
        <p className="text-secondary text-small mt-1">
          Based on your current SIP plan and the assumptions used, your goal is tentatively projected for {data.copilot.currentProjectionDate}.
        </p>
      </div>

      <div className="card mb-6">
        <div className="text-small text-muted font-bold mb-4" style={{ letterSpacing: '0.05em' }}>CURRENT PLAN</div>
        <div className="flex justify-between align-center mb-4 pb-4" style={{ borderBottom: '1px dashed var(--border-color)' }}>
          <div>
            <div className="font-medium">₹{data.sip.amount.toLocaleString('en-IN')}/month</div>
            <div className="text-small text-secondary">Goal: ₹{data.sip.goalTarget.toLocaleString('en-IN')}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="text-small text-muted">Tentative goal projection</div>
            <div className="font-bold text-success" style={{ fontSize: '1.125rem' }}>{data.copilot.currentProjectionDate}</div>
          </div>
        </div>

        <div className="text-small text-muted font-bold mb-4 mt-6" style={{ letterSpacing: '0.05em' }}>IF YOU PAUSE THIS INSTALLMENT</div>
        <div className="flex justify-between align-center">
          <div>
            <div className="font-medium">₹{data.sip.amount.toLocaleString('en-IN')} contribution skipped</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="text-small text-muted">Tentative goal projection</div>
            <div className="font-bold text-warning" style={{ fontSize: '1.125rem' }}>{data.copilot.pausedProjectionDate}</div>
          </div>
        </div>
      </div>

      <div className="mb-8 p-4" style={{ backgroundColor: 'var(--warning-bg)', borderRadius: 'var(--border-radius-sm)', border: '1px solid #fbd38d' }}>
        <p className="font-medium text-warning" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
          If you pause this installment, the tentative projection may shift to {data.copilot.pausedProjectionDate}.
        </p>
      </div>

      <div className="disclaimer mb-6" style={{ marginTop: 0 }}>
        This is a tentative projection based on your current SIP plan and assumptions. Actual investment performance and future contributions may change the outcome.
      </div>

      <div className="mb-8">
        <button 
          style={{ background: 'none', border: 'none', color: 'var(--primary)', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}
          onClick={() => setShowCalculation(!showCalculation)}
          className="text-small"
        >
          {showCalculation ? 'Hide calculation details' : 'How was this calculated?'}
        </button>

        {showCalculation && (
          <div className="mt-4 p-4 text-small text-secondary" style={{ backgroundColor: '#f8fafc', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <div className="flex justify-between mb-2">
              <span>Current SIP contribution:</span>
              <span className="font-medium">₹{data.sip.amount.toLocaleString('en-IN')}/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Skipped installments:</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Current investment value:</span>
              <span className="font-medium">₹{data.sip.currentValue.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Assumed rate of return:</span>
              <span className="font-medium">{data.sip.assumedReturnRate}</span>
            </div>
            <div className="mt-4 pt-2 text-muted" style={{ borderTop: '1px solid var(--border-color)', fontStyle: 'italic' }}>
              These are assumptions used for illustrative purposes and are not guarantees of future performance.
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <button 
          className="btn btn-primary"
          onClick={() => onNavigate('PauseConfirmation')}
        >
          Continue to Pause
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => onNavigate('PauseSIPInit')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CopilotImpact;
