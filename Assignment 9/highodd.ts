const highodd = [8, 18, 8, 6, 14, 10, 14, 23, 22, 33];
const odds1 = highodd.filter((num) => num % 2 === 1)

if (odds1.length === 0) { 
  console.log("No Odd Number found") }
else{
const max: number = Math.max(...odds1);
console.log(`Maximum Odd number in the array is:  ${max}`);

}