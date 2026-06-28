# Heart Disease Risk Prediction using Machine Learning

A full-stack Machine Learning web application that predicts the likelihood of heart disease based on a patient's clinical information. The application uses a trained Random Forest Classifier and provides an intuitive interface for entering patient data and viewing prediction results.

---

## Overview

This project combines Machine Learning and Web Development to create an interactive healthcare application. Users can enter patient health parameters through a modern web interface, and the Flask backend processes the input, performs prediction using a trained machine learning model, and returns the predicted heart disease risk.

---

## Features

- Interactive patient information form
- Real-time heart disease risk prediction
- Confidence score display
- Feature importance visualization
- Responsive and modern user interface
- Flask REST API backend
- Machine Learning model integration

---

## Input Features

The model uses the following clinical parameters:

- Age
- Sex
- Chest Pain Type
- Resting Blood Pressure
- Cholesterol
- Fasting Blood Sugar
- Resting ECG
- Maximum Heart Rate
- Exercise Induced Angina
- ST Depression (Oldpeak)
- Slope of ST Segment
- Number of Major Vessels
- Thalassemia

---

## Application Workflow

```
Patient Inputs Clinical Data
            │
            ▼
Frontend Sends Data to Flask
            │
            ▼
Data Preprocessing
            │
            ▼
Random Forest Model Prediction
            │
            ▼
Risk Probability Calculation
            │
            ▼
Return Prediction as JSON
            │
            ▼
Display Risk Assessment on Website
```

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Flask
- Scikit-learn
- Pandas
- NumPy
- Joblib

### Machine Learning

- Random Forest Classifier
- Feature Importance Analysis

---

## Project Structure

```
Heart_Disease_Prediction/
│
├── backend/
│   ├── app.py
│   ├── heart_disease_prediction_model.joblib
│   ├── scaler.pkl
│   └── utils/
│
├── frontend/
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── templates/
│       └── index.html
│
├── notebook/
│   └── Heart_Disease_Prediction.ipynb
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

## Model

The application uses a Random Forest Classifier trained on a heart disease dataset.

### Input

Patient clinical parameters

### Output

- Low Risk
- High Risk

Along with a confidence score indicating the model's prediction certainty.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Heart-Disease-Prediction.git
```

### 2. Navigate to the project

```bash
cd Heart-Disease-Prediction
```

### 3. Create a virtual environment

```bash
python -m venv .venv
```

### 4. Activate the virtual environment

**Windows**

```bash
.venv\Scripts\activate
```

**Linux / macOS**

```bash
source .venv/bin/activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the application

```bash
python backend/app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## Screenshots

### Home Page

<img width="1226" height="715" alt="Screenshot 2026-06-29 000741" src="https://github.com/user-attachments/assets/7b4bf85c-ffd0-46f6-89f4-3b13de5a30c6" />

<img width="1038" height="671" alt="Screenshot 2026-06-29 000754" src="https://github.com/user-attachments/assets/12f2ce23-b830-45e1-9551-da5c44a2bffc" />




## Future Improvements

- Support additional cardiovascular risk factors
- Compare predictions from multiple machine learning models
- Add patient history management
- Generate downloadable prediction reports
- Deploy the application using Render
- Improve model explainability using SHAP values

---

## Learning Outcomes

This project helped me gain practical experience with:

- Machine Learning model deployment
- Data preprocessing and feature engineering
- Random Forest classification
- Flask backend development
- REST API integration
- Frontend and backend communication
- Building responsive web applications
- Model evaluation and feature importance analysis

---

## Author

**Diya Attri**

Built as a Machine Learning and Full Stack AI deployment project using Flask and Scikit-learn.
