//Functions in js in details 
// it is used to reduce the redudance in code
// function myfun(){
//     console.log("Welcome to the javascript\nWe learning the JS............!");
// }
// // myfun();
// // myfun();
// // myfun();
// // myfun();
// // myfun();

// // this above code can be reduce the using the for loop  
// for (let i=0;i<5;i++){ // it will call the function 7 times
//     myfun();
// }


// Passing the parameter to the functions
// function myfun(input,){
//     // parameter is --> input
//     console.log(input)

// }
// let input = prompt("Enter a message : ");
// let n = prompt("Enter a number to print multiple times of given input:");
// myfun(input);// this called parameter or arguments  

// function myfun(input,n){
//     // parameter is --> input
//     console.log(input*n);

// }
// let input = prompt("Enter a message : ");
// let n = prompt("Enter a number to print multiple times of given input:");
// myfun(input,n);// this called parameter or arguments  we can pass multipe arguments
// // this will givethe error that is NaN means not a number

// useing the return keyword 
// //this is the sum of two number  example
// function sum(a , b){
//     return a + b ; // This is the last line of the code after this code will not executed
//     console.log("This will not executed");
//     // when you use the return keyword in function after that  whatever you Written that code will not executed 
// }

// let result = sum(2,3);
// console.log(result);
// // this the example of multiple of two number 
// function mul(a , b){
            // variable inside the parameter that are only acces able in the function only
//     return a * b ; // This is the last line of the code after this code will not executed
//     console.log("This will not executed");
//     // when you use the return keyword in function after that  whatever you Written that code will not executed 
// }
// let result = mul(2,3);
// console.log(result);

// Arrow function
// compact way writeing a function using the Arrow function

// const Arrowsum = (a,b)=>{
//     return a+b;
// }
// console.log(Arrowsum()); // here if you not pass the value it will give the whole function in output bcz it stored in a variable 
// console.log(Arrowsum(2,3)); // here it will givw the sum of the given two number

/* In this above code Const is a type of the variable means 
    arrowsum is the name of the function or variable name
    = is used to assgin the paramter value ( ) the specific  name 
    => this indicate the arrow function remaining same as its function

*/
// let  mul = (a,b)=>{
//     return a*b;
// }
// console.log(mul()); // here if you not pass the value it will give the whole function in output bcz it stored in a variable 
// console.log(mul(2,3));

const greeating = () => console.log("welcome to the JS..........!");//this is used  for single line codes
greeating();