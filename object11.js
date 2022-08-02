// You need to count the number of occurrences of each
//  unique character of a word "MISSISSIPPI" and store 
// them in an object in key, value pairs.

// Example:-
// Output :-
// {M:1,I:4,S:4,P:2}

var a= "MISSISSIPPI";
var i=0;
var j=0;
var d={};

for(i of a){
    var count=0;
    for (j of a){
        if(i==j){
            count+=1;
        }
    }
    d[i]=count;  
}

console.log(d);
