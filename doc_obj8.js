// Write a program to check whether a given key
//  already exists in a object.


var a={
    name:'sania',
    age :16,
    place:'bihar'
}
var user=require('readline-sync').question('enter  ');
console.log(a.hasOwnProperty(user));


// without method
if (user in a){
    console.log('true');
}
else{
    console.log('false');
}


// without method
var i=0;
var c=0;
for(i in a){
    if(i==user){
        c+=1;
    }
}
if(c>=1){
    console.log(true);
}
else{
    console.log(false);
}
