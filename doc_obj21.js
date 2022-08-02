
// Q21.Write a  program to print all unique values in a object.
// Sample Data : [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
// Expected Output : Unique Values: {'S005', 'S002', 'S007', 'S001', 'S009'}


const arr =[{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}];
var unq=[];

for(let i of arr){
    for(let j in i){
        if(!unq.includes(i[j])){
            unq.push(i[j]);
        }
    }
}
console.log(unq);




var unq=[];

for(let i of arr){
    for(let j in i){
        if(!unq.includes(i[j])){
            unq.push(i[j]);
        }
    }
}
console.log({...unq});


