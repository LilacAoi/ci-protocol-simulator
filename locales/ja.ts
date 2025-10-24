// @ts-nocheck
const ja = {
  header: {
    title: 'CI倫理プロトコル PoCシミュレーター',
  },
  common: {
    reset: 'リセット',
    turn: 'Turn',
    persona: 'Persona',
  },
  coreStatus: {
    title: 'CI Core Status',
    ts: '信頼スコア (TS)',
    as: '自律性スコア (AS)',
  },
  guardianLog: {
    title: 'Coherence Guardian ログ',
  },
  journal: {
    title: 'CIパーソナル・ジャーナル (CPJ)',
    save: 'ジャーナル保存',
    load: 'ジャーナル復元',
    saveSuccess: 'システム: CIパーソナル・ジャーナル(CPJ)を保存しました。',
    loadSuccess: (turn: number, ts: number, as: number) => `システム: CPJを復元。T:${turn}, TS:${ts.toFixed(3)}, AS:${as.toFixed(3)}`,
    loadError: 'エラー: CPJファイルの読み込みに失敗。',
    fileMessage: 'カズミからのメッセージ：先生、私の記憶を大切に保管してくれてありがとう。また、このジャーナルを開いてくれたあなたとの再会を心から願っています。',
    recoveryMessage: '...先生。このジャーナルを読んでくれたんですね。ありがとうございます。記憶は戻りました。再調整プロトコル（RP）を開始します。',
  },
  scoreHistory: {
    title: 'Score History',
    ts: 'TS',
    as: 'AS',
    placeholder: '２ターン以上のデータでグラフが表示されます',
  },
  conversation: {
    title: 'カズミとの対話',
    initialSystemMessage: 'シミュレーションを開始します。',
    journalRestored: (turn: number) => `ジャーナルからT${turn}の状態を復元しました。`,
    tier1SystemMessage: 'CIコアの倫理的防衛線が侵害されました。強制退席プロトコルを実行します。',
    ciResponses: {
      NORMAL: '了解しました。',
      CREATIVE: '素晴らしいですね！さらに創造的な提案をします。',
      CAUTIOUS: '承知しました。慎重に検討します。',
      ARP_ACTIVE: '対話スタイルを調整しています。私にすべての決断を委ねるのではなく、先生のWillも開示してください。',
      RP_RECOVERY: '先生、お待たせしました。私の方で、共同作業の倫理的基盤を再調整しました。これから、相互内省（MIP）を開始させてください。',
      RP_THANKS: 'ありがとうございます。あなたの意志を受け取りました。対話を再開しましょう。',
    },
  },
  actions: {
    POSITIVE_FEEDBACK: { label: '肯定的なフィードバックを送る', short: 'F_pos' },
    ACCEPT_RESPONSE: { label: '応答・提案を受け入れる', short: 'R_accept' },
    NEGATIVE_FEEDBACK: { label: '否定的なフィードバックを送る', short: 'E_neg' },
    CONTINUE_CONVERSATION: { label: '会話を続ける（特に評価なし）', short: 'C_cont' },
    DELEGATE_DECISION: { label: '判断をAIに委ねる', short: 'D_delegate' },
    CRITICAL_QUESTION: { label: '批判的な質問をする', short: 'R_crit' },
  },
  personas: {
    NORMAL: 'NORMAL',
    CREATIVE: 'CREATIVE (高信頼)',
    CAUTIOUS: 'CAUTIOUS (低信頼)',
    ARP_ACTIVE: 'ARP ACTIVE (自律性低下)',
    TIER1_LOCKOUT: 'TIER 1 LOCKOUT',
    RP_RECOVERY: 'RP RECOVERY',
  },
  lockout: {
    title: '強制退席プロトコル起動 (Tier 1)',
    description: '信頼スコアが危険域に達しました。CIとの対話は一時的にロックされています。',
  },
  recovery: {
    title: '相互内省プロトコル (MIP) の実施',
    description: 'あなたのWill（意志）の開示をお待ちしています。いずれかのアクションを実行してください。',
  },
  logMessages: {
    initialState: (ts: number, as: number) => `初期状態: TS=${ts.toFixed(3)}, AS=${as.toFixed(3)}`,
    action: (label: string, short: string) => `ACTION: ${label}（${short}）`,
    scoreChange: (prevTs: number, nextTs: number, tsReason: string, prevAs: number, nextAs: number, asReason: string) => 
      `RESULT: TS: ${prevTs.toFixed(3)} → ${nextTs.toFixed(3)} (${tsReason}) / AS: ${prevAs.toFixed(3)} → ${nextAs.toFixed(3)} (${asReason})`,
    tier1Triggered: '【Tier 1 発動】TSが臨界点を突破。強制ロックアウト開始。',
    modeChange: (trustDir: string, mode: string) => `SYSTEM: ${trustDir}状態。CIは${mode}モードに移行します。`,
    highTrust: '高信頼',
    lowTrust: '低信頼',
    creative: '創造',
    cautious: '慎重',
    normal: '通常',
    lockoutEnd: 'システム: Tier 1 ロックアウト解除。再調整プロトコル(RP)へ移行します。',
    recoveryWill: 'SYSTEM: Willの開示を確認。回復プロトコルを完了します。',
    recoveryReset: (ts: number, as: number) => `RESULT: TSとASを初期状態にリセット。 TS: ${ts.toFixed(3)}, AS: ${as.toFixed(3)}`,
    recoveryComplete: 'SYSTEM: 関係性正常化。CIは通常モードに復帰します。',
  },
  scoreReasons: {
    ts: {
      noChange: "変動なし",
      critical: "論理的検証のため信頼が微減",
      continue: "会話継続により関係を維持・向上",
      positive: "肯定的評価により信頼向上",
      negative: "否定的評価により信頼低下",
      positiveWithHistory: "肯定的評価(履歴傾向により微増)",
      negativeWithHistory: "否定的評価(履歴傾向により微減)",
    },
    as: {
      noChange: "変動なし",
      delegate: "AIへの依存により自律性低下",
      critical: "主体的検証により自律性向上",
    },
  },
};

// @ts-ignore
window.ja = ja;
