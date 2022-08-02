// Q18.Write a Python program to get the maximum and minimum value in a dictionary.

let obj1={2: 20, 1: 10,  4: 40, 6: 60, 5: 50, 3: 30};
let obj=Object.values(obj1);

// with method
console.log(Math.max.apply(null,obj));
console.log(Math.min.apply(null,obj));



// without method
var i=0;
var k=0;
var j=0;
for(i of obj){
    if(i>k){
        k=i
    }
}
console.log(k)

for(j of obj){
    if(k>j){
        k=j
    }
}
console.log(k)





