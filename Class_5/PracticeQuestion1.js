// program to find the sequre of the each element in array 
// let nums = [1,2,3,4,5,6,7,8,9,10];
// nums.forEach((num)=>{ 
//     console.log(`The Squre of the ${num} is: ${num * num}`);//num**2
// });

/*  NOte: Check the Syntax


*/

// The diffrent way of write the call Back function
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let CalcSqure = (num)=>{
//     console.log(`The Squre of the ${num} is: ${num**2}`);// num *num
// }
// nums.forEach(CalcSqure);
/*  In this above vode using the function delcare the call back functions
    after that pass that function name as paramter to the forEach loop.

*/

// find the how many vowels in the given string 

let str ="The javascripe is good Programming language";
let count=0;
function Vowelscount(str){
    for (var char of str){
        if (char=="a"|| char=="e" || char=="i"||char=="o"||char=="u"||char=="A"|| char=="E" || char=="I"||char=="O"||char=="U"){
        count+=1;
        }
    }
console.log(`The number of voules in the is : ${count}`);
}
Vowelscount(str);