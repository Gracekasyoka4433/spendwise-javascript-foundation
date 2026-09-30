SpendWise - JavaScript Foundation
Project Description

SpendWise is a simple budgeting application designed to help users understand their monthly spending and remaining balance.

The application allows a user to enter a monthly budget and different expense categories. JavaScript processes the information, calculates the total expenses, and determines the remaining balance.

The project demonstrates the JavaScript concepts covered in the JavaScript Foundation assignment.

Files Included

index.html - Contains the structure and content of the SpendWise webpage.

style.css - Contains the styling and layout for the application.

script.js - Contains the JavaScript variables, functions, calculations, user input, and results.

README.md - Contains information about the project and the JavaScript concepts implemented.

JavaScript Concepts Implemented

The SpendWise application demonstrates the following JavaScript concepts:

1. Variables

Variables are used to store information needed by the application.

For example:

let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;


Additional variables store individual expense categories:

let foodExpense = 0;
let transportExpense = 0;
let housingExpense = 0;
let otherExpense = 0;


The variables are updated with information entered by the user.

2. Data Types

The project uses several JavaScript data types.

Numbers are used for budget and expense amounts:

let monthlyBudget = 0;
let foodExpense = 0;


Strings are used for formatted currency and messages:

return "KES " + amount.toFixed(2);


Boolean values are returned by the collectBudgetInformation() function to indicate whether the user's information was successfully collected.

How User Input Is Collected

SpendWise uses the JavaScript prompt() function to collect information from the user.

For example:

let budgetInput = prompt("Enter your monthly budget in KES:");


The application collects the monthly budget and four expense categories:

Food

Transport

Housing

Other expenses

The input received from prompt() is converted into numbers using Number() so that mathematical calculations can be performed.

Example:

monthlyBudget = Number(budgetInput);

How Calculations Are Performed

SpendWise first calculates the total expenses by adding the individual expense categories together.

totalExpenses = calculateTotalExpenses(
    foodExpense,
    transportExpense,
    housingExpense,
    otherExpense
);


The total expenses are calculated using:

return food + transport + housing + other;


The application then calculates the remaining balance using:

remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);


The remaining balance is calculated using the formula:

Remaining Balance = Monthly Budget - Total Expenses


For example, if the monthly budget is KES 50,000 and total expenses are KES 35,000:

50,000 - 35,000 = 15,000


The remaining balance would therefore be KES 15,000.

How Functions Organize the Code

Functions are used to divide the application into smaller, reusable sections.

calculateRemainingBalance()

This function calculates the remaining balance.

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

calculateTotalExpenses()

This function adds all expense categories together.

function calculateTotalExpenses(food, transport, housing, other) {
    return food + transport + housing + other;
}

collectBudgetInformation()

This function collects and validates the user's budget and expense information.

formatCurrency()

This function formats numbers as Kenyan Shilling currency.

displayResults()

This function updates the webpage with the calculated budget, expenses, and remaining balance.

runBudgetCalculator()

This function controls the overall process. It collects the user's information, performs the calculations, displays the results, and sends the results to the browser console.

Using functions makes the JavaScript code easier to understand, organize, reuse, and maintain.

Displaying Results

The application displays the calculated information in two ways.

First, the results are displayed on the webpage:

Monthly Budget

Total Expenses

Remaining Balance

Second, detailed results are displayed in the browser console using console.log().

Example:

console.log("Monthly Budget:", formatCurrency(monthlyBudget));
console.log("Total Expenses:", formatCurrency(totalExpenses));
console.log("Remaining Balance:", formatCurrency(remainingBalance));


The console also displays whether the user is within their budget or has exceeded it.

How to Run the Project

Download or clone the repository.

Make sure all four files are in the same folder.

Open index.html in a web browser.

Click Start Budget Calculation.

Enter the requested budget and expense information.

View the calculated results on the webpage.

Open the browser Developer Tools and select the Console tab to view the detailed JavaScript output.

Testing

The application was designed to test the following scenarios:

A budget greater than total expenses.

A budget equal to total expenses.

Expenses greater than the budget.

Different expense categories.

Invalid or empty budget input.

Invalid expense input.

The application uses JavaScript validation to prevent invalid budget values from being used in the calculation.

Technologies Used

HTML5

CSS3

JavaScript

Author

SpendWise JavaScript Foundation Project
