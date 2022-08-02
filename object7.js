// Write a program that removes the first key and value of
//  a nested object.


// myDict= {
// 1: 'NAVGURUKUL',
// 2: 'IN',
// 3:{
// 'A' : 'WELCOME',
// 'B' : 'To',
// 'C' : 'DHARAMSALA'
// }
// }

// Output :-

// myDict= {
// 1: 'NAVGURUKUL',
// 2: 'IN',
// 3:
// { 'B' : 'To',
// 'C' : 'DHARAMSALA'
// }
// }

my= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{
    'A' : 'WELCOME',
    'B' : 'To',
    'C' : 'DHARAMSALA'
    }
}
delete my[3]['A'];
console.log(my);

