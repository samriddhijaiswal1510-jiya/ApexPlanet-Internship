# =============================================================================
# Amazon Sales Dataset - Data Cleaning & Wrangling Script
# Author  : Sayan (ApexPlanet Internship – Task 1)
# Dataset : amazon.csv  (1,465 rows × 16 columns)
# Output  : clean_amazon.csv
# =============================================================================

import pandas as pd
import numpy as np
import warnings
warnings.filterwarnings("ignore")

# ── 0. LOAD ───────────────────────────────────────────────────────────────────
df = pd.read_csv("amazon.csv")
print("=" * 60)
print("STEP 0 · Raw Data Loaded")
print(f"  Shape : {df.shape[0]} rows × {df.shape[1]} columns")
print("=" * 60)

# ── 1. INITIAL PROFILING ──────────────────────────────────────────────────────
print("\nSTEP 1 · Initial Data Profile")
print("-" * 60)
print(f"  Duplicated rows : {df.duplicated().sum()}")
print(f"  Missing values per column :")
print(df.isnull().sum().to_string())
print(f"\n  Sample rating values  : {df['rating'].unique()[:10]}")
print(f"  Sample rating_count   : {df['rating_count'].unique()[:5]}")
print(f"  Sample discounted_price: {df['discounted_price'].unique()[:5]}")

# ── 2. HANDLE MISSING VALUES ──────────────────────────────────────────────────
print("\nSTEP 2 · Handle Missing Values")
print("-" * 60)

# rating_count – 2 missing; fill with 0 then convert
df['rating_count'] = df['rating_count'].fillna("0")
print("  rating_count  → filled 2 NaN with 0")

# ── 3. REMOVE DUPLICATES ──────────────────────────────────────────────────────
before = len(df)
df = df.drop_duplicates()
print(f"\nSTEP 3 · Removed {before - len(df)} duplicate rows  (rows remaining: {len(df)})")

# ── 4. FIX DATA TYPES ─────────────────────────────────────────────────────────
print("\nSTEP 4 · Fix Data Types")
print("-" * 60)

# --- Prices: strip ₹ and commas → float
df['discounted_price'] = (df['discounted_price']
                          .str.replace("₹", "", regex=False)
                          .str.replace(",", "", regex=False)
                          .str.strip()
                          .astype(float))

df['actual_price'] = (df['actual_price']
                      .str.replace("₹", "", regex=False)
                      .str.replace(",", "", regex=False)
                      .str.strip()
                      .astype(float))

print("  discounted_price  → float  (₹ and commas removed)")
print("  actual_price      → float  (₹ and commas removed)")

# --- Discount: strip % → float
df['discount_percentage'] = (df['discount_percentage']
                              .str.replace("%", "", regex=False)
                              .str.strip()
                              .astype(float))
print("  discount_percentage → float (% removed)")

# --- Rating: some rows have non-numeric ratings like '3.9|5 out of…'
#     Keep only the first decimal number
df['rating'] = (df['rating']
                .astype(str)
                .str.extract(r'(\d+\.?\d*)')[0]
                .astype(float))
# Fill any remaining NaN ratings with the column median
rating_median = df['rating'].median()
df['rating'] = df['rating'].fillna(rating_median)
print(f"  rating            → float  (extracted numeric value; NaN filled with median {rating_median})")

# --- Rating count: remove commas → numeric
df['rating_count'] = (df['rating_count']
                      .astype(str)
                      .str.replace(",", "", regex=False)
                      .str.strip())
df['rating_count'] = pd.to_numeric(df['rating_count'], errors='coerce').fillna(0).astype(int)
print("  rating_count      → int    (commas removed, coerced)")

# ── 5. CLEAN TEXT COLUMNS ─────────────────────────────────────────────────────
print("\nSTEP 5 · Clean & Standardise Text Columns")
print("-" * 60)

# Strip leading/trailing whitespace from all string columns
str_cols = df.select_dtypes(include='object').columns
for col in str_cols:
    df[col] = df[col].str.strip()
print("  Stripped whitespace from all text columns")

# Standardise category: replace | separators with  →  for readability
df['category_clean'] = df['category'].str.replace("|", " > ", regex=False)
print("  category_clean    → | replaced with ' > '")

# Extract top-level category (first segment)
df['main_category'] = df['category'].str.split("|").str[0]
print("  main_category     → top-level category extracted")

# ── 6. OUTLIER DETECTION ──────────────────────────────────────────────────────
print("\nSTEP 6 · Outlier Detection (IQR method)")
print("-" * 60)

numeric_cols = ['discounted_price', 'actual_price', 'discount_percentage',
                'rating', 'rating_count']

for col in numeric_cols:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    outliers = df[(df[col] < lower) | (df[col] > upper)].shape[0]
    print(f"  {col:<25} → {outliers:>4} outliers  "
          f"(range: {df[col].min():.1f} – {df[col].max():.1f}  |  "
          f"IQR bounds: {lower:.1f} – {upper:.1f})")

# Note: we flag but do NOT remove outliers — they may be legitimate products
# (e.g., very expensive items or viral products with massive review counts)

# ── 7. FEATURE ENGINEERING ────────────────────────────────────────────────────
print("\nSTEP 7 · Feature Engineering")
print("-" * 60)

# Savings in ₹
df['savings'] = (df['actual_price'] - df['discounted_price']).round(2)
print("  savings           → actual_price - discounted_price  (₹)")

# Verify discount_percentage against computed value
df['computed_discount_pct'] = (
    (df['savings'] / df['actual_price']) * 100
).round(1)
print("  computed_discount_pct → cross-check for discount accuracy")

# Discount tier: categorise discount ranges
def discount_tier(pct):
    if pct < 10:
        return "Low (<10%)"
    elif pct < 30:
        return "Moderate (10-29%)"
    elif pct < 50:
        return "High (30-49%)"
    elif pct < 70:
        return "Very High (50-69%)"
    else:
        return "Extreme (70%+)"

df['discount_tier'] = df['discount_percentage'].apply(discount_tier)
print("  discount_tier     → categorised discount band")

# High rating flag
df['high_rating'] = df['rating'] >= 4.0
print("  high_rating       → True if rating >= 4.0")

# Popular product flag (rating_count > 75th percentile)
popularity_threshold = int(df['rating_count'].quantile(0.75))
df['popular_product'] = df['rating_count'] > popularity_threshold
print(f"  popular_product   → True if rating_count > {popularity_threshold:,} (75th pct)")

# Price segment
def price_segment(price):
    if price < 300:
        return "Budget"
    elif price < 1000:
        return "Mid-range"
    elif price < 5000:
        return "Premium"
    else:
        return "Luxury"

df['price_segment'] = df['discounted_price'].apply(price_segment)
print("  price_segment     → Budget / Mid-range / Premium / Luxury")

# Value score: rating × log(rating_count+1) — proxy for trustworthiness
df['value_score'] = (df['rating'] * np.log1p(df['rating_count'])).round(3)
print("  value_score       → rating × log(rating_count+1)")

# ── 8. FINAL CHECKS ───────────────────────────────────────────────────────────
print("\nSTEP 8 · Final Dataset Summary")
print("-" * 60)
print(f"  Final shape : {df.shape[0]} rows × {df.shape[1]} columns")
print(f"  Missing values after cleaning :\n{df.isnull().sum()[df.isnull().sum() > 0]}")
print(f"\n  Numeric summary :")
print(df[numeric_cols].describe().round(2).to_string())
print(f"\n  New columns added : savings, computed_discount_pct, discount_tier,")
print(f"                       high_rating, popular_product, price_segment,")
print(f"                       value_score, category_clean, main_category")

# ── 9. SAVE CLEANED DATASET ───────────────────────────────────────────────────
df.to_csv("clean_amazon.csv", index=False)
print("\n" + "=" * 60)
print("  clean_amazon.csv saved successfully.")
print("=" * 60)
