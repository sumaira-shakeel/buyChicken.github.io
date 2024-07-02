
function buyChicken(): void {
    // Price per kg
    const pricePerKg: number = 250;
  
    // -----------------------------------------Prompt for user
    let amount: string | null = prompt("Enter the amount of money you want to spend on chicken (in Rs):");
  
    // ---------------------------------Validate the input
    if (amount === null || isNaN(Number(amount))) {
      alert("Invalid input. Please enter a number.");
      return;
    }
  
    // Calculating the quantity in kg
    const amountNumber: number = Number(amount);
    const quantityKg: number = amountNumber / pricePerKg;
  
    // Calculating the quantity in grams
    const quantityGrams: number = quantityKg * 1000;
  
    //---------------------------- Display 
    alert(`You can buy ${quantityGrams} grams of chicken with ${amount} Rs.`);
  }
  
  //----------------------- Calling the function 
  buyChicken();

