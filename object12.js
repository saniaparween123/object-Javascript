// Count the values of an object property; mostly they 
// contain lists as values.

// Input :-
// var dict = {
// 'Alex': ['subj1', 'subj2', 'subj3'],
// 'David': ['subj1', 'subj2']
// }

// Output :-
// total count:5


var dict = {
    'Alex': ['subj1', 'subj2', 'subj3'],
    'David': ['subj1', 'subj2']
}

var i=0;
var j=0;
var count=0;
for (i in dict){
    j=j+dict[i].length;
}
console.log('total count:'+j);

