// Write a programme to generate and print a dictionary that 
// contains a number (between 1 and n) in the form (x, x*x).

// Sample input (n = 5) :

var a=require('readline-sync');
var b=a.questionInt('no ');
var d={};
for (var i=0;i<=b;i++){
    d[i]=i**2;
}
console.log(d);

