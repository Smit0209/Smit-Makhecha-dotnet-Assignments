
let java: (string | number)[] = ['Niki',1,'Jay',2,'Sanjay',3];
let net: (string | number)[] = ["Niki",4,'Jay',3,'Sanjana',5];

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
console.log("Common Person working on Bot Net & Java are:"+commonStrings);

