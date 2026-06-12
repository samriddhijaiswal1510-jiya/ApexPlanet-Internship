# Task 4 — Hypothesis Testing & Statistical Analysis

## Objective
Perform statistical hypothesis testing on the Superstore Sales dataset to determine whether there is a significant difference in sales between product categories.

## Hypothesis
- **Null Hypothesis (H₀):** There is no significant difference in average sales between Technology and Furniture categories.
- **Alternate Hypothesis (H₁):** There is a significant difference in average sales between Technology and Furniture categories.

## Test Used
- **Welch's Two-Sample T-Test** (`ttest_ind` with `equal_var=False`)

## Files
| File | Description |
|------|-------------|
| `hypothesis_test.py` | Python script performing the T-Test |
| `train.csv` | Superstore Sales Dataset |
| `Task4_Sales_Analysis_Hypothesis_Testing.pdf` | Full analysis report with results and interpretation |

## Tools Used
- Python
- Pandas
- SciPy (`scipy.stats.ttest_ind`)

## Dataset
Superstore Sales Dataset (9,800 records)

## Results
Refer to `Task4_Sales_Analysis_Hypothesis_Testing.pdf` for the full statistical report including T-Statistic, P-Value, and conclusion.
