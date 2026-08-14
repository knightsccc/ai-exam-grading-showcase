import unittest

from examples.evaluation_contract import (
    CriterionResult,
    ModelAssessment,
    ReviewStatus,
    build_review_decision,
)


class EvaluationContractTests(unittest.TestCase):
    def test_builds_human_review_decision_with_unique_tags(self) -> None:
        assessment = ModelAssessment(
            case_id="SYN-014-Q07",
            score=7.5,
            max_score=10,
            confidence=0.74,
            criteria=(
                CriterionResult(
                    criterion_id="method",
                    passed=True,
                    evidence="The response selected the correct method.",
                ),
            ),
        )

        decision = build_review_decision(
            assessment,
            require_human_review=True,
            reason_tags=("notation", "notation", "low-confidence"),
        )

        self.assertEqual(decision.status, ReviewStatus.HUMAN_REVIEW_REQUIRED)
        self.assertEqual(decision.reason_tags, ("notation", "low-confidence"))

    def test_rejects_out_of_range_confidence(self) -> None:
        with self.assertRaises(ValueError):
            ModelAssessment(
                case_id="SYN-001-Q01",
                score=1,
                max_score=2,
                confidence=1.2,
            )


if __name__ == "__main__":
    unittest.main()
