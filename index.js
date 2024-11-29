// Function to calculate the total price
function calculateTotal() {
    const pricePerUnit = 200; // The price of one unit (product) in DH
    const quantity = document.getElementById('quantity').value;

    // Calculate the total price
    const totalPrice = quantity * pricePerUnit;

    // Update the total output field (show in DH)
    document.getElementById('total').value = totalPrice.toFixed(2); // Display with two decimal points
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault();  // Prevent form submission if validation fails

    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(element => {
        element.textContent = '';  // Clear previous error messages
    });

    // Validate name and surname
    const fullname = document.getElementById('fullname').value;
    if (fullname.trim() === '') {
        document.getElementById('fullnameError').textContent = "Veuillez entrer votre nom et prénom.";
        isValid = false;
    }

    // Validate address
    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressError').textContent = "Veuillez entrer votre adresse.";
        isValid = false;
    }

    // Validate postal code (must be 5 digits)
    const postalCode = document.getElementById('postalCode').value;
    const postalCodePattern = /^\d{5}$/; // Regex for 5 digits
    if (!postalCode.match(postalCodePattern)) {
        document.getElementById('postalCodeError').textContent = "Le code postal doit comporter 5 chiffres."; // Show error message below the field
        isValid = false;
    }

    // Validate phone number (should be 10 digits or start with + and followed by digits)
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+?\d{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById('phoneError').textContent = "Le numéro de téléphone est invalide. Il doit comporter 10 chiffres.";
        isValid = false;
    }

    // Validate quantity
    const quantity = document.getElementById('quantity').value;
    if (quantity <= 0) {
        document.getElementById('quantityError').textContent = "Veuillez entrer une quantité valide.";
        isValid = false;
    }

    // If everything is valid, display the success message
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';  // Show success message
        document.getElementById('orderForm').reset(); // Reset the form after success
    }

    return isValid; // Prevent form submission if not valid
}

// Function to restrict input to only numbers (postal and phone fields)
function restrictToNumbers(event) {
    const key = event.keyCode || event.which;
    const keyChar = String.fromCharCode(key);
    if (!/^\d$/.test(keyChar) && key !== 8 && key !== 37 && key !== 39) {
        event.preventDefault(); // Prevent any non-numeric characters
    }
}

// Add event listeners for postal code and phone inputs to restrict characters
document.getElementById('postalCode').addEventListener('keypress', restrictToNumbers);
document.getElementById('phone').addEventListener('keypress', restrictToNumbers);

// Ensure total price updates dynamically
document.getElementById('quantity').addEventListener('input', calculateTotal);

// Attach the validateForm function to form's submit event
document.getElementById('orderForm').addEventListener('submit', validateForm);