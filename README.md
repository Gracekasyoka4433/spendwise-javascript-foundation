# SpendWise - Interactive Budget Dashboard

## Project Description

SpendWise is a budgeting application designed to help users monitor their spending, manage expenses, and track their remaining budget.

This week's improvements make SpendWise interactive by allowing users to add expenses, automatically calculate spending totals, display expense records, and receive feedback about their budget.

## Improvements Made This Week

The following improvements were implemented:

* Added interactive expense entry.
* Added an array to store multiple expense records.
* Added loops to process and display expenses.
* Added conditional statements for budget decisions.
* Added DOM manipulation to update the dashboard dynamically.
* Added event listeners to respond to user actions.
* Added automatic calculation of total spending and remaining balance.
* Added budget feedback based on the user's spending level.

## JavaScript Concepts Implemented

### 1. Conditional Statements

SpendWise uses `if`, `else if`, and `else` statements to evaluate the user's budget.

The application checks whether:

* The user has exceeded the budget.
* The user has used 80% or more of the budget.
* The user's spending is still within a healthy range.

This allows SpendWise to provide appropriate feedback to the user.

### 2. Arrays

An array called `expenses` is used to store multiple expense records.

Each record contains an expense name and amount.

Example:

```javascript
let expenses = [
    {
        name: "Food",
        amount: 15000
    },
    {
        name: "Transport",
        amount: 9500
    }
];
```

When the user adds a new expense, the new record is added to the array using `push()`.

### 3. Loops

A `for` loop is used to process the expense records.

The loop calculates the total amount spent and also displays each expense on the webpage.

This makes it possible to work with multiple records efficiently without writing separate code for every expense.

### 4. DOM Manipulation

JavaScript is used to update the webpage directly.

Methods and properties such as:

* `getElementById()`
* `createElement()`
* `textContent`
* `innerHTML`
* `appendChild()`

are used to display expense records, total spending, remaining balance, and budget messages.

The results are therefore displayed directly on the SpendWise dashboard instead of only appearing in the browser console.

### 5. Event Handling

SpendWise uses an event listener to respond when the user submits the expense form.

```javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

The event listener allows the application to receive user input, process the information, add it to the expense array, and update the dashboard.

### 6. User Input

Users enter:

* Expense name
* Expense amount

The JavaScript program validates the input before adding the expense to the application.

### 7. Dynamic Calculations

The application automatically calculates:

* Total budget
* Total amount spent
* Remaining balance

The remaining balance is calculated using:

```text
Remaining Balance = Budget - Total Expenses
```

## Challenges Encountered

One challenge was connecting the JavaScript data to the webpage so that changes would appear immediately.

This was resolved by using DOM manipulation and functions that recalculate and redraw the dashboard whenever a new expense is added.

Another challenge was handling invalid user input. This was resolved by checking that the expense name is not empty and that the amount is a valid positive number before adding the record.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Git
* GitHub

## Project Structure

```text
SpendWise-Dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Testing

The application was tested by:

1. Loading the dashboard in a web browser.
2. Checking that the initial expenses are displayed.
3. Adding a new expense.
4. Checking that the expense appears in the list.
5. Checking that the total spent updates.
6. Checking that the remaining balance updates.
7. Testing invalid expense input.
8. Checking that the budget warning changes according to spending.

## Conclusion

The Week 6 version of SpendWise demonstrates how JavaScript can make a webpage interactive. It uses conditionals for decision making, arrays for storing records, loops for processing data, DOM manipulation for dynamic webpage updates, and event listeners for responding to user actions.

