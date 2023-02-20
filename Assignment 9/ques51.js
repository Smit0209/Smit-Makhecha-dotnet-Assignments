let java = ['Niki', 1, 'Jay', 2, 'Sanjay', 3];
let net = ["Niki", 4, 'Jay', 3, 'Sanjana', 5];

let netprojectstr = [];
for (let i = 1; i < java.length; i += 2) {
    if (typeof java[i] === 'string') {
        netprojectstr.push(java[i]);
    }
}
console.log(netprojectstr);

let javaprojectstr = [];
for (let i = 1; i < net.length; i += 2) {
    if (typeof net[i] === 'string') {
        javaprojectstr.push(net[i]);
    }
}
console.log(javaprojectstr);
