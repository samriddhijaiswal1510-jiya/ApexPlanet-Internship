# 📘 Key Learnings, Reflections & Career Impact
## ApexPlanet Data Analyst Internship — Samriddhi Jaiswal

---

## 🛠️ Technical Skills Developed

### 1. Python & Data Manipulation
- Used **Pandas** extensively for data loading, cleaning, transformation, and aggregation across datasets of 1,000–10,000 rows
- Applied feature engineering techniques including label encoding, value bucketing, categorical hierarchy extraction, and computed metrics
- Worked with datetime parsing, period grouping (`dt.to_period`), and time-series line charts
- Used **NumPy** for vectorized computations (e.g., `log1p` for value score normalization)
- Developed the habit of writing **modular, documented pipeline scripts** with clear step-by-step print outputs for traceability

### 2. SQL & Business Intelligence
- Wrote **9+ SQL queries** against a SQLite database to answer real business questions
- Used aggregations (`SUM`, `COUNT`, `AVG`), filtering (`WHERE`, `HAVING`), and sorting (`GROUP BY`, `ORDER BY`, `LIMIT`)
- Performed **multi-table JOINs** splitting the Superstore dataset into normalized `orders` and `order_items` tables — mirroring real-world relational database design
- Understood the difference between writing SQL for exploration vs writing SQL for production reporting
- Learned that **SQL answers the "what"; Python explains the "why"**

### 3. Data Visualization
- Created bar charts, histograms, scatter plots, correlation heatmaps, pair plots, and monthly trend line charts using **Matplotlib** and **Seaborn**
- Learned that a good visualization requires three things: the right chart type, a clear title, and a visible insight
- Built an interactive **Power BI dashboard** with KPI cards, slicers, drill-through capability, and cross-filtering visuals
- Understood the distinction between exploratory visualizations (for analysts) and presentation-ready visualizations (for stakeholders)

### 4. Statistical Analysis
- Applied **Welch's Two-Sample T-Test** using `scipy.stats.ttest_ind` with `equal_var=False`
- Interpreted the **T-Statistic** (magnitude of difference relative to variance) and **P-Value** (probability of observing this result under H₀)
- Understood the critical importance of distinguishing **statistical significance** (p < 0.05) from **practical significance** (business impact)
- Learned how to frame a hypothesis test as a business question and communicate results to a non-technical audience

### 5. Version Control & Documentation
- Used **Git and GitHub** consistently for version control throughout all 5 tasks
- Maintained clean commit history with descriptive messages
- Wrote professional **Markdown README files** for every task folder and the master portfolio
- Documented a full **data dictionary** for the cleaned Amazon dataset — a practice rarely taught but always valued in real workplaces

---

## 🚧 Challenges Faced and Solutions

### Challenge 1 — Malformed Price and Rating Data
**Problem:** The Amazon dataset stored prices as strings like `₹1,299` and ratings as `3.9|4 out of 5 stars`. Standard `.astype(float)` calls failed.

**Solution:** Used `.str.replace()` to strip currency symbols and commas, then applied `.str.extract(r'(\d+\.?\d*)')` with a regex pattern to pull the first valid number from malformed rating strings. This made the conversion robust regardless of format variations.

**Learning:** Always profile raw data before assuming types. Real-world datasets rarely conform to expected formats.

---

### Challenge 2 — Designing a Normalized SQLite Database
**Problem:** The Superstore CSV was a flat file. Writing JOIN queries against a single flat table doesn't reflect real database practice.

**Solution:** Split the data into two tables — `orders` (order-level metadata) and `order_items` (line-item sales data) — and loaded both into SQLite. This enabled proper JOIN queries that mirror production database environments.

**Learning:** Structuring data correctly before querying pays dividends in query clarity and reusability.

---

### Challenge 3 — Power BI Learning Curve
**Problem:** Coming from a Python-first background, Power BI's DAX formulas and relationship model were initially confusing — especially calculated columns vs measures.

**Solution:** Prepared and validated the dataset in Python first (`analysis.ipynb`), then imported clean data into Power BI to minimize transformation work inside the tool. Used Python-generated charts as a reference to validate Power BI visuals.

**Learning:** Preprocessing data outside BI tools leads to cleaner, more reliable dashboards. Python and Power BI work better together than either does alone.

---

### Challenge 4 — Interpreting Hypothesis Test Results in Context
**Problem:** Getting a p-value from `scipy.stats` is straightforward — but understanding what it means for a business decision is not.

**Solution:** Researched the distinction between statistical and practical significance, and documented both in the PDF report. Added context: even if Technology and Furniture sales differ significantly, the business implication depends on margin, volume, and strategy — not just the p-value.

**Learning:** Statistical outputs are inputs to decisions, not decisions themselves.

---

### Challenge 5 — Documentation Debt
**Problem:** Writing READMEs and documentation was initially left until the end of each task, making it harder to recall decisions made during implementation.

**Solution:** Adopted in-code commenting throughout (e.g., `data_cleaning.py` has 9 clearly labeled steps with print statements). For future projects, documentation will be written alongside code, not after.

**Learning:** Documentation is not a final step — it is part of the work itself.

---

## 🌱 Future Learning Goals

### Short-Term (Next 3–6 Months)
- [ ] **Advanced SQL** — Window functions (`ROW_NUMBER`, `RANK`, `LAG/LEAD`), CTEs, subqueries
- [ ] **Plotly & Dash** — Build interactive, web-hosted visualizations beyond static PNGs
- [ ] **Pandas Advanced** — MultiIndex, `groupby` with custom aggregations, `merge_asof`, pivot tables
- [ ] **Power BI Advanced** — DAX time intelligence functions, Row-Level Security (RLS), Report Server

### Medium-Term (6–12 Months)
- [ ] **Machine Learning Fundamentals** — Linear/logistic regression, decision trees, model evaluation (scikit-learn)
- [ ] **Predictive Sales Forecasting** — Apply time-series methods (ARIMA, Prophet) to the Superstore dataset
- [ ] **Cloud Data Tools** — Google BigQuery or AWS Athena for large-scale SQL
- [ ] **dbt (Data Build Tool)** — Modern data transformation and pipeline management

### Long-Term
- [ ] **End-to-End Data Pipeline** — Ingest, transform, store, visualize using Airflow + dbt + Snowflake/BigQuery
- [ ] **A/B Testing Framework** — Design and analyze experiments with proper statistical controls
- [ ] **Data Storytelling** — Develop the skill of building narratives around data for executive-level audiences

---

## 🚀 Career Impact

### Skills Now Hireable For
This internship directly translates to the following entry-level and junior roles:
- **Junior Data Analyst** — Python, SQL, visualization, dashboards
- **Business Intelligence Analyst** — Power BI, KPI design, SQL reporting
- **Data Operations Analyst** — Data cleaning, pipeline scripting, documentation
- **Analytics Intern / Associate** — End-to-end analytics project experience

### Portfolio Strength
The GitHub portfolio demonstrates:
- **Breadth:** Covers the full analytics stack (data → insights → dashboards → statistics)
- **Depth:** Each task has documented code, methodology, and outputs — not just results
- **Professionalism:** Consistent READMEs, clean code, version-controlled history

### Most Transferable Skill
The **SQL + Python combination** — using SQL to query and aggregate data at scale, then Python to transform, visualize, and model it — is the core workflow of a working data analyst at most companies. This internship built real, practical fluency in that workflow.

### Confidence Gained
Before this internship, data analysis felt theoretical. After completing 4 end-to-end tasks on real datasets, the entire pipeline — from raw CSV to business insight — feels familiar and manageable. That practical confidence is arguably the most valuable outcome.

---

## 🔧 Tools & Technologies Summary

```
Python · Pandas · NumPy · Matplotlib · Seaborn · SciPy
SQLite · SQL · Power BI Desktop · DAX
Git · GitHub · Jupyter Notebook · Markdown · PDF Reporting
```

---

## 📚 Personal Reflections

### What Went Well
- Structured, step-by-step approach to each task kept work organized and auditable
- Consistent GitHub usage kept everything version-controlled and shareable from Day 1
- SQL queries gave quantifiable, reproducible answers to business questions
- Power BI dashboard produced a genuinely professional-looking deliverable

### What I Would Do Differently
- Start documentation in parallel with coding, not after
- Add interactive Plotly visualizations to the EDA notebook for richer exploration
- Include more advanced feature engineering and correlation analysis in Task 2
- Explore predictive modeling on the Superstore dataset as an optional extension

### Biggest Realization
> **Data work is 50% technical and 50% communication.** Writing clean code matters — but so does writing a clear README, labeling a chart axis correctly, and explaining a p-value to someone who has never taken a statistics course. This internship made both halves feel equally important.

---

<div align="center">
  <sub>Key Learnings · ApexPlanet Data Analyst Internship · Samriddhi Jaiswal · 2025</sub>
</div>
