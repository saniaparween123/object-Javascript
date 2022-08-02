// Q22. Write a program to create and display all combinations of letters, 
// selecting each letter from a different key in an object. Go to the editor
// Sample data : {'1':['a','b'], '2':['c','d']}

// Expected Output:
// ac
// ad
// bc
// bd

const obj= {'1':['a','b'], '2':['c','d']};
for(let i of obj[1]){
    for(let j of obj[2]){
        console.log(i+j)
    }
}

