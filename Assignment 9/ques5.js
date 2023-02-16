let java = ['Niki', 1, 'Jay', 2, 'Sanjay', 3];
let net = ["Niki", 4, 'Jay', 3, 'Sanjana', 5];
let javaProjects = [];
for (let i = 1; i < java.length; i += 2) {
    if (typeof java[i] === 'number') {
        javaProjects.push(java[i]);
    }
}
let minJavaProjectSize = Math.min(...javaProjects);
let javaDevsOnMinProject = [];
for (let i = 0; i < java.length; i += 2) {
    if (typeof java[i + 1] === 'number' && java[i + 1] === minJavaProjectSize) {
        javaDevsOnMinProject.push(java[i]);
    }
}
console.log(javaDevsOnMinProject);
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
console.log("Common Person working on Bot Net & Java are:" + commonStrings);
