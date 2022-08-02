// Q24.
// Write a Python program to combine values in python list of dictionaries.
// Sample data: [{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, {'item': 'item1', 'amount': 750}]
// Expected Output: Counter({'item1': 1150, 'item2': 300})



const arr=[{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, {'item': 'item1', 'amount': 750}];
const obj={};
for(let i of arr){
    var val=Object.values(i);

    if(val[0] in obj){
        for(let z in obj){

            if(z==val[0]){
                var l=obj[z]+val[1];
                obj[val[0]]=l;
            }   
        } 
    }
    else{
        obj[val[0]]=val[1];
    }
}

 console.log(obj);



