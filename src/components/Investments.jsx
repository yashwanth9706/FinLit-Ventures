import React from 'react';
import Navbar from './Navbar';

const Investments = ({ data, onNavigate }) => {
  return (
    <>
      <Navbar currentScreen="Investments" onNavigate={onNavigate} userName={data.user.name} />

      <div className="platform-container">
        <div className="flex justify-between align-center mb-6">
          <div>
            <h1 style={{ fontSize: '1.625rem', fontWeight: 700, color: 'var(--text-primary)' }}>Your Investments</h1>
            <p className="text-secondary text-small">Manage active SIPs and mutual fund holdings</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-muted">Total Portfolio Value</span>
            <div className="font-bold text-success" style={{ fontSize: '1.25rem' }}>
              ₹{data.portfolio.currentValue.toLocaleString('en-IN')}
            </div>
          </div>
        </div>

        {/* Future Growth SIP Card */}
        <div className="card card-interactive mb-4" onClick={() => onNavigate('SIPDetails')}>
          <div className="flex justify-between align-center mb-3">
            <div>
              <span className="text-xs text-muted font-bold" style={{ letterSpacing: '0.05em' }}>EQUITY - FLEXI CAP</span>
              <h2 className="font-bold" style={{ fontSize: '1.125rem' }}>{data.sip.name}</h2>
            </div>
            <span className="status-badge status-success">{data.sip.status}</span>
          </div>

          <div className="grid-3 mb-4 p-3" style={{ backgroundColor: '#f8fafc', borderRadius: 'var(--border-radius-sm)' }}>
            <div>
              <div className="text-xs text-muted">Monthly SIP</div>
              <div className="font-semibold text-primary">₹{data.sip.amount.toLocaleString('en-IN')}</div>
            </div>
            <div>
              <div className="text-xs text-muted">SIP Value</div>
              <div className="font-semibold text-success">₹{data.sip.currentValue.toLocaleString('en-IN')}</div>
            </div>
            <div>
              <div className="text-xs text-muted">Next Installment</div>
              <div className="font-medium text-secondary">{data.sip.nextInstallmentDate}</div>
            </div>
          </div>

          <div className="flex justify-between align-center">
            <div className="text-xs text-muted">
              Linked Goal: <span className="font-medium text-secondary">{data.sip.linkedGoal}</span>
            </div>
            <button 
              className="btn btn-outline" 
              style={{ width: 'auto', padding: '6px 16px', fontSize: '0.875rem' }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('SIPDetails');
              }}
            >
              View SIP Details →
            </button>
          </div>
        </div>

        {/* Index Top 50 Growth Fund Card */}
        {data.otherInvestments && data.otherInvestments.map((inv) => (
          <div key={inv.id} className="card mb-4">
            <div className="flex justify-between align-center mb-3">
              <div>
                <span className="text-xs text-muted font-bold" style={{ letterSpacing: '0.05em' }}>{inv.category.toUpperCase()}</span>
                <h2 className="font-bold" style={{ fontSize: '1.125rem' }}>{inv.name}</h2>
              </div>
              <span className="status-badge status-success">{inv.status}</span>
            </div>

            <div className="grid-3 mb-4 p-3" style={{ backgroundColor: '#f8fafc', borderRadius: 'var(--border-radius-sm)' }}>
              <div>
                <div className="text-xs text-muted">Monthly SIP</div>
                <div className="font-semibold text-primary">₹{inv.amount.toLocaleString('en-IN')}</div>
              </div>
              <div>
                <div className="text-xs text-muted">Fund Value</div>
                <div className="font-semibold text-success">₹{inv.currentValue.toLocaleString('en-IN')}</div>
              </div>
              <div>
                <div className="text-xs text-muted">Next Installment</div>
                <div className="font-medium text-secondary">{inv.nextInstallmentDate}</div>
              </div>
            </div>

            <div className="flex justify-between align-center">
              <div className="text-xs text-muted">
                Linked Goal: <span className="font-medium text-secondary">{inv.linkedGoal}</span>
              </div>
              <span className="text-xs text-muted" style={{ fontStyle: 'italic' }}>
                Active regular plan
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Investments;
