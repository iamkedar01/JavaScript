// Array is a collection of items that may be similar or diffrent datatype
// Array type is also object but instaded of key we used the indices
// Array is mutable but string is immutable
// let marks = [96, 92 ,93, 86, 89, 99, 100];
// console.log(marks);
// console.log(marks.length); 
// it is used to print the length of array in simple words number of element s in arrray

// let heros = [ "Vishanuvardhana", " Rajakumar", "shankar Nag","Yash", "Sudeep","Darshan","Appu"];
// console.log(heros); // this the String array 
// console.log(`Total number of Heros are:${heros.length}`); // using the backlit 

// // Array indices 
// console.log(marks[0]);
// console.log(heros[3]);

// // loop iteration over the  array
// // for loop in js
// for(let i=0;i<heros.length;i++){
//     console.log(`in index ${i} Hero name is:${heros[i]}`);
// } 

//  // simmilar using the for of loop
//  for(let hero of heros){
//     console.log(`Hero name is:${hero}`);
//  }

//  // example
//  let cities = ["Bengaluru","Kalaburagi","Belagavi","hubbali","udupi"];
//  for(let city of cities){
//     console.log(`City name is : ${city.toUpperCase()}`); 
//     console.log(`City name is : ${city.toLowerCase()}`);
//     // in output we can both upper case and lower case both 
//  }

// Methods in Arrays 
// note always methods start from the small letter array and String both

// push()--> To add the element at  the end of the array
// pop()--> To delete the element from the at the end of the array
// toString()--> To convert the array to string 
 
// let foodItems = ["Apple","Banana","Orange","Mango","Watermelon"];
// foodItems.push("Lemon");
// console.log(foodItems);

// console.log(foodItems.pop()); // delete the last element in the array
// console.log(foodItems.toString()); // whole Array is converted into String

// Concate()--> Joins multiple array & return result  
//unshift()--> add to the starting of the array
// shift()--> delete from the start of the array  & return 
// let array1 = ["Yash","Darashan","Sudeep","Appu","uppi"];
// let array2 = ["Rajanikanta","suray"," Maheshbabu","Prabhasa","NTR"];
// let array3 = ["Sharukhan","salamankhan","Amira khan"];
// // let result = array1.concat(array2); // concatinated two array 
// let result = array1.concat(array2,array3);// concatinating two or more togather 
// console.log(result);// converted into a String 
// console.log(result.toString());

// console.log(array1.toString());
// array1.unshift("Shivarajkumar"); // to add the element starting of the 
// console.log(array1.toString());
// console.log(array3.toString());
// console.log(array3.shift()) // remove the First element of the array3

// slice --> it is used to extract the pecie of the code from the given array
//splice --> it is used to make the changes in the orginal array (add remove replace)
// let array1 = ["Yash","Darashan","Sudeep","Appu","uppi"];
// console.log(array1);
// console.log(array1.slice(0,3)); // note 3 index element is not include bcz it start from the zero
// console .log 

let num = [0,1,2,3,4,5,6,7,8,9,10];
console.log(num);
// num.splice(2,2,101,102);
// console.log(num);   

// // To Add a element in array
// num.splice(2,0,101,102);
// console.log(num);
// // starting index in array ,number of element to delete after given index ,add the how many element you want

// // To delete a element in array
// num.splice(1,1);
// // element index which we want delete , select the one element
// console.log(num);


// // To replace a element in array
// num.splice(2,1,102);
// // element index which we want delete , select the one element , add the element which you want to replace
// console.log(num);

num.splice(5);
 // here you pass the number includeing from that index to till the end of the arrya  all the element are deleted
console.log(num)
// here we can obsereve in the output only till the index 5 element are printed
num.splice();
console.log(num); // nothing  will be deleted in array
