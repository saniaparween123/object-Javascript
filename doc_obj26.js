// Q26.
// Write a program to print a object in table format.
// my_dict = {'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}

// Sample Output:
// C1 C2 C3                                                                                                      
// 1 5 9                                                                                                        
// 2 6 10                                                                                                        
// 3 7 11


const obj= {'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]};
let keys='';
let value=' ';
let c='';
let c1='';
let c2='';
for(let i in obj){
    keys+=i+' ';
    for(let j in obj[i]){
        if(j==0){
            c+=obj[i][j]+'  ';
        }
        if(j==1){
            c1+=obj[i][j]+'  ';
        }
        if(j==2){
            c2+=obj[i][j]+'  ';
        }
    }
}
console.log(keys);
console.log(c);
console.log(c1);
console.log(c2);

