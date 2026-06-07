# Task 2 — Exploratory Data Analysis (EDA) & Business Intelligence

## Overview
This task involves a full EDA on the Superstore Sales dataset, SQL-based business queries, multivariate visualizations, and a KPI dashboard mockup.

---

## Files
| File | Description |
|------|-------------|
| `PROJECT/analysis.ipynb` | Main Jupyter Notebook with all EDA, SQL, and visualizations |
| `PROJECT/train.csv` | Raw Superstore sales dataset (9,800 records) |
| `PROJECT/sales.db` | SQLite database created from the CSV for SQL queries |

---

## What's Covered

### 1. Descriptive Statistics & Univariate Analysis
- Dataset shape, dtypes, missing values
- `df.describe()` summary statistics
- Value counts for Category, Region, Segment
- Bar charts, Histogram (Sales Distribution)

### 2. SQL for Business Questions (7+ Queries)
All queries are written and executed against `sales.db` using SQLite:

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
- **Scatter Plot** — Order Count vs Total Sales by Sub-Category
- **Pair Plot** — Sales vs encoded Category, Region, Segment variables

### 4. Dashboard KPI Mockup
Static mock-up defined inside the notebook with:
- Total Revenue, Total Orders, Total Customers
- MoM Growth trend
- Category, Region, Segment breakdowns
- Shipping efficiency metrics
- Proposed dashboard layout

---

## Key Insights
- **West region** leads in revenue (~$710K)
- **Technology** is the top-performing category
- **Consumer segment** accounts for ~52% of all orders
- **Standard Class** shipping is used in ~60% of orders
- **Canon imageCLASS 2200** is the single highest-revenue product (~$61.6K)
- Monthly sales show a positive upward trend from 2015–2018

---

## LinkedIn Video
A 5–7 minute walkthrough showcasing key insights and complex SQL queries has been posted on LinkedIn.


