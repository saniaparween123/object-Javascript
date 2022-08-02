// Write a programme to find the 3 maximum values of an 
// object and print them.

// Input :-
// var my_dict = {
// 'a':50,
// 'b':58,
// 'c':56,
// 'd':40,
// 'e':100,
// 'f':20
// }

// Output :-
// [58,56,100]

var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
}



var l=0;
var a=[];
var d=[];

for(l in my_dict){
    a.push(my_dict[l]);  
}
a.sort((a,b)=>a-b);

var e=(Math.max.apply(null, a));
d.push(e);
a.pop();

a.sort((a,b)=>a-b);

var f=(Math.max.apply(null, a));
d.push(f);
a.pop();

a.sort((a,b)=>a-b);

var g=(Math.max.apply(null, a));
d.push(g);
console.log(d);



