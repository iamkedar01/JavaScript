// this is the single line comment 
/* this is a 
multiple line comment */
console.log("Hello world");

// let a = 2;
// let b =  4;
// // Arithmetic opertions in js
// console.log("a=",a,"& b=",b);
// console.log("a+b" ,a+b);
// console.log("a-b",a+b);
// console.log("a*b" ,a*b);
// console.log("a/b" ,a/b);
// console.log("a%b" ,a%b);
// console.log("a**b" ,a**b);

// unary operations 
// console.log("a=",a,"& b=",b);

// console.log("a=",++a);
// console.log("b=",++b); // this is the pre increment 
// a = a +1;
// b = b-1;
// console.log("a=",a);
// console.log("b=",b);

// Assignment opertions
// console.log("a += 2 ", a = a+2)
// console.log("a -= 2 ", a = a-2) 
// console.log("a *= 2 ", a = a*2)
// console.log("a /= 2 ", a = a/2)
// console.log("a %= 2 ", a = a%2)
// console.log("a **= 2 ", a = a**2)

// comparsions oprator in js
// console.log(" 2==4" ,a==b);
// console.log(" 2!=4" ,a!=b);
// console.log(" 2>4" ,a>b);
// console.log(" 2>4" ,a<b);
// console.log(" 2>=4" ,a>=b);
// console.log(" 2<=4" ,a<=b);

// logical opertion in js
// /* logiacl AND &&  
//    logical OR ||
//    logicak NOt !
// */
// let cond1 = a>b;
// let cond2 = a==b;
// console.log("cond1 && cond2", cond1&cond2);
// console.log("cond1 || cond2", cond1||cond2);
// console.log("!Cond1", !cond1); // it sis requeried only one condition


// Condional statement in Js
/* there is total three condtion statements
        1) if statement
        2) else statement
        3) else -if statement 
        */
// if (a>18){
//     console.log("You are eligible to vote");

// }else{
//     console.log("your not eligible to vote");
// }

// //Another example
// let color ;
// let mode = "white";
// if(mode == "Dark"){
//     color = "Black color  ";
// }else{
//     color = "White color ";
// }
// console.log(color);


// //The program to find the Weather a number is even or odd
// let num = 10 ;

// if (num % 2 ==0){
//     console.log(num," is even number........!");
// }else{
//     console.log( num , " is a odd number........!")
// }

// //THis programm using the else if statement to find the person is child or adult or senior citizion based on the age
// let age = 75

// if (age<18){
//     console.log("The person is child");
// }else if(age>= 18 && age <= 60 ){
//     console.log("The person is adult")
// }else{
//     console.log("The person is the senior")
// }


// // Teranry operation in js
// // it is similar to the if else or compact version of the if else
//  // condtion ? trueoutput : falseoutput  its is used only when we have to execute the only one statement 
//  let age = 10;

//  let result = age >=18 ?"adult":"child";
//  console.log(result);

//  age >=18 ?console.log("you can vote"): console.log("You can't vote ");

// MDN tools you can explore the javascprit in depath

// alert("Welcome to the js..............!"); // it apper when you enter the website or refresh the website  
// it is a one time pop for the website  

// prompt is used to take the input from the user we store in the variable 
let name = prompt("Enter your name:");
console.log(name);