const display = document.getElementById('display');
const donationButtons = document.querySelectorAll('.donation-button');
const calculateButton = document.querySelector('.calculate-button');
const clearButton = document.querySelector('.clear-button');

let totalDonation = 0;

// let ₹10 plants one tree
const costPerTree = 10;

donationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = parseInt(button.dataset.value);
        totalDonation += value;
        display.textContent = `₹${totalDonation}`;
    });
});

calculateButton.addEventListener('click', () => {
    if (totalDonation > 0) {
        // Calculate the number of trees based on the total donation
        const treesPlanted = totalDonation / costPerTree;
        display.textContent = `You planted ${treesPlanted} trees! 🌲`;
    } else {
        display.textContent = "Please select a donation amount.";
    }
});

clearButton.addEventListener('click', () => {
    // Reset the total donation
    totalDonation = 0;
    display.textContent = '0';
});