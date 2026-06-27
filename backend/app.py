from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np
import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

FRONTEND_DIR = BASE_DIR / "frontend"

app = Flask(
    __name__,
    template_folder=str(FRONTEND_DIR / "templates"),
    static_folder=str(FRONTEND_DIR / "static")
)

# Load model once
MODEL_PATH = BASE_DIR / "model" / "heart_disease_prediction_model.joblib"

model = joblib.load(MODEL_PATH)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    feature_order = [
        "age",
        "sex",
        "cp",
        "trestbps",
        "chol",
        "fbs",
        "restecg",
        "thalach",
        "exang",
        "oldpeak",
        "slope",
        "ca",
        "thal"
    ]

    input_df = pd.DataFrame([[data[col] for col in feature_order]],
                            columns=feature_order)

    prediction = model.predict(input_df)[0]

    probability = model.predict_proba(input_df)[0][prediction]

    print("Prediction:", prediction)
    print("Probabilities:", model.predict_proba(input_df))
    return jsonify({
        "prediction": int(prediction),
        "probability": round(float(probability * 100), 2)
    })


if __name__ == "__main__":
    app.run(debug=True)