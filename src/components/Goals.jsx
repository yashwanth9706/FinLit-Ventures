import React from 'react';
import Navbar from './Navbar';

const Goals = ({ data, onNavigate }) => {
  const goal = data.goal;

  return (
    <>
      <Navbar currentScreen="Goals" onNavigate={onNavigate} userName={data.user.name} />

      <div className="platform-container">
        <div className="mb-6">
          <h1 style={{ fontSize: '1.625rem', fontWeight: 700, color: 'var(--text-primary)' }}>Financial Goals</h1>
          <p className="text-secondary text-small">Track target milestones and projected completion timelines</p>
        </div>

        <div className="card">
          <div className="flex justify-between align-center mb-4">
            <div>
              <span className="text-xs text-muted font-bold" style={{ letterSpacing: '0.05em' }}>LONG TERM WEALTH</span>
              <h2 className="font-bold" style={{ fontSize: '1.25rem' }}>{goal.name}</h2>
            </div>
            <span className="status-badge status-success">On Track</span>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-small mb-1">
              <span className="text-secondary">Current Saved: <strong className="text-primary">₹{goal.currentProgressAmount.toLocaleString('en-IN')}</strong></span>
              <span className="text-secondary">Target: <strong className="text-primary">₹{goal.targetAmount.toLocaleString('en-IN')}</strong></span>
            </div>
            
            <div className="progress-bar-container mb-2">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${goal.progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-muted text-right">{goal.progressPercentage}% achieved</div>
          </div>

          <div className="grid-2 mb-6 p-4" style={{ backgroundColor: '#f8fafc', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <div>
              <div className="text-xs text-muted">Tentative Goal Projection</div>
              <div className="font-bold text-success" style={{ fontSize: '1.125rem' }}>{goal.tentativeProjectionDate}</div>
            </div>
            <div>
              <div className="text-xs text-muted">Total Monthly Contribution</div>
              <div className="font-bold text-primary" style={{ fontSize: '1.125rem' }}>₹{goal.monthlyTotalContribution.toLocaleString('en-IN')}</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-small font-semibold text-secondary mb-2">Linked Investments</div>
            <div className="flex flex-col gap-2">
              <div 
                className="flex justify-between align-center p-3" 
                style={{ border: '1px solid var(--border-color)', borderRadius: '8px', cursor: 'pointer' }}
                onClick={() => onNavigate('SIPDetails')}
              >
                <div>
                  <div className="font-medium text-small">{data.sip.name}</div>
                  <div className="text-xs text-muted">₹{data.sip.amount.toLocaleString('en-IN')}/month • Value: ₹{data.sip.currentValue.toLocaleString('en-IN')}</div>
                </div>
                <span className="text-xs text-primary font-medium">Manage SIP →</span>
              </div>

              {data.otherInvestments && data.otherInvestments.map((inv) => (
                <div 
                  key={inv.id} 
                  className="flex justify-between align-center p-3" 
                  style={{ border: '1px solid var(--border-color)', borderRadius: '8px' }}
                >
                  <div>
                    <div className="font-medium text-small">{inv.name}</div>
                    <div className="text-xs text-muted">₹{inv.amount.toLocaleString('en-IN')}/month • Value: ₹{inv.currentValue.toLocaleString('en-IN')}</div>
                  </div>
                  <span className="text-xs text-muted">Active</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-muted" style={{ fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
            Projection based on your current plan and assumptions. Actual results may vary.
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
