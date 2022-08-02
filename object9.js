// Take 1 list and have some objects inside it as sample
//  data given below, and create a new list with unique 
// values and console the unique values list.

// Example :
// Input :
// [
// {"first":"1"},
// {"second": "2"},
// {"third": "1"},
// {"four": "5"},
// {"five":"5"},
// {"six":"9"},
// {"seven":"7"}
// ]

// Output :-

// [2', '7', '9', '5', '1']



var my=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
]
var i=0;
var s=[];
var j=1;
for(i of my){
    for (j in i){
        if(!s.includes(i[j])){
            s.push(i[j]);
        }
    }
}
console.log(s);