var ques2 = ["Smit", "Raj",33,65];
var num = [];
for (var _i = 0, ques2_1 = ques2; _i < ques2_1.length; _i++) {
    var index = ques2_1[_i];
    if (typeof (index) == "number") {
        num.push(index);
    }
}
if (num.length != 0) {
    var max = Math.max.apply(Math, num);
    console.log("Maximum number in the array is:  ".concat(max));
    var min = Math.min.apply(Math, num);
    console.log("Minimum number in the array is:  ".concat(min));
}
else if (num.length === 0) {
    var str = ques2.join(",");
    console.log("str : " + str);
}
