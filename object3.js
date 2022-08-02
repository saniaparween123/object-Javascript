// Write a program to print count a substring in a Main string.
// var mainString="My name is kumar, and my friend’s name is Dhamu"
// var subString="is"
// Output:
// The substring is there 2 times in main string.


var a="My name is kumar, and my friend's name is Dhamu";
var b="is";
var count=0;
var j=1;
var i=0;
for(i in a){
    var k=a[i]+a[j];
    if(b==k){
        count+=1;
    }
    j+=1;
}
console.log(count);


