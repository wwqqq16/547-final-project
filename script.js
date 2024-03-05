document.getElementById('pricePredictionForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submission

    const ourPrice = document.getElementById('ourPrice').value;
    const competitorPrice = document.getElementById('competitorPrice').value;

    // Example URL - Replace with your actual backend API URL
    const apiUrl = 'https://your-backend-service.com/predict';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ourPrice: ourPrice,
            competitorPrice: competitorPrice,
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('predictionResult').innerText = 'Predicted Demand: ' + data.prediction;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('predictionResult').innerText = 'An error occurred.';
    });
});
