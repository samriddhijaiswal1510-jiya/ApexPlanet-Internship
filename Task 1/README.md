# Task 1 — Data Cleaning & Preprocessing

## Objective
Clean and preprocess the Amazon Product Sales dataset to produce a reliable, analysis-ready CSV with well-defined columns and engineered features.

---

## Dataset
| Property | Value |
|----------|-------|
| Source | Amazon Product Sales |
| Raw shape | 1,465 rows × 16 columns |
| Output shape | 1,465 rows × 25 columns |
| Output file | `clean_amazon.csv` |

---

## Cleaning Steps (9-Stage Pipeline)

| Step | Action | Detail |
|------|--------|--------|
| 0 | Load raw data | Read `amazon.csv` with Pandas |
| 1 | Initial profiling | Identify nulls, duplicates, and malformed values |
| 2 | Handle missing values | Fill 2 missing `rating_count` entries with 0 |
| 3 | Remove duplicates | Dropped all exact duplicate rows |
| 4 | Fix data types | Stripped `₹` and commas from price columns → `float`; extracted numeric rating values via regex |
| 5 | Clean text columns | Stripped whitespace; standardized `category` separators |
| 6 | Outlier detection | Applied IQR method across 5 numeric columns (flagged, not removed) |
| 7 | Feature engineering | Added 9 new derived columns (see below) |
| 8 | Final checks | Verified shape, null counts, and numeric summaries |
| 9 | Save output | Exported `clean_amazon.csv` |

---

## Feature Engineering — New Columns Added

| Column | Description |
|--------|-------------|
| `savings` | `actual_price − discounted_price` (₹) |
| `computed_discount_pct` | Cross-check of stated discount percentage |
| `discount_tier` | Binned discount: Low / Moderate / High / Very High / Extreme |
| `high_rating` | `True` if `rating >= 4.0` |
| `popular_product` | `True` if `rating_count > 75th percentile` |
| `price_segment` | Budget / Mid-range / Premium / Luxury |
| `value_score` | `rating × log(rating_count + 1)` — trustworthiness proxy |
| `category_clean` | `category` with `\|` replaced by ` > ` |
| `main_category` | Top-level category (first segment) |

---

## Key Insight
> Over **85% of columns** required transformation before the data was analysis-ready. Price fields were stored as Indian Rupee strings, ratings contained non-numeric suffixes, and categories used pipe-delimited hierarchy strings — all common patterns in real-world e-commerce exports.

---

## Files

| File | Description |
|------|-------------|
| `data_cleaning.py` | Full 9-step cleaning pipeline script |
| `amazon.csv` | Raw input dataset |
| `clean_amazon.csv` | Cleaned, feature-engineered output |
| `data_dictionary.csv` | Column definitions and metadata |

---

## Tools Used
- Python 3.x
- Pandas
- NumPy
- Regular Expressions (`re` via pandas `.str.extract`)

---

📂 [View on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%201)
