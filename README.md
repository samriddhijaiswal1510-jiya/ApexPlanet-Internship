# 📊 Samriddhi Jaiswal — Data Analyst Internship Portfolio

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

**ApexPlanet Software Pvt. Ltd. | Data Analyst Internship | 2025**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samriddhi-jaiswal-b2a9a3259/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship)

</div>

---

## 👩‍💻 About This Portfolio

This repository is the **master portfolio** for my Data Analyst Internship at **ApexPlanet Software Pvt. Ltd.**
It consolidates all 5 tasks into a single, professional reference — covering the complete data analytics lifecycle:
data ingestion, cleaning, exploration, SQL querying, business intelligence dashboards, statistical testing, and final presentation.

> **Internship Duration:** 60 Days &nbsp;|&nbsp; **Organization:** ApexPlanet Software Pvt. Ltd. &nbsp;|&nbsp; **Role:** Data Analyst Intern

---

## 🗂️ Internship Overview

| # | Task | Focus Area | Duration | Status |
|---|------|-----------|----------|--------|
| 1 | Data Cleaning & Preprocessing | Python, Pandas | 7 Days | ✅ Complete |
| 2 | EDA & Business Intelligence | Python, SQL, Seaborn | 14 Days | ✅ Complete |
| 3 | Sales Dashboard | Power BI, Python | 10 Days | ✅ Complete |
| 4 | Hypothesis Testing | SciPy, Statistics | 7 Days | ✅ Complete |
| 5 | Capstone & Portfolio Finalization | Documentation, Git | 8 Days | ✅ Complete |

---

## 📁 Repository Structure

```
ApexPlanet-Internship/
│
├── Task 1/                          ← Data Cleaning & Preprocessing
│   ├── data_cleaning.py             ← Full cleaning pipeline
│   ├── amazon.csv                   ← Raw dataset
│   ├── clean_amazon.csv             ← Cleaned output
│   └── data_dictionary.csv          ← Column definitions
│
├── Task 2/                          ← EDA & Business Intelligence
│   ├── eda_analysis.ipynb           ← Full EDA notebook
│   ├── sales.db                     ← SQLite database
│   ├── train.csv                    ← Superstore dataset
│   ├── charts/                      ← All chart PNGs
│   └── dashboard/                   ← KPI dashboard mockup
│
├── Task 3/                          ← Sales Dashboard (Power BI)
│   ├── analysis.ipynb               ← Python data preparation
│   ├── Task3_Sales_Dashboard.pbix   ← Power BI file
│   ├── dashboard.png.png            ← Dashboard screenshot
│   └── train.csv                    ← Dataset
│
├── Task 4/                          ← Hypothesis Testing
│   ├── hypothesis_test.py           ← T-Test script
│   ├── Task4_Sales_Analysis_...pdf  ← Statistical report
│   └── train.csv                    ← Dataset
│
├── Task 5/                          ← Capstone & Portfolio
│   ├── presentation_deck.md         ← Final presentation
│   ├── key_learnings.md             ← Reflections & learnings
│   └── screenshots/                 ← Portfolio screenshots
│
└── README.md                        ← Master portfolio (this file)
```

---

## 📌 Project Summary

### ✅ Task 1 — Data Cleaning & Preprocessing
> **Dataset:** Amazon Product Sales (1,465 records × 16 columns)

**What I did:**
- Diagnosed raw data issues: missing values, incorrect data types, currency symbols, inconsistent text
- Removed duplicates and filled missing `rating_count` values
- Stripped `₹` symbols and commas from price fields; converted to `float`
- Extracted clean numeric ratings from malformed strings
- Engineered 9 new features: `savings`, `discount_tier`, `price_segment`, `high_rating`, `popular_product`, `value_score`, `main_category`, `category_clean`, `computed_discount_pct`
- Applied IQR-based outlier detection across all numeric columns

**Key Insight:** Over 85% of columns required transformation before the data was analysis-ready.

**Key Files:**
| File | Description |
|------|-------------|
| `data_cleaning.py` | End-to-end cleaning pipeline (9 documented steps) |
| `clean_amazon.csv` | Final cleaned dataset |
| `data_dictionary.csv` | Column definitions and metadata |

📂 [View Task 1 on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%201)

---

### ✅ Task 2 — Exploratory Data Analysis (EDA) & Business Intelligence
> **Dataset:** Superstore Sales (9,800 records)

**What I did:**
- Performed descriptive statistics and univariate analysis (distributions, value counts)
- Answered **9 business questions** using SQL against a SQLite database
- Built multi-table JOINs splitting data into `orders` and `order_items` schemas
- Created multivariate visualizations: correlation heatmap, scatter plot, pair plot, monthly trend
- Built a static KPI dashboard mockup with key business metrics

**Key Insights:**
- West region generates the highest total revenue
- Technology is the top-performing product category
- Standard Class shipping accounts for ~60% of all orders
- Monthly sales exhibit seasonal variation with notable outliers

**SQL Business Questions Answered:**

| # | Question |
|---|----------|
| 1 | Which region generates the highest total sales? |
| 2 | Top 5 products by revenue? |
| 3 | Total sales breakdown by category? |
| 4 | Top 10 states by sales? |
| 5 | Customer segment revenue comparison? |
| 6 | How many unique customers? |
| 7 | Order distribution by shipping mode? |
| 8 | Which sub-categories drive the most revenue? |
| 9 | Revenue by Region & Segment (multi-table JOIN)? |

**Key Files:**
| File | Description |
|------|-------------|
| `eda_analysis.ipynb` | Complete EDA notebook |
| `sales.db` | SQLite database with orders & order_items tables |
| `charts/` | 5 chart PNGs |
| `dashboard/superstore_dashboard_mockup.png` | KPI dashboard mockup |

📂 [View Task 2 on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%202)

---

### ✅ Task 3 — Sales Dashboard (Power BI)
> **Tool:** Power BI Desktop + Python (data preparation)

**What I did:**
- Connected and transformed Superstore data in Power BI
- Built an interactive dashboard tracking 5 core KPIs
- Designed visuals for regional, segment, category, and time-based analysis
- Identified top-performing products and shipping modes

**Dashboard KPIs:**

| KPI | Value |
|-----|-------|
| Total Sales | $2,252,607 |
| Total Orders | 4,916 |
| Avg Order Value | ~$458 |
| Total Customers | 793 |
| Total Products | 1,850+ |

**Key Files:**
| File | Description |
|------|-------------|
| `Task3_Sales_Dashboard.pbix.pbix` | Interactive Power BI dashboard |
| `analysis.ipynb` | Python data preparation notebook |
| `dashboard.png.png` | Dashboard screenshot |

📂 [View Task 3 on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%203)

---

### ✅ Task 4 — Hypothesis Testing & Statistical Analysis
> **Method:** Welch's Two-Sample T-Test (scipy.stats)

**What I did:**
- Defined null and alternate hypotheses for a category-level sales comparison
- Applied Welch's T-Test (unequal variance) on Technology vs Furniture category sales
- Interpreted T-Statistic and P-Value in a business context
- Documented full methodology and conclusions in a PDF report

**Hypothesis:**
- **H₀:** No significant difference in average sales between Technology and Furniture
- **H₁:** A statistically significant difference exists between the two categories

**Key Files:**
| File | Description |
|------|-------------|
| `hypothesis_test.py` | Python T-Test script |
| `Task4_Sales_Analysis_Hypothesis_Testing..pdf` | Full statistical report |

📂 [View Task 4 on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%204)

---

### ✅ Task 5 — Capstone Integration & Portfolio Finalization

**What I did:**
- Consolidated all 4 tasks into this master portfolio repository
- Wrote comprehensive READMEs for every task folder
- Summarized key learnings, technical skills, and career reflections
- Created a polished presentation deck for recruiter review
- Finalized GitHub repository structure for public showcase

**Key Files:**
| File | Description |
|------|-------------|
| `presentation_deck.md` | 8-slide final presentation outline with speaker notes |
| `key_learnings.md` | Detailed technical learnings and career reflections |

📂 [View Task 5 on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%205)

---

## 🛠️ Skills & Technologies

| Category | Tools & Technologies |
|----------|---------------------|
| **Programming** | Python 3.x |
| **Data Manipulation** | Pandas, NumPy |
| **Data Visualization** | Matplotlib, Seaborn |
| **Business Intelligence** | Power BI Desktop |
| **Database & SQL** | SQLite, pandas `read_sql` |
| **Statistical Analysis** | SciPy (`ttest_ind`), Descriptive Stats |
| **Version Control** | Git, GitHub |
| **Documentation** | Markdown, Jupyter Notebooks |
| **Reporting** | PDF Reports, Dashboard Mockups |

---

## 📸 Screenshots

### Power BI Sales Dashboard
![Power BI Sales Dashboard](./Task%203/dashboard.png.png)

### Dashboard Mockup (EDA)
![Dashboard Mockup](./Task%202/dashboard/superstore_dashboard_mockup.png)

### SQL Query Results — Category Sales
![Category Sales SQL](./Task%202/charts/category_sales.png)

### SQL Query Results — Region Sales
![Region Sales SQL](./Task%202/charts/region_sales.png)

---

## 🔗 Task Repositories

| Task | Description | GitHub Link |
|------|-------------|-------------|
| Task 1 | Data Cleaning & Preprocessing | [View on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%201) |
| Task 2 | EDA & Business Intelligence | [View on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%202) |
| Task 3 | Sales Dashboard (Power BI) | [View on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%203) |
| Task 4 | Hypothesis Testing & Statistical Analysis | [View on GitHub](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship/tree/main/Task%204) |

---

## 💡 Final Reflection

This internship gave me hands-on experience with the complete data analytics pipeline — from raw, messy data all the way to boardroom-ready dashboards and statistically validated business insights.

The most impactful realization was that **technical skill alone is not enough**. Presenting findings clearly, structuring code professionally, and documenting decisions thoroughly are equally critical for a working data analyst. Every task reinforced that data work is ultimately about enabling better decisions — not just running code.

I leave this internship with a solid foundation in Python, SQL, Power BI, and statistical thinking, and a genuine appreciation for the rigor that real-world data analysis demands.

---

## 📬 Connect

- **GitHub:** [samriddhijaiswal1510-jiya](https://github.com/samriddhijaiswal1510-jiya/ApexPlanet-Internship)
- **LinkedIn:** [Samriddhi Jaiswal](https://www.linkedin.com/in/samriddhi-jaiswal-b2a9a3259/)

---

<div align="center">
  <sub>Built with dedication during the ApexPlanet Data Analyst Internship · 2025</sub>
</div>
