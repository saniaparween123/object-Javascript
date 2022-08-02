
// Q4. Write a script to print a object where the
//  keys are numbers between 1 and 15 (both included) and 
// the values are square of keys.

// Simple Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100, 11: 121, 12: 144, 13: 169, 14: 196, 15: 225}.


var i=1;
var x=15;
let obj={};
while(i<=x){
    obj[i]= i**2;
    i+=1;
}
console.log(obj);


