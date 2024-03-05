document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pricePredictionForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Here you could potentially gather the form data and send it to your backend
        // For now, we'll simulate a response as previously discussed

        const ourPrice = document.getElementById('ourPrice').value;
        const competitorPrice = document.getElementById('competitorPrice').value;

        // Mock the response after a "fake" delay to simulate API call
        setTimeout(() => {
            // Mocked API response
            const mockedApiResponse = {
                prediction: `Predicted demand for our price $${ourPrice} and competitor price $${competitorPrice} is high.`
            };

            // Display the mocked prediction result
            document.getElementById('predictionResult').innerText = mockedApiResponse.prediction;
        }, 1000);
    });
});
