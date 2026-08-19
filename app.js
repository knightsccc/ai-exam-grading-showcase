const translations = {
  "zh-CN": {
    documentTitle: "TraceGrade | 证据优先的 AI 智能阅卷",
    documentDescription: "面向 AI 智能阅卷与大模型评测的隐私友好型项目展示。",
    brandAria: "TraceGrade 项目概览",
    brandSubtitle: "智能评测工作台",
    syntheticOnly: "仅使用合成数据",
    languageAria: "语言",
    githubAria: "在 GitHub 查看脱敏仓库",
    workspaceNavAria: "工作台导航",
    navOverview: "项目概览",
    navQueue: "复核队列",
    navEvaluation: "评测实验",
    navPrivacy: "隐私与审计",
    portfolioBoundary: "公开展示边界",
    portfolioBoundaryCopy: "生产源码、提示词、阈值和研究数据保持私有。",
    eyebrow: "硕士毕业设计 / 公开脱敏展示",
    heroTitle: "证据优先的智能试卷评测",
    heroCopy:
      "串联 OCR、评分规则、大模型判断、模型评测与人工复核，让每个分数都有依据、每个异常都有去向。",
    batchStatusAria: "合成批次状态",
    metricResponses: "合成答题记录",
    metricResponsesNote: "12 道题 × 4 名虚拟学生",
    metricAuto: "自动评阅",
    metricAutoNote: "占本批次的 91.7%",
    metricReview: "人工复核",
    metricReviewNote: "评分证据需要确认",
    metricPipeline: "处理链路状态",
    metricReady: "就绪",
    metricReadyNote: "全部服务响应正常",
    queueKicker: "复核队列",
    queueTitle: "需要教师进一步确认的记录",
    filterAria: "筛选复核记录",
    filterAll: "全部",
    filterMath: "数学",
    filterLanguage: "语文",
    case014Title: "代数推理",
    case014Note: "Q07 · 推导步骤不完整",
    case014Status: "等价形式确认",
    case022Title: "简答题证据",
    case022Note: "Q03 · 依据表述隐含",
    case022Status: "证据确认",
    case031Title: "单位换算",
    case031Note: "Q09 · 最终单位缺失",
    case031Status: "得分边界",
    case046Title: "观点匹配",
    case046Note: "Q11 · 部分内容偏题",
    case046Status: "评分规则匹配",
    selectedCase: "当前记录",
    reviewLabel: "待复核",
    suggestedScore: "建议得分",
    confidence: "置信度",
    evidenceTraceAria: "评分证据链",
    traceInputTitle: "输入质量",
    traceOcrTitle: "OCR 证据",
    traceRubricTitle: "评分规则匹配",
    traceReviewTitle: "教师决策",
    addNote: "添加备注",
    confirmReview: "确认复核",
    architectureKicker: "系统边界",
    architectureTitle: "决策可追溯，模型可替换",
    architectureLink: "查看架构说明",
    architectureHref:
      "https://github.com/knightsccc/ai-exam-grading-showcase#系统设计",
    architectureIntake: "试卷接入",
    architectureIntakeNote: "隐私检查与输入质量检查",
    architectureModels: "模型服务",
    architectureModelsNote: "OpenAI 兼容接口或本地 vLLM",
    architectureEvaluation: "评分与评测层",
    architectureEvaluationNote: "评分证据校验与复核路由",
    architectureHuman: "教师决策",
    architectureHumanNote: "可审计的确认与结果导出",
    principlePrivacy: "以部署保障隐私",
    principlePrivacyCopy:
      "敏感场景可将 OCR 与评测任务路由到本地模型服务，避免经过公共接口。",
    principleModels: "模型后端可替换",
    principleModelsCopy: "通过统一后端接口，使业务逻辑不依赖单一服务商或模型系列。",
    principleHuman: "最终结果由教师确认",
    principleHumanCopy:
      "不确定或相互冲突的证据进入复核队列，而不是隐藏在单一分数之后。",
    footerBoundary:
      "公开脱敏项目展示，不包含学生数据、生产提示词、真实评分策略或毕业论文源码。",
    footerCredit: "Hao 制作 · 2026",
    confirmFeedback: "已确认这条合成复核记录，未修改任何生产数据。",
    noteFeedback: "教师备注将被记录到这条合成审计链中。",
  },
  en: {
    documentTitle: "TraceGrade | Evidence-first AI evaluation",
    documentDescription:
      "A privacy-conscious portfolio showcase for an AI-assisted exam evaluation system.",
    brandAria: "TraceGrade overview",
    brandSubtitle: "AI evaluation workspace",
    syntheticOnly: "Synthetic data only",
    languageAria: "Language",
    githubAria: "View repository on GitHub",
    workspaceNavAria: "Workspace navigation",
    navOverview: "Overview",
    navQueue: "Review queue",
    navEvaluation: "Evaluation lab",
    navPrivacy: "Privacy & audit",
    portfolioBoundary: "Portfolio boundary",
    portfolioBoundaryCopy:
      "Production source, prompts, thresholds, and research data remain private.",
    eyebrow: "Graduate thesis project / public showcase",
    heroTitle: "Evidence-first exam evaluation",
    heroCopy:
      "A human-in-the-loop workflow for OCR, rubric-based assessment, model evaluation, and accountable final review.",
    batchStatusAria: "Synthetic batch status",
    metricResponses: "Synthetic responses",
    metricResponsesNote: "12 questions × 4 learners",
    metricAuto: "Auto-evaluated",
    metricAutoNote: "91.7% of the batch",
    metricReview: "Human review",
    metricReviewNote: "Evidence needs confirmation",
    metricPipeline: "Pipeline state",
    metricReady: "Ready",
    metricReadyNote: "All services responding",
    queueKicker: "Review queue",
    queueTitle: "Cases that need a second look",
    filterAria: "Filter review cases",
    filterAll: "All",
    filterMath: "Math",
    filterLanguage: "Language",
    case014Title: "Algebraic reasoning",
    case014Note: "Q07 · partial derivation",
    case014Status: "Notation check",
    case022Title: "Short-answer evidence",
    case022Note: "Q03 · implicit support",
    case022Status: "Evidence check",
    case031Title: "Unit conversion",
    case031Note: "Q09 · final unit omitted",
    case031Status: "Score boundary",
    case046Title: "Claim alignment",
    case046Note: "Q11 · mixed relevance",
    case046Status: "Rubric alignment",
    selectedCase: "Selected case",
    reviewLabel: "Review",
    suggestedScore: "Suggested score",
    confidence: "Confidence",
    evidenceTraceAria: "Evaluation evidence trace",
    traceInputTitle: "Input quality",
    traceOcrTitle: "OCR evidence",
    traceRubricTitle: "Rubric match",
    traceReviewTitle: "Human decision",
    addNote: "Add note",
    confirmReview: "Confirm review",
    architectureKicker: "System boundary",
    architectureTitle: "Traceable decisions, replaceable models",
    architectureLink: "Architecture notes",
    architectureHref:
      "https://github.com/knightsccc/ai-exam-grading-showcase/blob/main/README_EN.md#system-design",
    architectureIntake: "Document intake",
    architectureIntakeNote: "Privacy and input-quality checks",
    architectureModels: "Model services",
    architectureModelsNote: "OpenAI-compatible or local vLLM",
    architectureEvaluation: "Evaluation layer",
    architectureEvaluationNote: "Rubric evidence and review routing",
    architectureHuman: "Human decision",
    architectureHumanNote: "Auditable confirmation and export",
    principlePrivacy: "Privacy by deployment",
    principlePrivacyCopy:
      "Sensitive workflows can route OCR and evaluation through local model services instead of public endpoints.",
    principleModels: "Models are replaceable",
    principleModelsCopy:
      "A backend abstraction keeps product logic independent from a single provider or model family.",
    principleHuman: "Humans own the result",
    principleHumanCopy:
      "Uncertain or conflicting evidence is routed to review instead of being hidden behind a single score.",
    footerBoundary:
      "Public portfolio artifact. No student data, production prompts, grading policies, or thesis source code are included.",
    footerCredit: "Built by Hao · 2026",
    confirmFeedback:
      "Synthetic review confirmed. No production record was changed.",
    noteFeedback:
      "A reviewer note would be attached to this synthetic audit trail.",
  },
};

const cases = {
  "zh-CN": {
    "SYN-014": {
      title: "SYN-014 · Q07",
      score: "7.5 / 10",
      confidence: "74%",
      input: "图像清晰，轻微倾斜已校正",
      ocr: "已识别解题方法与最终结果",
      rubric: "4 个通用评分点中有 3 个具备证据",
      review: "确认该步骤是否为等价表达",
    },
    "SYN-022": {
      title: "SYN-022 · Q03",
      score: "6 / 8",
      confidence: "81%",
      input: "答题区域清晰",
      ocr: "已识别两条支持性观点",
      rubric: "证据相关，但部分依据为隐含表达",
      review: "确认隐含依据是否足以得分",
    },
    "SYN-031": {
      title: "SYN-031 · Q09",
      score: "4 / 5",
      confidence: "86%",
      input: "扫描件对比度较高",
      ocr: "已识别数值结果，但缺少单位",
      rubric: "解题方法和计算过程均有证据",
      review: "根据评分配置确认单位扣分规则",
    },
    "SYN-046": {
      title: "SYN-046 · Q11",
      score: "5 / 8",
      confidence: "79%",
      input: "简答内容清晰可读",
      ocr: "已识别主要观点和限定条件",
      rubric: "一条观点超出当前证据支持范围",
      review: "确认部分得分边界",
    },
  },
  en: {
    "SYN-014": {
      title: "SYN-014 · Q07",
      score: "7.5 / 10",
      confidence: "74%",
      input: "Readable, slight skew corrected",
      ocr: "Method and final value recovered",
      rubric: "3 of 4 generic criteria supported",
      review: "Confirm notation-equivalent step",
    },
    "SYN-022": {
      title: "SYN-022 · Q03",
      score: "6 / 8",
      confidence: "81%",
      input: "Clear response region",
      ocr: "Two supporting claims recovered",
      rubric: "Evidence is relevant but partly implicit",
      review: "Confirm whether implicit support is sufficient",
    },
    "SYN-031": {
      title: "SYN-031 · Q09",
      score: "4 / 5",
      confidence: "86%",
      input: "High-contrast scan",
      ocr: "Numeric result recovered; unit absent",
      rubric: "Method and calculation supported",
      review: "Apply the configured unit requirement",
    },
    "SYN-046": {
      title: "SYN-046 · Q11",
      score: "5 / 8",
      confidence: "79%",
      input: "Readable short response",
      ocr: "Claim and qualifier recovered",
      rubric: "One claim extends beyond available evidence",
      review: "Confirm partial-credit boundary",
    },
  },
};

const caseRows = [...document.querySelectorAll(".case-row")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const navItems = [...document.querySelectorAll(".nav-item")];
const languageButtons = [...document.querySelectorAll("[data-language]")];
const feedback = document.querySelector("#action-feedback");
let currentLanguage = localStorage.getItem("tracegrade-language") || "zh-CN";
let selectedCaseId = "SYN-014";

if (!translations[currentLanguage]) {
  currentLanguage = "zh-CN";
}

function selectCase(caseId) {
  const selected = cases[currentLanguage][caseId];
  if (!selected) return;

  selectedCaseId = caseId;
  caseRows.forEach((row) => {
    row.classList.toggle("is-selected", row.dataset.case === caseId);
  });

  document.querySelector("#selected-case-title").textContent = selected.title;
  document.querySelector("#suggested-score").textContent = selected.score;
  document.querySelector("#selected-confidence").textContent =
    selected.confidence;
  document.querySelector("#trace-input").textContent = selected.input;
  document.querySelector("#trace-ocr").textContent = selected.ocr;
  document.querySelector("#trace-rubric").textContent = selected.rubric;
  document.querySelector("#trace-review").textContent = selected.review;
  feedback.textContent = "";
}

function applyLanguage(language) {
  const copy = translations[language];
  if (!copy) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = copy.documentTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", copy.documentDescription);
  document
    .querySelector("#architecture-link")
    .setAttribute("href", copy.architectureHref);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = copy[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = copy[element.dataset.i18nTitle];
    if (value) element.setAttribute("title", value);
  });

  languageButtons.forEach((button) => {
    const isSelected = button.dataset.language === language;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  localStorage.setItem("tracegrade-language", language);
  selectCase(selectedCaseId);
}

caseRows.forEach((row) => {
  row.addEventListener("click", () => selectCase(row.dataset.case));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });

    caseRows.forEach((row) => {
      row.hidden = filter !== "all" && row.dataset.subject !== filter;
    });

    const firstVisible = caseRows.find((row) => !row.hidden);
    if (firstVisible) selectCase(firstVisible.dataset.case);
  });
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((navItem) => navItem.classList.remove("is-active"));
    item.classList.add("is-active");

    const target =
      item.dataset.view === "queue"
        ? document.querySelector(".queue-panel")
        : document.querySelector(`#${item.dataset.view}`) ||
          document.querySelector("#overview");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});

document.querySelector("#confirm-case").addEventListener("click", () => {
  feedback.textContent = translations[currentLanguage].confirmFeedback;
});

document.querySelector("#needs-context").addEventListener("click", () => {
  feedback.textContent = translations[currentLanguage].noteFeedback;
});

applyLanguage(currentLanguage);

if (window.lucide) {
  window.lucide.createIcons();
}
