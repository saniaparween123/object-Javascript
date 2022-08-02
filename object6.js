// Write a program that calculates the sum of the values 
// of an object.
// Example :

// Input :
// my_dict = {
// 'data1':100,
// 'data2': -54,
// 'data3': 247
// }

// Output :-
// 293

var my = {
    'data1':100,
    'data2': -54,
    'data3': 247
};

var i=0;
var s=0;
for(i in my){
    s=s+my[i];
}
console.log(s);