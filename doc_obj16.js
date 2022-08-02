// Q16.Write a Python program to map two array into a object.

let arr=['name','age','class'];
let arr1=['sania', 16, 11];
let obj={};
var i=0;
var j=0;
for (i in arr){
    j=arr[i];
    obj[j]=arr1[i];
}
console.log(obj);



