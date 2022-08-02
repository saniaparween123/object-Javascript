// Q32.Write a  program to get the key, value and item
//  in a object.
// num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
// Sample Output:
// key  value  count                                                                                            
// 1     10      1                                                                                              
// 2     20      2                                                                                              
// 3     30      3                                                                                              
// 4     40      4                                                                                              
// 5     50      5                                                                                              
// 6     60      6

let num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60};
var i=0;
var count=1;

console.log('key  value  count')

for (i in num){
    console.log('',i,'   ',num[i],'   ',count);
    count+=1;
}



