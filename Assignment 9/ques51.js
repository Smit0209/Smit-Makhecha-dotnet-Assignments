let java = ['Niki', 1, 'Jay', 2, 'Sanjay', 3];
let net = ["Niki", 4, 'Jay', 3, 'Sanjana', 5];
let Developersjava = [];
for (let i = 0; i < java.length; i++) {
    if (typeof java[i] === 'string') {
        Developersjava.push(java[i]);
    }
}
let Developersnet = [];
for (let i = 0; i < java.length; i++) {
    if (typeof java[i] === 'string') {
        Developersnet.push(java[i]);
    }
}
const commonStrings = Developersnet.filter((value) => Developersjava.includes(value));
console.log(commonStrings);
