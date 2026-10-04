import React from 'react';
import Navbar from './Navbar';

const Dashboard = ({ data, onNavigate }) => {
  return (
    <>
      <Navbar currentScreen="Dashboard" onNavigate={onNavigate} userName={data.user.name} />

      <div className="platform-container">
        <div className="flex justify-between align-center mb-6">
          <div>
            <h1 style={{ fontSize: '1.625rem', fontWeight: 700 }}>Good evening, {data.user.name}</h1>
            <p className="text-secondary text-small">Welcome to your FinLit investment overview</p>
          </div>
        </div>

        {/* Portfolio Overview Card */}
        <div className="card mb-6">
          <div className="flex justify-between align-center mb-4">
            <h2 className="text-secondary text-small font-bold" style={{ letterSpacing: '0.05em' }}>PORTFOLIO OVERVIEW</h2>
            <span className="text-xs text-muted">Real-time aggregate</span>
          </div>

          <div className="grid-3 mb-6">
            <div>
              <div className="text-small text-muted mb-1">Total Invested</div>
              <div className="value-large" style={{ fontSize: '1.625rem' }}>₹{data.portfolio.totalInvested.toLocaleString('en-IN')}</div>
            </div>
            <div>
              <div className="text-small text-muted mb-1">Current Value</div>
              <div className="value-large text-success" style={{ fontSize: '1.625rem' }}>₹{data.portfolio.currentValue.toLocaleString('en-IN')}</div>
            </div>
            <div>
              <div className="text-small text-muted mb-1">Overall Returns</div>
              <div className="font-bold text-success" style={{ fontSize: '1.375rem' }}>
                +₹{data.portfolio.totalReturns.toLocaleString('en-IN')}
                <span className="text-xs ml-2 font-medium" style={{ backgroundColor: 'var(--success-bg)', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px' }}>
                  +{data.portfolio.returnsPercentage}%
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
            <div>
              <span className="font-bold">{data.portfolio.activeSIPsCount}</span> <span className="text-small text-muted">Active SIPs</span>
            </div>
            <div>
              <span className="font-bold">{data.portfolio.activeGoalsCount}</span> <span className="text-small text-muted">Active Goal</span>
            </div>
          </div>
        </div>

        <div className="grid-2 mb-6">
          {/* Active Investments Summary */}
          <div className="card" style={{ marginBottom: 0 }}>
            <div className="flex justify-between align-center mb-4">
              <h2 className="font-bold" style={{ fontSize: '1.125rem' }}>Active Investments</h2>
              <button 
                className="text-xs text-primary font-bold" 
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => onNavigate('Investments')}
              >
                View All ({data.portfolio.activeSIPsCount}) →
              </button>
            </div>

            <div className="p-3 mb-3" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', backgroundColor: '#f8fafc' }}>
              <div className="flex justify-between align-center mb-1">
                <span className="font-bold text-small">{data.sip.name}</span>
                <span className="status-badge status-success">{data.sip.status}</span>
              </div>
              <div className="flex justify-between text-xs text-secondary mb-2">
                <span>₹{data.sip.amount.toLocaleString('en-IN')}/mo</span>
                <span>Value: ₹{data.sip.currentValue.toLocaleString('en-IN')}</span>
              </div>
              <button 
                className="btn btn-outline" 
                style={{ padding: '6px 12px', fontSize: '0.8125rem' }}
                onClick={() => onNavigate('SIPDetails')}
              >
                View SIP Details
              </button>
            </div>

            {data.otherInvestments && data.otherInvestments.map((inv) => (
              <div key={inv.id} className="p-3" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)' }}>
                <div className="flex justify-between align-center mb-1">
                  <span className="font-medium text-small">{inv.name}</span>
                  <span className="status-badge status-success">{inv.status}</span>
                </div>
                <div className="flex justify-between text-xs text-secondary">
                  <span>₹{inv.amount.toLocaleString('en-IN')}/mo</span>
                  <span>Value: ₹{inv.currentValue.toLocaleString('en-IN')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Active Goals Summary */}
          <div className="card" style={{ marginBottom: 0 }}>
            <div className="flex justify-between align-center mb-4">
              <h2 className="font-bold" style={{ fontSize: '1.125rem' }}>Financial Goals</h2>
              <button 
                className="text-xs text-primary font-bold" 
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => onNavigate('Goals')}
              >
                View Goal →
              </button>
            </div>

            <div className="p-4" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', backgroundColor: '#f8fafc' }}>
              <div className="flex justify-between align-center mb-2">
                <span className="font-bold text-small">{data.goal.name}</span>
                <span className="text-xs text-success font-semibold">{data.goal.tentativeProjectionDate}</span>
              </div>
              
              <div className="progress-bar-container mb-2">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${data.goal.progressPercentage}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-xs text-secondary">
                <span>Target: ₹{data.goal.targetAmount.toLocaleString('en-IN')}</span>
                <span>{data.goal.progressPercentage}% Saved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="card">
          <h2 className="font-bold mb-4" style={{ fontSize: '1.125rem' }}>Recent Activity</h2>

          <div className="flex flex-col gap-3">
            {data.recentActivities.map((act) => (
              <div key={act.id} className="flex justify-between align-center pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <div className="flex align-center gap-3">
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: act.type === 'credit' ? 'var(--success-bg)' : '#ebf8ff',
                    color: act.type === 'credit' ? 'var(--success)' : 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700
                  }}>
                    {act.type === 'credit' ? '↓' : 'ℹ'}
                  </div>
                  <div>
                    <div className="font-medium text-small">{act.title}</div>
                    <div className="text-xs text-muted">{act.description}</div>
                  </div>
                </div>
                <div className="text-xs text-muted">{act.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
