// Getting form element
const form = document.getElementById('idForm')
// Arrays to store contact names and telephone numbers
const contactName = []
const telNumber = []

// Variable to store HTML rows for the table
let rows = ''
    
// Add event listener to the form submit event
form.addEventListener('submit', function(e) {
    e.preventDefault() // Prevent the default form submission 

    addRow() // Call the addRow function to add new contact
    updateTable() // Update the table with new data    
})
    
// Function to get input values and add a new row to the table
function addRow() {
    // Get input elements for name and telephone
    const inputName = document.getElementById('name')
    const inputTelNumber = document.getElementById('telephone')

    // Check if the telephone number includes parentheses and hyphen
if (!/\(\d{2}\)\d{5}-\d{4}/.test(inputTelNumber.value)) {
    alert("Please make sure you insert your phone number in the correct format. Exemple: (00)12345-6789")
    return // Stop execution if format is incorrect
} 
    
    // Check if the name is already added
if (contactName.includes(inputName.value)) {
    alert(`The name: ${inputName.value} has already been added to the list!`)
}else {
    // Add name and telephone to respective arrays
    contactName.push(inputName.value)
    telNumber.push(parseFloat(inputTelNumber.value)) // Converting variable string to number

// Create HTML row for the table
let row = '<tr>'
row += `<td>${inputName.value}</td>`
row += `<td>${inputTelNumber.value}</td>`
row += '</tr>'

// Append the new row to existing rows
rows += row
}

// Clear input fields after adding a row
inputName.value = ''
inputTelNumber.value = ''
}

// Function to update the table with new rows
function updateTable () {
    const tableBody = document.querySelector('#idTable tbody') // Select table body
    tableBody.innerHTML = rows // Update table with new rows
}





