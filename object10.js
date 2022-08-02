// Take 10 student inputs and marks and save them in an object.

var a=require('readline-sync');
var i=0;
var d={};
while(i<10){
    var name=a.question('enter key ');
    var marks=a.questionInt('enter value ');
    d[name]=marks;
    i+=1
}
console.log(d);

