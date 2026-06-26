import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

data = pd.read_csv("slum_grid.csv")

data["level"] = pd.qcut(data["density"], 4, labels=[1,2,3,4])

X = data[["density"]]
y = data["level"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred) * 100, "%")
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))