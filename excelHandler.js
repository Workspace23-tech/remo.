// Function to save registration data to Excel
function saveToExcel(userData) {
    // Convert user data to CSV format
    const csvRow = [
        userData.fullName,
        userData.email,
        userData.phone,
        userData.address,
        userData.registrationDate
    ].join(',');

    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    
    // Add new data
    existingData.push(userData);
    
    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(existingData));

    // Create CSV content
    const csvContent = existingData.map(data => [
        data.fullName,
        data.email,
        data.phone,
        data.address,
        data.registrationDate
    ].join(',')).join('\n');

    // Create headers
    const headers = 'Full Name,Email,Phone Number,Address,Registration Date\n';
    
    // Combine headers and content
    const finalCsv = headers + csvContent;

    // Create blob and download
    const blob = new Blob([finalCsv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'registration_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
} 