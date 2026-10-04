import React, { useState } from 'react';

const CopilotEligibility = ({ data, onNavigate }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  // Generate visual segments for pause windows
  const renderSegments = () => {
    const segments = [];
    for (let i = 0; i < data.copilot.pauseWindowsTotal; i++) {
      const isUsed = i < data.copilot.pauseWindowsUsed;
      segments.push(
        <div 
          key={i} 
          style={{
            flex: 1,
            height: '8px',
            borderRadius: '4px',
            backgroundColor: isUsed ? 'var(--warning)' : 'var(--success)',
            opacity: isUsed ? 0.6 : 1
          }}
        />
      );
    }
    return segments;
  };

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
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>Before you pause</h1>
        <p className="text-secondary">Here’s what you should know about this decision.</p>
      </div>

      <div className="card mb-6" style={{ borderLeft: '4px solid var(--primary)' }}>
        <h2 className="font-bold mb-4">1. Pause eligibility</h2>
        <div className="flex align-center gap-2 mb-2">
          <span style={{ color: 'var(--success)', fontSize: '1.25rem' }}>✓</span>
          <span className="font-medium text-success">Eligible to pause</span>
        </div>
        <p className="text-secondary text-small">{data.copilot.eligibilityMessage}</p>
      </div>

      <div className="card mb-6" style={{ borderLeft: '4px solid var(--primary)' }}>
        <h2 className="font-bold mb-4">2. Your pause history</h2>
        
        <div className="flex gap-2 mb-3">
          {renderSegments()}
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-secondary text-small">
            {data.copilot.pauseWindowsUsed === 0 
              ? 'You have used 0 of 2 pause windows.' 
              : 'You have previously paused 1 installment.'}
          </span>
          <span className="font-medium text-small">
            {data.copilot.pauseWindowsRemaining === 1 
              ? '1 pause window remains.' 
              : '2 pause windows remain.'}
          </span>
        </div>
      </div>

      <div className="card mb-8" style={{ borderLeft: '4px solid var(--primary)' }}>
        <h2 className="font-bold mb-4">3. What happens next?</h2>
        <p className="text-secondary text-small mb-6">FinLit Copilot will show the tentative impact of this pause on your {data.sip.linkedGoal}.</p>
        
        <button 
          className="btn btn-primary"
          onClick={() => onNavigate('CopilotImpact')}
        >
          See goal impact
        </button>
      </div>

      <div className="text-center">
        <button 
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => setShowExplanation(!showExplanation)}
          className="text-small"
        >
          How does this work?
        </button>

        {showExplanation && (
          <div className="mt-4 p-4 text-small text-secondary" style={{ backgroundColor: '#f8fafc', borderRadius: 'var(--border-radius-sm)', textAlign: 'left' }}>
            FinLit Copilot checks your SIP’s applicable rules, your pause history and your current goal plan before showing the impact.
          </div>
        )}
      </div>
    </div>
  );
};

export default CopilotEligibility;
