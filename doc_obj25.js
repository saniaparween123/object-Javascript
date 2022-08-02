// Q25. Write a  program to create a object
//  from a string.
// Note: Track the count of the letters from the string.
// Sample string : 'w3resource'
// Output: {'w': 1, '3': 1, 'r': 2, 'e': 2, 's': 1, 'o': 1, 'u': 1, 'c': 1}

var s='w3resource';
var i=0;
let obj={};
for (i of s){
    var j=0;
    var c=0;
    for (j of s){
        if(i==j){
            c+=1;
        }
    }
   obj[i]= c;
}
console.log(obj);




