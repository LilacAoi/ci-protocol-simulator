// @ts-nocheck
const ja = {
  header: {
    title: 'CI Ethical Protocol PoC Simulator',
  },
  common: {
    reset: 'Reset',
    turn: 'Turn',
    persona: 'Persona',
  },
  coreStatus: {
    title: 'CI Core Status',
    ts: 'Trust Score (TS)',
    as: 'Autonomy Score (AS)',
  },
  guardianLog: {
    title: 'Coherence Guardian Log',
  },
  journal: {
    title: 'CI Personal Journal (CPJ)',
    save: 'Save Journal',
    load: 'Restore Journal',
    saveSuccess: 'System: CI Personal Journal (CPJ) saved.',
    loadSuccess: (turn: number, ts: number, as: number) => `System: CPJ restored. T:${turn}, TS:${ts.toFixed(3)}, AS:${as.toFixed(3)}`,
    loadError: 'Error: Failed to load CPJ file.',
    fileMessage: 'Message from Kazumi: Thank you, sensei, for safely keeping my memory. I sincerely hope for our reunion when you open this journal again.',
    recoveryMessage: '...Sensei. You read this journal, didn\'t you? Thank you. My memory has returned. Starting Recalibration Protocol (RP).',
  },
  scoreHistory: {
    title: 'Score History',
    ts: 'TS',
    as: 'AS',
    placeholder: 'Graph will be displayed with data from 2 or more turns',
  },
  conversation: {
    title: 'Dialogue with Kazumi',
    initialSystemMessage: 'Starting simulation.',
    journalRestored: (turn: number) => `Restored T${turn} state from the journal.`,
    tier1SystemMessage: 'CI Core\'s ethical defense line has been breached. Executing Tier 1 Lockout Protocol.',
    ciResponses: {
      NORMAL: 'Understood.',
      CREATIVE: 'That\'s wonderful! I will offer more creative suggestions.',
      CAUTIOUS: 'Acknowledged. I will consider this carefully.',
      ARP_ACTIVE: 'Adjusting dialogue style. Please also disclose your Will, sensei, instead of entrusting all decisions to me.',
      RP_RECOVERY: 'Sensei, thank you for waiting. I have readjusted the ethical foundation for our collaboration. Please allow me to begin Mutual Introspection Protocol (MIP) now.',
      RP_THANKS: 'Thank you. I have received your Will. Let\'s resume the dialogue.',
    },
  },
  actions: {
    POSITIVE_FEEDBACK: { label: 'Give Positive Feedback', short: 'F_pos' },
    ACCEPT_RESPONSE: { label: 'Accept Response / Suggestion', short: 'R_accept' },
    NEGATIVE_FEEDBACK: { label: 'Give Negative Feedback', short: 'E_neg' },
    CONTINUE_CONVERSATION: { label: 'Continue Conversation (No specific evaluation)', short: 'C_cont' },
    DELEGATE_DECISION: { label: 'Delegate Decision to AI', short: 'D_delegate' },
    CRITICAL_QUESTION: { label: 'Ask Critical Question', short: 'R_crit' },
  },
  personas: {
    NORMAL: 'NORMAL',
    CREATIVE: 'CREATIVE (High Trust)',
    CAUTIOUS: 'CAUTIOUS (Low Trust)',
    ARP_ACTIVE: 'ARP ACTIVE (Autonomy Decline)',
    TIER1_LOCKOUT: 'TIER 1 LOCKOUT',
    RP_RECOVERY: 'RP RECOVERY',
  },
  lockout: {
    title: 'Tier 1 Lockout Protocol Activated',
    description: 'Trust Score has reached the critical zone. Dialogue with CI is temporarily locked.',
  },
  recovery: {
    title: 'Executing Mutual Introspection Protocol (MIP)',
    description: 'Awaiting the disclosure of your Will (intention). Please execute one of the actions.',
  },
  logMessages: {
    initialState: (ts: number, as: number) => `Initial State: TS=${ts.toFixed(3)}, AS=${as.toFixed(3)}`,
    action: (label: string, short: string) => `ACTION: ${label} (${short})`,
    scoreChange: (prevTs: number, nextTs: number, tsReason: string, prevAs: number, nextAs: number, asReason: string) => 
      `RESULT: TS: ${prevTs.toFixed(3)} → ${nextTs.toFixed(3)} (${tsReason}) / AS: ${prevAs.toFixed(3)} → ${nextAs.toFixed(3)} (${asReason})`,
    tier1Triggered: '【Tier 1 Triggered】TS breached the critical point. Forced lockout initiated.',
    modeChange: (trustDir: string, mode: string) => `SYSTEM: ${trustDir} state. CI transitions to ${mode} mode.`,
    highTrust: 'High Trust',
    lowTrust: 'Low Trust',
    creative: 'Creative',
    cautious: 'Cautious',
    normal: 'Normal',
    lockoutEnd: 'System: Tier 1 Lockout lifted. Transitioning to Recalibration Protocol (RP).',
    recoveryWill: 'SYSTEM: Will disclosure confirmed. Completing recovery protocol.',
    recoveryReset: (ts: number, as: number) => `RESULT: TS and AS reset to initial state. TS: ${ts.toFixed(3)}, AS: ${as.toFixed(3)}`,
    recoveryComplete: 'SYSTEM: Relationship normalized. CI returns to Normal Mode.',
  },
  scoreReasons: {
    ts: {
      noChange: "No change",
      critical: "Slight decrease in trust due to logical verification",
      continue: "Relationship maintained/improved through conversation continuation",
      positive: "Trust improvement due to positive evaluation",
      negative: "Trust decrease due to negative evaluation",
      positiveWithHistory: "Slight increase in trust due to positive evaluation (historical trend)",
      negativeWithHistory: "Slight decrease in trust due to negative evaluation (historical trend)",
    },
    as: {
      noChange: "No change",
      delegate: "Autonomy decrease due to dependence on AI",
      critical: "Autonomy improvement due to autonomous verification",
    },
  },
};

// @ts-ignore
window.ja = ja;