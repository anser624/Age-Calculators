// Prompt the user for birth date inputs
let birthDay = parseInt(prompt("Enter your birth day (1-31):"), 10);
let birthMonthInput = prompt("Enter your birth month (e.g., January, Jan, or 01):").toLowerCase();
let birthYear = parseInt(prompt("Enter your birth year:"), 10);

//  Interpret month input
let monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
let birthMonth;

if (!isNaN(parseInt(birthMonthInput))) {

    //  user enters numeric month (01, 1, etc.)
    birthMonth = parseInt(birthMonthInput, 10);
} else {
    // Check if user entered full or abbreviated month name
    let monthIndex = monthNames.findIndex(m => m.startsWith(birthMonthInput));
    birthMonth = monthIndex + 1;
}

//  Get the current date
let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1; // JavaScript months are 0-based
let currentDay = today.getDate();

//  Calculating the age in years, months, and days
let ageYears = currentYear - birthYear;
let ageMonths = currentMonth - birthMonth;
let ageDays = currentDay - birthDay;

// Adjust if the current month/day is earlier than the birth month/day

if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(currentYear, currentMonth - 1, 0).getDate(); // days in the previous month
}

if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
}

// Step 5: Display the result
alert("Your age is " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days!");