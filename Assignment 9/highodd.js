var numbers = [8, 18, 8, 6, 14, 10, 14];
var odds = numbers.filter(function (num) { return num % 2 === 1; });
if (odds.length === 0) {
    console.log("No Odd Number found");
}
else {
    var max = Math.max.apply(Math, odds);
    console.log("Maximum Odd number in the array is:  ".concat(max));
}
