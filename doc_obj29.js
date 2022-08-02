// Q29.Write a program to sort a array alphabetically in an object.

const obj={1:['c','d','a','b'], 2:['d','b','c'], 3:['b','c','a']};
const new_obj={};
for(let i in obj){
    obj[i].sort();
    new_obj[i]=obj[i];
}
console.log(new_obj)