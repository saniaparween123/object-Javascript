// Q11.Write a Python script to merge two Python dictionaries

let obj={1:10, 2:20}
let obj1={3:30, 4:40}

// with spread method
let d={
    ...obj,
    ...obj1
};
console.log(d);


// without spread method
var o={};
var i=0;
var j=0;
for(i in obj){
    o[i]=obj[i];
}
for(j in obj1){
    o[j]=obj1[j];
}
console.log(o);
