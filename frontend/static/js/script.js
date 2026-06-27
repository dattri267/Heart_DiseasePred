// Smooth scroll
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.getElementById("prediction-section")
        .scrollIntoView({ behavior: "smooth" });
});


// Form submission
const form = document.getElementById("predictionForm");
const submitBtn = form.querySelector("button[type='submit']");
const originalText = submitBtn.innerHTML;

const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const patientData = {};

    formData.forEach((value, key) => {
        patientData[key] = Number(value);
    });

    console.log(patientData);

    // UI loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Predicting...";

    try {
        const response = await fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patientData)
        });

        const result = await response.json();
        console.log(result);

        const card = document.getElementById("resultCard");
        const title = document.getElementById("resultTitle");
        const icon = document.getElementById("resultIcon");
        const probability = document.getElementById("resultProbability");
        const recommendation = document.getElementById("recommendation");
        const progress = document.getElementById("probabilityBar");

        card.style.display = "block";

        const prob = result.probability;

        if (result.prediction === 1) {
            title.innerHTML = "Heart Disease Detected";
            icon.innerHTML = "❤️";
            card.style.borderLeft = "8px solid red";
            progress.className = "progress-bar bg-danger";
            recommendation.innerHTML =
                "Please consult a healthcare professional for further evaluation.";
        } else {
            title.innerHTML = "No Heart Disease Detected";
            icon.innerHTML = "💚";
            card.style.borderLeft = "8px solid green";
            progress.className = "progress-bar bg-success";
            recommendation.innerHTML =
                "Maintain a healthy lifestyle and continue regular checkups.";
        }

        probability.innerHTML = `Confidence : ${prob}%`;
        progress.style.width = prob + "%";
        progress.innerHTML = prob + "%";

        card.scrollIntoView({ behavior: "smooth" });

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong while predicting!");
    } finally {
        // ALWAYS reset button state safely
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});


// Reset button (ONLY ONCE, OUTSIDE submit handler)
resetBtn.addEventListener("click", () => {
    form.reset();

    document.getElementById("resultCard").style.display = "none";

    document.getElementById("prediction-section")
        .scrollIntoView({ behavior: "smooth" });
});
