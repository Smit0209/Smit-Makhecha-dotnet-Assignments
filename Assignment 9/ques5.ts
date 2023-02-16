let java: (string | number)[] = ['Niki',1,'Jay',2,'Sanjay',3];
let net: (string | number)[] = ["Niki",4,'Jay',3,'Sanjana',5];

let javaProjects: number[] = [];
for (let i = 1; i < java.length; i += 2) {
  if (typeof java[i] === 'number') {
    javaProjects.push(java[i] as number);
  }
}

let minJavaProjectSize: number = Math.min(...javaProjects);


let javaDevsOnMinProject: string[] = [];
for (let i = 0; i < java.length; i += 2) {
  if (typeof java[i+1] === 'number' && java[i+1] === minJavaProjectSize) {
    javaDevsOnMinProject.push(java[i] as string);
  }
}

console.log(javaDevsOnMinProject);


let Developersjava: (string )[] = [];

for (let i = 0; i < java.length; i++) {
  if (typeof java[i] === 'string') {
    Developersjava.push(java[i] as string);
  }
}


let Developersnet: (string )[] = [];

for (let i = 0; i < java.length; i++) {
  if (typeof java[i] === 'string') {
    Developersnet.push(java[i] as string);
  }
}

const commonStrings = Developersnet.filter((value) => Developersjava.includes(value));
console.log("Common Person working on Bot Net & Java are:   "+commonStrings);




    

