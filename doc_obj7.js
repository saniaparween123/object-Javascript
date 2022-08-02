// Write a Python script to concatenate the following
//  dictionaries to create a new one.
// Sample Dictionary :ript to concatenate the following 
// dictionaries to create a new one.

// dic1={1:10, 2:20}
// dic2={3:30, 4:40}
// dic3={5:50,6:60}
// Expected Result : {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}

let obj={1:10, 2:20}
let obj1={3:30, 4:40}
let obj2={5:50,6:60}

// with spread method
let o={
    ...obj,
    ...obj1,
    ...obj2
};
console.log(o);



// without method
let d={};
var i=0;
var j=0;
var k=0;
for (i in obj){
    d[i]=obj[i];
}

for (j in obj1){
    d[j]=obj1[j];
}

for (k in obj2){
    d[k]=obj2[k];
}
console.log(d);