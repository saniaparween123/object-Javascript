// Write a program to take 1 input and check whether given
//  input exists in our object or not, if it exists print 
// exists or else prints not exist.
// Example :
// dict={“name”:”Raju”, “marks”:56}
// if input is “name” then output will be “exist”
// If input is “class” then output will be “not exists”.


var a= require('readline-sync');
var b= a.question('enter ');

let dict={"name":"Raju", "marks":56};
var i=0;

for(i in dict){
    if (i==b){
        console.log('exist');
        break
    }
    else{
        console.log('not exist');
        break
    }
}
