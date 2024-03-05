document.getElementById('pricePredictionForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submission

    // Simulate fetching data from an API by creating a mock response
    setTimeout(() => {
        // Mocked API response
        const mockedApiResponse = {
            prediction: "High demand"
        };

        // Process the mocked response as if it was returned by an actual API
        document.getElementById('predictionResult').innerText = 'Predicted Demand: ' + mockedApiResponse.prediction;
    }, 1000); // Simulate network delay
});
