var Days;
(function (Days) {
    Days[Days["SUNDAY"] = 0] = "SUNDAY";
    Days[Days["MONDAY"] = 1] = "MONDAY";
    Days[Days["TUESDAY"] = 2] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 3] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 4] = "THURSDAY";
    Days[Days["FRIDAY"] = 5] = "FRIDAY";
    Days[Days["SATURDAYS"] = 6] = "SATURDAYS";
})(Days || (Days = {}));
function getToday(type, day) {
    var casted = day;
    return type[casted];
}
var today = new Date().getDay();
console.log(getToday(Days, today));
