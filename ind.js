// script.js

// Function to calculate the total price
function calculateTotal() {
    const pricePerUnit = 200; // The price of one unit (product) in DH
    const quantity = document.getElementById('quantity').value;

    // Calculate the total price
    const totalPrice = quantity * pricePerUnit;

    // Update the total output field (show in DH)
    document.getElementById('total').value = totalPrice.toFixed(2); // Display with two decimal points
}

// Validation function (unchanged)
function validateForm() {
    let isValid = true;

    // Réinitialisation des messages d'erreur
    document.querySelectorAll('.error-message').forEach(element => {
        element.textContent = '';
    });

    // Vérification du nom et prénom
    const fullname = document.getElementById('fullname').value;
    if (fullname.trim() === '') {
        document.getElementById('fullnameError').textContent = "Veuillez entrer votre nom et prénom.";
        isValid = false;
    }

    // Vérification de l'adresse
    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressError').textContent = "Veuillez entrer votre adresse.";
        isValid = false;
    }

    // Vérification du code postal
    const postalCode = document.getElementById('postalCode').value;
    const postalCodePattern = /^\d{5}$/;
    if (!postalCode.match(postalCodePattern)) {
        document.getElementById('postalCodeError').textContent = "Le code postal doit comporter 5 chiffres.";
        isValid = false;
    }

    // Vérification du numéro de téléphone
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+?\d{10,15}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById('phoneError').textContent = "Le numéro de téléphone est invalide. Il doit comporter entre 10 et 15 chiffres.";
        isValid = false;
    }

    // Vérification de la quantité
    const quantity = document.getElementById('quantity').value;
    if (quantity <= 0) {
        document.getElementById('quantityError').textContent = "Veuillez entrer une quantité valide.";
        isValid = false;
    }

    // Vérification du total (non nécessaire car calculé dynamiquement)
    return isValid;
}
