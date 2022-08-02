// Q17.Write a program to sort a object by key.

let obj={2: 20, 1: 10,  4: 40, 6: 60, 5: 50, 3: 30};
var i=0;
var o={};
for (i in obj){
    o[i]=obj[i];
}
console.log(o);
