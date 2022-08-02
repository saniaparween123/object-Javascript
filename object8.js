// Take two lists and make an object, 1st list elements be
//  as keys, and 2nd lists elements as values.

// Example :-
// Input :-
// var list1=[“one”,”two”,”three”,”four”,”five”]
// var list2=[1,2,3,4,5,]

// Output :-
// {“one”:1,”two”:2,”three”:3,”four”:4,”five”:5}

var a1=["one","two","three","four","five"];
var a2=[1,2,3,4,5,];
var i=0;
var j=0;
var d={};
for(i of a1){
    d[i]=a2[j]
    j=j+1
}
console.log(d);
