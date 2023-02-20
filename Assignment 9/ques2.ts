
const ques2 =["Smit","Raj",33,65];
const num = [];
for (let index of ques2){
    if (typeof(index)=="number"){
      num.push(index);
    }    
}
if (num.length != 0) { 
var max = Math.max.apply(Math, num);
console.log("Maximum number in the array is:  ".concat(max));
var min = Math.min.apply(Math,num);
console.log("Minimum number in the array is:  ".concat(min));
}
else if (num.length ===0){
    var str = ques2.join(","); 
console.log("string : " + str );
}