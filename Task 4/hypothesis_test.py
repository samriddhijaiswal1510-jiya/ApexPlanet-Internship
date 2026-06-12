import pandas as pd
from scipy.stats import ttest_ind

df = pd.read_csv(
    r"C:\Users\ASUS\Desktop\ApexPlanet-Internship\Task 3\train.csv"
)

technology = df[df["Category"] == "Technology"]["Sales"]
furniture = df[df["Category"] == "Furniture"]["Sales"]

t_stat, p_value = ttest_ind(
    technology,
    furniture,
    equal_var=False
)

print("T-Statistic =", t_stat)
print("P-Value =", p_value)