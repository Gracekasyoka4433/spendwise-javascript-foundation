// SpendWise Week 6 - Interactive Budget Dashboard

// -----------------------------
// 1. Variables
// -----------------------------

const budget = 100000;

// -----------------------------
// 2. Array of expense records
// -----------------------------

let expenses = [
    {
        name: "Food",
        amount: 15000
    },
    {
        name: "Transport",
        amount: 9500
    },
    {
        name: "Rent",
        amount: 19000
    },
    {
        name: "Entertainment",
        amount: 5000
    },
    {
        name: "Utilities",
        amount: 6500
    },
    {
        name: "Savings",
        amount: 7500
    }
];

// -----------------------------
// 3. Select HTML elements
// -----------------------------

const budgetAmount = document.getElementById("budgetAmount");
const spentAmount = document.getElementById("spentAmount");
const balanceAmount = document.getElementById("balanceAmount");
const budgetMessage = document.getElementById("budgetMessage");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");

const expenseList = document.getElementById("expenseList");
const expenseCount = document.getElementById("expenseCount");

// -----------------------------
// 4. Calculate total expenses
// -----------------------------

function calculateTotalExpenses() {

    let total = 0;

    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// -----------------------------
// 5. Display currency
// -----------------------------

function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString();
}

// -----------------------------
// 6. Update budget information
// -----------------------------

function updateDashboard() {

    const totalSpent = calculateTotalExpenses();
    const balance = budget - totalSpent;

    // Update values on the webpage
    budgetAmount.textContent = formatCurrency(budget);
    spentAmount.textContent = formatCurrency(totalSpent);
    balanceAmount.textContent = formatCurrency(balance);

    // -----------------------------
    // Conditional statements
    // -----------------------------

    if (balance < 0) {

        budgetMessage.textContent =
            "Warning: You have exceeded your budget.";

        budgetMessage.style.color = "#c62828";

    } else if (totalSpent >= budget * 0.8) {

        budgetMessage.textContent =
            "Caution: You have used 80% or more of your budget.";

        budgetMessage.style.color = "#d97706";

    } else {

        budgetMessage.textContent =
            "Good job! Your spending is within a healthy range.";

        budgetMessage.style.color = "#18864b";
    }
}

// -----------------------------
// 7. Display expense records
// -----------------------------

function displayExpenses() {

    // Clear the existing list
    expenseList.innerHTML = "";

    // Loop through all expense records
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const expenseItem = document.createElement("div");

        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <span>${expense.name}</span>
            <strong>${formatCurrency(expense.amount)}</strong>
        `;

        expenseList.appendChild(expenseItem);
    }

    expenseCount.textContent =
        `${expenses.length} expense${expenses.length === 1 ? "" : "s"}`;
}

// -----------------------------
// 8. Handle form submission
// -----------------------------

expenseForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);

    // Validate user input
    if (name === "" || amount <= 0 || isNaN(amount)) {

        alert("Please enter a valid expense name and amount.");

        return;
    }

    // Add new expense to the array
    expenses.push({
        name: name,
        amount: amount
    });

    // Update webpage
    displayExpenses();
    updateDashboard();

    // Clear form
    expenseForm.reset();

});

// -----------------------------
// 9. Initial dashboard display
// -----------------------------

displayExpenses();
updateDashboard();
