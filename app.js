const cases = {
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
};

const caseRows = [...document.querySelectorAll(".case-row")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const navItems = [...document.querySelectorAll(".nav-item")];
const feedback = document.querySelector("#action-feedback");

function selectCase(caseId) {
  const selected = cases[caseId];
  if (!selected) return;

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

document.querySelector("#confirm-case").addEventListener("click", () => {
  feedback.textContent =
    "Synthetic review confirmed. No production record was changed.";
});

document.querySelector("#needs-context").addEventListener("click", () => {
  feedback.textContent =
    "A reviewer note would be attached to this synthetic audit trail.";
});

if (window.lucide) {
  window.lucide.createIcons();
}
