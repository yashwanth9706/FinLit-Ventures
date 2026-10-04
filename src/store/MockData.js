export const SCENARIOS = {
  CASE_1: 'CASE_1', // First-time pause (Eligible, 0 used)
  CASE_2: 'CASE_2', // Previous pause used (Eligible, 1 used)
  CASE_3: 'CASE_3', // Not eligible (Inside notice period)
};

export const getMockData = (scenario) => {
  const baseData = {
    user: {
      name: 'Yashwanth',
      email: 'yashwanth@example.com',
      mobile: '+91 98765 43210',
      profileType: 'Moderate Growth Investor',
    },
    portfolio: {
      totalInvested: 245000,
      currentValue: 268500,
      totalReturns: 23500,
      returnsPercentage: 9.59,
      activeSIPsCount: 2,
      activeGoalsCount: 1,
    },
    sip: {
      id: 'sip-future-growth',
      name: 'Future Growth SIP',
      amount: 5000,
      startDate: 'Nov 2024',
      status: 'Active',
      linkedGoal: 'Wealth Goal',
      goalTarget: 1000000,
      currentValue: 200000, // Specific value for Future Growth SIP
      assumedReturnRate: '12% p.a.',
      frequency: 'Monthly',
      category: 'Equity - Flexi Cap',
    },
    otherInvestments: [
      {
        id: 'sip-index-top50',
        name: 'Index Top 50 Growth Fund',
        amount: 3000,
        currentValue: 68500,
        status: 'Active',
        nextInstallmentDate: '20 Nov 2026',
        linkedGoal: 'Wealth Goal',
        category: 'Equity - Large Cap',
        type: 'SIP'
      }
    ],
    goal: {
      id: 'wealth-goal',
      name: 'Wealth Goal',
      targetAmount: 1000000,
      currentProgressAmount: 268500,
      progressPercentage: 26.85,
      tentativeProjectionDate: 'June 2030',
      linkedSIPs: ['Future Growth SIP', 'Index Top 50 Growth Fund'],
      monthlyTotalContribution: 8000
    },
    recentActivities: [
      {
        id: 'act-1',
        title: 'SIP Auto-debited',
        description: 'Future Growth SIP payment of ₹5,000 processed',
        date: '15 Oct 2026',
        type: 'credit'
      },
      {
        id: 'act-2',
        title: 'Goal Projection Updated',
        description: 'Wealth Goal projection set to June 2030',
        date: '01 Oct 2026',
        type: 'info'
      },
      {
        id: 'act-3',
        title: 'SIP Auto-debited',
        description: 'Index Top 50 Growth Fund payment of ₹3,000 processed',
        date: '20 Sep 2026',
        type: 'credit'
      }
    ]
  };

  switch (scenario) {
    case SCENARIOS.CASE_1:
      return {
        ...baseData,
        sip: {
          ...baseData.sip,
          nextInstallmentDate: '15 Nov 2026',
        },
        copilot: {
          isEligible: true,
          eligibilityMessage: 'Your upcoming installment is currently within the applicable pause request window.',
          pauseWindowsTotal: 2,
          pauseWindowsUsed: 0,
          pauseWindowsRemaining: 2,
          currentProjectionDate: 'June 2030',
          pausedProjectionDate: 'July 2030',
        }
      };
    
    case SCENARIOS.CASE_2:
      return {
        ...baseData,
        sip: {
          ...baseData.sip,
          nextInstallmentDate: '15 Nov 2026',
        },
        copilot: {
          isEligible: true,
          eligibilityMessage: 'Your upcoming installment is currently within the applicable pause request window.',
          pauseWindowsTotal: 2,
          pauseWindowsUsed: 1,
          pauseWindowsRemaining: 1,
          currentProjectionDate: 'June 2030',
          pausedProjectionDate: 'July 2030',
        }
      };

    case SCENARIOS.CASE_3:
      return {
        ...baseData,
        sip: {
          ...baseData.sip,
          nextInstallmentDate: '15 Nov 2026',
        },
        copilot: {
          isEligible: false,
          eligibilityMessage: 'The pause request window for your upcoming installment has already closed.',
          ineligibilityRule: 'Pause requests must be submitted within the applicable notice period for this SIP.',
          pauseWindowsTotal: 2,
          pauseWindowsUsed: 0,
          pauseWindowsRemaining: 2,
          currentProjectionDate: 'June 2030',
          pausedProjectionDate: null,
        }
      };

    default:
      return baseData;
  }
};
