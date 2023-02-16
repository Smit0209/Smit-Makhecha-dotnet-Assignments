enum Days {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAYS,
    
}

function getToday<T>(type: T, day: number): T[keyof T] {
    const casted = day as keyof T;
    return type[casted];
}
let today = new Date().getDay();
console.log(getToday(Days, today));
