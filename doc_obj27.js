// Q27.Write a  program to count the values associated with key in a object.

// student = [{'id': 1, 'success': True, 'name': 'Lary'},
//  {'id': 2, 'success': False, 'name': 'Rabi'},
//  {'id': 3, 'success': True, 'name': 'Alex'}]

// Sample input if key is id: then 6


student = [{'id': 1, 'success': 'True', 'name': 'Lary'},
 {'id': 2, 'success': 'False', 'name': 'Rabi'},
 {'id': 3, 'success': 'True', 'name': 'Alex'}]

 let s=0;
 let s1='';
 let s2=' ';

var key=require('readline-sync').question('enter your key:-- ');

 for(let i of student){
    for(let j in i){
        if(j=='id'){
            s+=i[j];

        }
        else if(j=='success'){
            s1+=i[j]+', ';
        }if(key=='id'){
            console.log(s);
        }
        else if(j=='name'){
            s2+=i[j]+', ';
        }
    }

 }
 
if(key=='id'){
    console.log(s);
}
else if(key=='success'){
    console.log(s1);
}
else if(key=='name'){
    console.log(s2);
}