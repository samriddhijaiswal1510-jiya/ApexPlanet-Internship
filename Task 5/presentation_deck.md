# 📊 Final Presentation Deck
## ApexPlanet Data Analyst Internship — Samriddhi Jaiswal
### End-to-End Data Analytics Project | 60-Day Internship

---

> **Presentation Format:** 8 Slides &nbsp;|&nbsp; **Audience:** Recruiters, Hiring Managers, Technical Reviewers
> **GitHub Portfolio:** https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship

---

## Slide 1 — Introduction & Overview

### Content
- **Name:** Samriddhi Jaiswal
- **Role:** Data Analyst Intern
- **Organization:** ApexPlanet Software Pvt. Ltd.
- **Internship Duration:** 60 Days
- **Datasets Used:** Amazon Product Sales & Superstore Sales
- **Deliverables:** 4 completed analytical tasks + capstone portfolio

### Visual Suggestions
- Professional headshot or avatar
- ApexPlanet logo
- A clean project timeline graphic (Task 1 → Task 2 → Task 3 → Task 4 → Task 5)
- Badge strip: Python · SQL · Power BI · Statistics · GitHub

### Speaker Notes
> "Hello, I'm Samriddhi Jaiswal. Over 60 days at ApexPlanet, I completed a structured data analytics internship that took me through every phase of a real analytics project — from cleaning raw data to building dashboards and conducting statistical tests. This presentation walks through each task, what I built, and what I learned."

---

## Slide 2 — Task 1: Data Cleaning & Preprocessing

### Content
- **Dataset:** Amazon Product Sales — 1,465 records × 16 columns
- **Problem:** Raw data had currency symbols, wrong data types, duplicates, missing values, and inconsistent categories
- **Actions Taken:**
  - Stripped ₹ symbols and commas from price columns → converted to `float`
  - Extracted numeric ratings from malformed strings
  - Removed duplicates; filled missing `rating_count` with 0
  - Applied IQR-based outlier detection across 5 numeric columns
- **Feature Engineering:** Created 9 new columns — `savings`, `discount_tier`, `price_segment`, `high_rating`, `popular_product`, `value_score`, `main_category`, and more
- **Output:** `clean_amazon.csv` — ready for analysis

### Visual Suggestions
- Side-by-side table: "Before Cleaning" vs "After Cleaning" (show raw ₹ strings vs clean floats)
- Screenshot of `data_cleaning.py` — the 9-step pipeline
- Bar chart: Missing values per column (before vs after)

### Speaker Notes
> "Task 1 was all about data quality. The raw Amazon dataset had price columns stored as strings with rupee symbols, duplicate rows, and ratings that contained non-numeric characters. I built a 9-step cleaning pipeline in Python that handled every issue systematically and added 9 engineered features to make the data richer for downstream analysis. The key takeaway: 85% of the columns needed transformation before a single analysis could be run."

---

## Slide 3 — Task 2: EDA & Business Intelligence

### Content
- **Dataset:** Superstore Sales — 9,800 records
- **Approach:** Descriptive statistics → SQL queries → Multivariate analysis → Dashboard mockup

**SQL Business Questions (9 total):**
| # | Question | Key Finding |
|---|----------|-------------|
| 1 | Highest revenue region? | West — $725K |
| 3 | Sales by category? | Technology leads |
| 8 | Top sub-categories? | Phones, Chairs, Storage |
| 9 | Revenue by Region & Segment (JOIN)? | Consumer + West = highest |

**Charts Created:** Histogram, Category Sales Bar, Region Sales Bar, Scatter Plot, Ship Mode Bar

### Visual Suggestions
- Screenshot of the KPI dashboard mockup (`dashboard/superstore_dashboard_mockup.png`)
- SQL code snippet showing the multi-table JOIN query
- `charts/category_sales.png` or `charts/region_sales.png`
- Screenshot of `eda_analysis.ipynb` showing a heatmap or scatter plot

### Speaker Notes
> "Task 2 was the most technically broad. I ran 9 SQL queries against a SQLite database, including a multi-table JOIN splitting data into orders and order_items. I also built multivariate visualizations to uncover relationships in the data. The standout insight: the West region combined with the Consumer segment drives the highest revenue consistently."

---

## Slide 4 — Task 3: Sales Dashboard (Power BI)

### Content
- **Tool:** Power BI Desktop + Python (data preparation)
- **KPIs Tracked:**

| KPI | Value |
|-----|-------|
| Total Sales | $2,252,607 |
| Total Orders | 4,916 |
| Avg Order Value | ~$458 |
| Total Customers | 793 |

- **Visualizations Built:**
  - Sales by Region (bar chart)
  - Sales by Customer Segment (donut/bar)
  - Sales by Category (bar chart)
  - Monthly Sales Trend (line chart)
  - Top 10 Products by Revenue (horizontal bar)

- **Key Insight:** Standard Class shipping dominates at ~60% of all orders; Technology category drives the most revenue

### Visual Suggestions
- Full-page screenshot of the Power BI dashboard (`dashboard.png.png`)
- Highlight KPI cards with callout boxes
- Side-by-side: Python chart vs Power BI equivalent

### Speaker Notes
> "Task 3 brought the data to life visually. I built a fully interactive Power BI dashboard that lets a business user drill down by region, category, segment, and time period. The KPI cards give an at-a-glance health check of the business, while the trend chart reveals seasonality patterns. The dashboard was built on top of Python-prepared data to ensure clean, validated inputs."

---

## Slide 5 — Task 4: Hypothesis Testing & Statistical Analysis

### Content
- **Method:** Welch's Two-Sample T-Test (`scipy.stats.ttest_ind`, `equal_var=False`)
- **Question:** Is there a statistically significant difference in average sales between Technology and Furniture?

**Hypotheses:**
- H₀: No significant difference in average sales between the two categories
- H₁: A statistically significant difference exists

**Statistical Output:**
- T-Statistic and P-Value documented in full PDF report
- Conclusion based on α = 0.05 significance level
- Business implication discussed: does significance translate to actionable category strategy?

### Visual Suggestions
- Screenshot of `hypothesis_test.py` showing the test code
- Side-by-side box plots: Technology sales vs Furniture sales distributions
- Screenshot of the PDF report summary page
- Simple diagram explaining Type I / Type II errors in plain language

### Speaker Notes
> "Task 4 added statistical rigor to the business insights uncovered in Task 2. Rather than just observing that Technology outperforms Furniture visually, I formally tested whether that difference is statistically significant using Welch's T-Test. This is the kind of evidence-based thinking that separates data-informed decisions from gut feeling. The full results and interpretation are in the PDF report."

---

## Slide 6 — Skills & Technologies Gained

### Content

| Category | Tools |
|----------|-------|
| **Programming** | Python 3.x |
| **Data Manipulation** | Pandas, NumPy |
| **Visualization** | Matplotlib, Seaborn |
| **Business Intelligence** | Power BI Desktop |
| **Databases** | SQLite, SQL |
| **Statistics** | SciPy, Hypothesis Testing, T-Tests |
| **Version Control** | Git, GitHub |
| **Documentation** | Markdown, Jupyter Notebooks, PDF Reporting |

**Soft Skills Developed:**
- Structuring complex analytical work into clear deliverables
- Translating technical outputs into business language
- Professional documentation and reproducible code

### Visual Suggestions
- Icon grid of tool logos (Python, Pandas, Power BI, SQLite, GitHub, Jupyter)
- Progress bars or skill level indicators for each tool
- GitHub contribution graph screenshot

### Speaker Notes
> "Across 60 days, I built practical proficiency in the core toolkit of a working data analyst. Python and SQL form the foundation, Power BI handles the business-facing layer, and statistical methods like hypothesis testing add credibility to findings. Equally important were the soft skills: how to structure work, write documentation, and communicate results clearly."

---

## Slide 7 — Key Takeaways & Reflections

### Content

**Technical Takeaways:**
1. Data cleaning is 60% of the work — never underestimate it
2. SQL is the most scalable way to answer business questions
3. Visualizations must tell a story, not just display numbers
4. Statistical significance must be paired with practical significance
5. A clean, documented GitHub repository is a portfolio asset in itself

**What I Would Do Differently:**
- Begin documentation from Day 1 rather than retrospectively
- Add interactive Plotly/Dash visualizations for richer exploration
- Explore predictive modeling (regression, forecasting) on the Superstore dataset

**Biggest Growth:**
> The SQL + Python combination — pulling data with SQL and visualizing/analyzing it with Python — is the most practical and transferable skill gained from this internship.

### Visual Suggestions
- "Before vs After" graphic showing growth (e.g., skill radar chart)
- Quote callout box for the biggest growth point
- Screenshot of the GitHub repository showing clean commit history

### Speaker Notes
> "Looking back, this internship was less about learning individual tools and more about learning how professional data work is structured. The biggest shift in my thinking was understanding that insights only matter if they're communicated clearly and backed by solid methodology. I leave with both the technical skills and the professional mindset of a data analyst."

---

## Slide 8 — Portfolio, GitHub & Contact

### Content

**Portfolio GitHub Repository:**
🔗 https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship

**What's In the Repository:**
| Task | Deliverable |
|------|-------------|
| Task 1 | `data_cleaning.py`, `clean_amazon.csv`, `data_dictionary.csv` |
| Task 2 | `eda_analysis.ipynb`, `sales.db`, 5 chart PNGs, dashboard mockup |
| Task 3 | Power BI `.pbix` file, dashboard screenshot, Python notebook |
| Task 4 | `hypothesis_test.py`, statistical PDF report |
| Task 5 | Presentation deck, key learnings, master README |

**Connect:**
- 💼 LinkedIn: [Samriddhi Jaiswal](https://www.linkedin.com/in/samriddhi-jaiswal-b2a9a3259/)
- 🐱 GitHub: [samriddhijaiswal1510-jiya](https://github.com/samriddhijaiswal1510-jiya)

### Visual Suggestions
- QR code linking to the GitHub repository
- Screenshot of the GitHub repository homepage (pinned repo view)
- Screenshot of `Task 5/screenshots/github_repo.png`
- Clean "Thank You" closing with contact details and profile photo

### Speaker Notes
> "Everything built during this internship is publicly available on GitHub — clean code, documented notebooks, Power BI files, and detailed READMEs for every task. I'd love to connect and discuss the work further. Thank you for taking the time to review my portfolio."

---

<div align="center">
  <sub>Presentation Deck · ApexPlanet Data Analyst Internship · Samriddhi Jaiswal · 2025</sub>
</div>
