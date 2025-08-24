// Loopes are used to execute the pecipe of code agian and agian 
// Detail explination is given below with example

// console.log("Hello World..!");
// console.log("Hello World..!");
// console.log("Hello World..!");
// console.log("Hello World..!");
// console.log("Hello World..!");

// this line of cod ecan be reduce useing the loopes 

// for (let i = 0; i<10;i++){
//     console.log("hello world...!");
// }
// console.log("loop is ended");

// // calculate the sum of the given number 
// let num = prompt("Enter a number:");
// let sum =0;
// for (let i = 0 ;i<= num;i++){ // here must aware of the logic and condition
//     sum= sum+i;
//     // sum +=i
// }
// console.log("sum of ",num,"is:",sum);


// // here checking how for loop  works
// for (let i =0; i<=5;i++) {
//     console.log("i =",i);
// }

// infinite loop means never ending loop 

// while loop in js 
// //here checking how for loop  works
// let i=0;
// while(i<= 5){
//     console.log("i =",i);
//     i++
// }

// do while loop in js
// //here checking how for loop  works
// let i=0;
// do{
//     console.log("i =",i);
//     i++;  // In the do while loop must aware of the increment option otherwise it will run infinite loop 
// }while(i<=5);

// // // for of loop in js in details 
// // // for of loop is used to iterate thorught the string and arrays
// let str = "Welcome to the Js";
// let size =0;
// for (let i of str){
//     console.log("i= ",i); // give the every character in a string 
//     size++;
    
// }
// console.log("size of the string is :", size);


// // for in loop in js in details 
// // it  is used for the objects iterations in js
// let student = { // object creation in java script
//     name : "student", 
//     age : 27,
//     cgps : 8.8,
//     ispass : true
// }
// for(let key in student ){
//     console.log("key=",key ,"value=",student[key]);
// }