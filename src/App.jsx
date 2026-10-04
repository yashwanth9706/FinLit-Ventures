import React, { useState } from 'react';
import { SCENARIOS, getMockData } from './store/MockData';

// Components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Investments from './components/Investments';
import Goals from './components/Goals';
import Profile from './components/Profile';
import SIPDetails from './components/SIPDetails';
import PauseSIPInit from './components/PauseSIPInit';
import CopilotEligibility from './components/CopilotEligibility';
import CopilotImpact from './components/CopilotImpact';
import PauseConfirmation from './components/PauseConfirmation';
import SuccessState from './components/SuccessState';
import CopilotIneligible from './components/CopilotIneligible';

function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [scenario, setScenario] = useState(SCENARIOS.CASE_1);

  const data = getMockData(scenario);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <Login onNavigate={setCurrentScreen} />;
      case 'Dashboard':
        return <Dashboard data={data} onNavigate={setCurrentScreen} />;
      case 'Investments':
        return <Investments data={data} onNavigate={setCurrentScreen} />;
      case 'Goals':
        return <Goals data={data} onNavigate={setCurrentScreen} />;
      case 'Profile':
        return <Profile data={data} onNavigate={setCurrentScreen} />;
      case 'SIPDetails':
        return <SIPDetails data={data} onNavigate={setCurrentScreen} />;
      case 'PauseSIPInit':
        return <PauseSIPInit data={data} onNavigate={setCurrentScreen} />;
      case 'CopilotEligibility':
        return <CopilotEligibility data={data} onNavigate={setCurrentScreen} />;
      case 'CopilotImpact':
        return <CopilotImpact data={data} onNavigate={setCurrentScreen} />;
      case 'PauseConfirmation':
        return <PauseConfirmation data={data} onNavigate={setCurrentScreen} />;
      case 'SuccessState':
        return <SuccessState data={data} onNavigate={setCurrentScreen} />;
      case 'CopilotIneligible':
        return <CopilotIneligible data={data} onNavigate={setCurrentScreen} />;
      default:
        return <Login onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <>
      {renderScreen()}

      {/* Demo & Prototype Evaluation Control */}
      <div className="case-switcher" title="Prototype Testing (Demo Control)">
        <span style={{ fontSize: '0.6875rem', color: '#a0aec0', fontWeight: 700, letterSpacing: '0.05em' }}>
          DEMO CONTROL
        </span>
        <select 
          id="scenario-select"
          title="Select prototype testing scenario"
          aria-label="Prototype testing scenario selector"
          value={scenario} 
          onChange={(e) => {
            setScenario(e.target.value);
            // Reset to Dashboard if inside copilot flow to ensure clean test state
            if (currentScreen.startsWith('Pause') || currentScreen.startsWith('Copilot')) {
              setCurrentScreen('Dashboard');
            }
          }}
        >
          <option value={SCENARIOS.CASE_1}>Scenario 1: First-time Pause (0 used)</option>
          <option value={SCENARIOS.CASE_2}>Scenario 2: Previous Pause Used (1 used)</option>
          <option value={SCENARIOS.CASE_3}>Scenario 3: Pause Unavailable (Notice period closed)</option>
        </select>
      </div>
    </>
  );
}

export default App;
