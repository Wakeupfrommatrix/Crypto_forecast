function getPrediction() {
    // Przykładowa prognoza i dokładność
    const prediction = "Up"; // Zastąp prawdziwą prognozą z algorytmu
    const accuracy = 0.85;   // Zastąp prawdziwą dokładnością modelu

    // Wyświetl prognozę i dokładność na stronie
    const predictionElement = document.getElementById('prediction');
    const accuracyElement = document.getElementById('accuracy-value');
    predictionElement.textContent = prediction;
    accuracyElement.textContent = `${(accuracy * 100).toFixed(2)}%`;
}

document.addEventListener('DOMContentLoaded', getPrediction);
