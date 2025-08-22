fullname ="Shiva";
age = 22;
price = 200000.20;
x = null;
y = undefined;
isfollow = true;


console.log("Welcome to the JS!");
console.log(fullname);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(isfollow);

// here the object creations
const Student ={
    fullname : "kedar" ,
    age : 27,
    cgpa : 8.2 ,
    isPass : true
} // here maintain the , between the each key:value  also maintain the : after the key to assign the value 
// here we can = is used to assign to the creation of the object 
console.log(Student);

console.log(Student["age"]); // here key value is must be define inside the double colone 

Student["fullname"] = "Shiva";
 // useing this we can update the  existing value also as given above and print the name
console.log(Student["fullname"]);