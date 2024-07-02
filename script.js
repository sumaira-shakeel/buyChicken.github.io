function buyChicken() {
    // Price per kg
    const pricePerKg = 600;
    // -----------------------------------------Prompt for user
    let amount = prompt("Enter the amount of money you want to spend on chicken (in Rs):");
    // ---------------------------------Validate the input
    if (amount === null || isNaN(Number(amount))) {
        alert("Invalid input. Please enter a number.");
        return;
    }
    // Calculating the quantity in kg
    const amountNumber = Number(amount);
    const quantityKg = amountNumber / pricePerKg;
    // Calculating the quantity in grams
    const quantityGrams = quantityKg * 1000;
    //---------------------------- Display 
    alert(`You can buy ${quantityGrams} grams of chicken with ${amount} Rs.`);
}
//----------------------- Calling the function 
buyChicken();
export {};
