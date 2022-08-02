// Q28.Write a program to convert a array into a nested object of keys.
// array = [1, 2, 3, 4]

// Sample output:
// {1: {2: {3: {4: {}}}}}

let array = [1, 2, 3, 4];
let a1=array.length-1
let a2=array.length-2;
let a3=array.length-3;
let a4=array.length-4;

const d={}
const e={};
const f={}
const g={};

d[array[a1]]={};
e[array[a2]]=d;
f[array[a3]]=e;
g[array[a4]]=f;

console.log(g);



