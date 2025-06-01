// Function to toggle between distance and daily calculator
function toggleCalculatorType() {
    const calculatorType = document.getElementById('calculatorType').value;
    const distanceCalculator = document.getElementById('distanceCalculator');
    const dailyCalculator = document.getElementById('dailyCalculator');
    
    if (calculatorType === 'distance') {
        distanceCalculator.style.display = 'block';
        dailyCalculator.style.display = 'none';
    } else {
        distanceCalculator.style.display = 'none';
        dailyCalculator.style.display = 'block';
    }
}

// Function to calculate distance-based fare
function calculateFare() {
    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;
    
    if (!fromCity || !toCity) {
        alert('Please select both cities');
        return;
    }

    // City distances from Amravati (in kilometers)
    const distances = {
        'Mumbai': 650,
        'Pune': 550,
        'Nagpur': 150,
        'Nashik': 450,
        'Thane': 630,
        'Kolhapur': 700,
        'Amravati': 0,
        'Solapur': 500,
        'Dhule': 350,
        'Latur': 400,
        'Wardha': 80,
        'Akola': 50,
        'Jalna': 300,
        'Panvel': 640
    };

    // Calculate distance between cities
    const fromDistance = distances[fromCity];
    const toDistance = distances[toCity];
    
    // Calculate total distance
    const totalDistance = Math.abs(fromDistance - toDistance);
    
    // Calculate fare (₹5.33 per kilometer)
    const fare = totalDistance * 5.33;
    
    // Display result
    document.getElementById('fareAmount').textContent = Math.round(fare);
    document.getElementById('fareResult').style.display = 'block';
}

// Function to calculate daily fare
function calculateDailyFare() {
    const numberOfDays = document.getElementById('numberOfDays').value;
    
    if (!numberOfDays || numberOfDays < 1) {
        alert('Please enter a valid number of days');
        return;
    }

    // Calculate fare (₹500 per day)
    const fare = numberOfDays * 500;
    
    // Display result
    document.getElementById('dailyFareAmount').textContent = fare;
    document.getElementById('dailyFareResult').style.display = 'block';
}

// Function to toggle QR code visibility
function toggleQR() {
    const qrContainer = document.getElementById('qrCodeContainer');
    qrContainer.style.display = qrContainer.style.display === 'none' ? 'block' : 'none';
}
    