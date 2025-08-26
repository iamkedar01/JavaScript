// program to find the sequre of the each element in array 
// let nums = [1,2,3,4,5,6,7,8,9,10];
// nums.forEach((num)=>{ 
//     console.log(`The Squre of the ${num} is: ${num * num}`);//num**2
// });

/*  NOte: Check the Syntax


*/

// The diffrent way of write the call Back function
let nums = [1,2,3,4,5,6,7,8,9,10];
let CalcSqure = (num)=>{
    console.log(`The Squre of the ${num} is: ${num**2}`);// num *num
}
nums.forEach(CalcSqure);
/*  In this above vode using the function delcare the call back functions
    after that pass that function name as paramter to the forEach loop.

*/