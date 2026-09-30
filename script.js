// SpendWise Budget Tracker
// JavaScript Foundation Assignment

// --------------------------------------------------
// 1. VARIABLES AND APPLICATION DATA
// --------------------------------------------------

// Budget-related variables
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Expense variables
let foodExpense = 0;
let transportExpense = 0;
let housingExpense = 0;
let otherExpense = 0;


// --------------------------------------------------
// 2. FUNCTIONS
// --------------------------------------------------

/*
 * Calculates the remaining balance.
 * Formula:
 * Remaining Balance = Monthly Budget - Total Expenses
 */
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


/*
 * Calculates total expenses from individual
 * expense categories.
 */
function calculateTotalExpenses(food, transport, housing, other) {
    return food + transport + housing + other;
}


/*
 * Formats a number as currency.
 */
function formatCurrency(amount) {
    return "KES " + amount.toFixed(2);
}


/*
 * Collects information from the user using
 * JavaScript prompt() input.
 */
function collectBudgetInformation() {
    let budgetInput = prompt("Enter your monthly budget in KES:");

    if (budgetInput === null || budgetInput.trim() === "") {
        alert("Budget calculation cancelled.");
        return false;
    }

    monthlyBudget = Number(budgetInput);

    if (isNaN(monthlyBudget) || monthlyBudget < 0) {
        alert("Please enter a valid positive budget amount.");
        return false;
    }

    let foodInput = prompt("Enter your food expenses in KES:");
    let transportInput = prompt("Enter your transport expenses in KES:");
    let housingInput = prompt("Enter your housing expenses in KES:");
    let otherInput = prompt("Enter your other expenses in KES:");

    foodExpense = Number(foodInput);
    transportExpense = Number(transportInput);
    housingExpense = Number(housingInput);
    otherExpense = Number(otherInput);

    // Make sure empty or invalid expense inputs are treated as zero.
    if (isNaN(foodExpense) || foodExpense < 0) {
        foodExpense = 0;
    }

    if (isNaN(transportExpense) || transportExpense < 0) {
        transportExpense = 0;
    }

    if (isNaN(housingExpense) || housingExpense < 0) {
        housingExpense = 0;
    }

    if (isNaN(otherExpense) || otherExpense < 0) {
        otherExpense = 0;
    }

    return true;
}


/*
 * Displays the results on the webpage.
 */
function displayResults() {
    document.getElementById("budgetDisplay").textContent =
        formatCurrency(monthlyBudget);

    document.getElementById("expenseDisplay").textContent =
        formatCurrency(totalExpenses);

    document.getElementById("balanceDisplay").textContent =
        formatCurrency(remainingBalance);

    // Change the balance color depending on the result.
    const balanceElement = document.getElementById("balanceDisplay");

    if (remainingBalance < 0) {
        balanceElement.style.color = "#d32f2f";
    } else {
        balanceElement.style.color = "#176b5d";
    }
}


/*
 * Runs the complete budget calculation.
 */
function runBudgetCalculator() {
    const informationCollected = collectBudgetInformation();

    if (!informationCollected) {
        return;
    }

    // Calculate total expenses.
    totalExpenses = calculateTotalExpenses(
        foodExpense,
        transportExpense,
        housingExpense,
        otherExpense
    );

    // Calculate remaining balance.
    remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    // Display results on the webpage.
    displayResults();

    // Display clearly labeled results in the browser console.
    console.log("========== SpendWise Budget Report ==========");
    console.log("Monthly Budget:", formatCurrency(monthlyBudget));
    console.log("Food Expenses:", formatCurrency(foodExpense));
    console.log("Transport Expenses:", formatCurrency(transportExpense));
    console.log("Housing Expenses:", formatCurrency(housingExpense));
    console.log("Other Expenses:", formatCurrency(otherExpense));
    console.log("Total Expenses:", formatCurrency(totalExpenses));
    console.log("Remaining Balance:", formatCurrency(remainingBalance));

    if (remainingBalance < 0) {
        console.log("Status: You have exceeded your budget.");
    } else if (remainingBalance === 0) {
        console.log("Status: Your budget has been completely spent.");
    } else {
        console.log("Status: You are within your budget.");
    }

    console.log("=============================================");
}


// --------------------------------------------------
// 3. EVENT LISTENER
// --------------------------------------------------

// Run the calculator when the user clicks the button.
document.getElementById("startButton").addEventListener("click", runBudgetCalculator);
