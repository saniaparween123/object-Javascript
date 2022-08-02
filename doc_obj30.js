// Q30.Write a program to remove spaces from object keys.
// Original object:  {'S  001': ['Math', 'Science'], 'S    002': ['Math', 'English']}
// New object:  {'S001': ['Math', 'Science'], 'S002': ['Math', 'English']}


const obj={'S  001': ['Math', 'Science'], 'S    002': ['Math', 'English']};
let new_obj={};

for(let i in obj){
    var j=0;
    var s='';
    while(j<i.length){
        if(i[j]== " "){
        }

        else{
            s=s+i[j];
        }

        j+=1;
    }
    new_obj[s]=obj[i]

}
console.log(new_obj);






