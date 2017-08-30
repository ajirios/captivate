
function calculateMortgage()

{

var principal = document.getElementById("principal").value;
var annuity = document.getElementById("annuity").value;
var perpetuity = document.getElementById("duration").value;

var interest = annuity / 1200;
var numerator = interest * (Math.pow(interest + 1, (perpetuity * 12)));
var denominator = (Math.pow(interest + 1, (perpetuity * 12))) - 1;
var mortgage = parseFloat(principal * (numerator / denominator));
mortgage = mortgage.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});

document.getElementById("mortgage").innerHTML = mortgage + " / month.";

}


function calculateSavings()

{

var payroll = document.getElementById("payroll").value;
var rent = document.getElementById("rent").value;
var food = document.getElementById("food").value;
var miscellaneous = document.getElementById("miscellaneous").value;
var savingsGoal = document.getElementById("savings-goal").value;

var monthlySavings = payroll - rent - food - miscellaneous;
var months = (savingsGoal / monthlySavings);

if (months > parseInt(months))

{

months = months + 1;

}

months = parseInt(months);

monthlySavings = monthlySavings.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});

document.getElementById("savings").innerHTML = monthlySavings + " / month within " + months + " months.";

}


