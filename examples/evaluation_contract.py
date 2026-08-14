"""Generic contracts for a human-in-the-loop model evaluation workflow.

This sample is intentionally independent from the private thesis codebase.
It contains no production prompts, grading policies, thresholds, or data.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Iterable


class ReviewStatus(str, Enum):
    MODEL_ACCEPTED = "model_accepted"
    HUMAN_REVIEW_REQUIRED = "human_review_required"
    HUMAN_CONFIRMED = "human_confirmed"


@dataclass(frozen=True)
class CriterionResult:
    criterion_id: str
    passed: bool
    evidence: str

    def __post_init__(self) -> None:
        if not self.criterion_id.strip():
            raise ValueError("criterion_id must not be empty")
        if not self.evidence.strip():
            raise ValueError("evidence must not be empty")


@dataclass(frozen=True)
class ModelAssessment:
    case_id: str
    score: float
    max_score: float
    confidence: float
    criteria: tuple[CriterionResult, ...] = field(default_factory=tuple)

    def __post_init__(self) -> None:
        if not self.case_id.strip():
            raise ValueError("case_id must not be empty")
        if self.max_score <= 0:
            raise ValueError("max_score must be positive")
        if not 0 <= self.score <= self.max_score:
            raise ValueError("score must be within [0, max_score]")
        if not 0 <= self.confidence <= 1:
            raise ValueError("confidence must be within [0, 1]")


@dataclass(frozen=True)
class ReviewDecision:
    case_id: str
    status: ReviewStatus
    final_score: float
    reason_tags: tuple[str, ...] = field(default_factory=tuple)


def build_review_decision(
    assessment: ModelAssessment,
    *,
    require_human_review: bool,
    reason_tags: Iterable[str] = (),
) -> ReviewDecision:
    """Create an auditable decision without embedding a scoring policy."""

    normalized_tags = tuple(
        dict.fromkeys(tag.strip() for tag in reason_tags if tag.strip())
    )
    status = (
        ReviewStatus.HUMAN_REVIEW_REQUIRED
        if require_human_review
        else ReviewStatus.MODEL_ACCEPTED
    )
    return ReviewDecision(
        case_id=assessment.case_id,
        status=status,
        final_score=assessment.score,
        reason_tags=normalized_tags,
    )
