// Q10.Write a Python script to print a dictionary where
//  the keys are numbers between 1 and 15 (both included) 
// and the values are square of keys.


var i=1;
var obj={};
while(i<=15){
    obj[i]=i**2;
    i++;
}
console.log(obj);