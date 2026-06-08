# Task 2 — Exploratory Data Analysis (EDA) & Business Intelligence

## Folder Structure
```
Task 2/
├── PROJECT/
│   └── train.csv
├── charts/
│   ├── histogram.png
│   ├── category_sales.png
│   ├── region_sales.png
│   ├── shipmode_sales.png
│   └── scatter_plot.png
├── dashboard/
│   └── superstore_dashboard_mockup.png
├── eda_analysis.ipynb
├── sales.db
└── README.md
```

---

## Overview
Full EDA on the Superstore Sales dataset covering descriptive statistics, SQL business queries, multivariate visualizations, and a KPI dashboard mockup.

---

## What's Covered

### 1. Descriptive Statistics & Univariate Analysis
- Dataset shape, dtypes, missing values
- `df.describe()` summary statistics
- Value counts for Category, Region, Segment
- Bar charts, Histogram (Sales Distribution)

### 2. SQL for Business Questions (8+ Queries)
All queries written and executed against `sales.db` using SQLite:

| # | Business Question |
|---|-------------------|
| 1 | Which region generates the highest total sales? |
| 2 | What are the top 5 products by revenue? |
| 3 | What is the total sales breakdown by category? |
| 4 | Which are the top 10 states by sales? |
| 5 | How does each customer segment compare in revenue? |
| 6 | How many unique customers does the business have? |
| 7 | What is the order distribution by shipping mode? |
| 8 | Which sub-categories drive the most revenue? |
| 9 | **Multi-table JOIN** — Revenue by Region & Segment (orders JOIN order_items) |

### 3. Multivariate Analysis & Correlation
- **Correlation Heatmap** — numeric column correlations
- **Monthly Sales Trend** — time-series line chart
- **Scatter Plot** — Order Count vs Total Sales by Sub-Category (`charts/scatter_plot.png`)
- **Pair Plot** — Sales vs encoded Category, Region, Segment variables

### 4. Dashboard KPI Mockup
Static dashboard mockup saved at `dashboard/superstore_dashboard_mockup.png`

| KPI | Value |
|-----|-------|
| Total Sales | $2,252,607.41 |
| Total Orders | 4,916 |
| Top Category | Technology |
| Top Region | West |

---

## Key Insights
- **Technology** is the top-performing category
- **West region** leads in revenue
- Sales values are concentrated in lower ranges
- **Standard Class** shipping dominates order volume
- Monthly sales show irregular patterns and outliers

---

## LinkedIn Video
A 5–7 minute walkthrough showcasing key insights and complex SQL queries has been posted on LinkedIn.
