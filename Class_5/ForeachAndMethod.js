// for each and some methods 
// callBack Function in JS means  a function is passed as aragument to the another function 
// for each loop is also called higher order function/Method (HOF/HOM)
//  function abc(){
//         console.log("Hello world");
//  }

//  function myfun(abc){// here abc function is passed to the myfun as a parameter or aragument 
//     return abc;
//  }
//  myfun();
// abc();
// console.log( myfun());

// for each array 

// let arr = ["Bengaluru","Kalaburagi","HUbali","Mysore","Belagavi"];

// arr.forEach((val)=>{
//     console.log(val);

// });
/* in this above code explination about the for each loop
    inside the bracket we need to declare the a variable so useing that we can print.
     the elements present in the array  
     here we useing the arrow function after the () we declare the => after that open the {}
     Inside that that we print code or perfrom the actions  */
/*
     note :Inside the parameter ( items , index, arr) => { }
        Here we can have the three default parmeters like items also called vlues  wgich present in array
        2nd one is index or position  means which index a element is stored 
        3rd one is arr means here we print the whole array 
*/
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((Value , idx , arr)=>{ // note : always {}must be define in the parameter of the For each arr
//     console.log(Value , idx , arr);
// })  // it is alsp used for the  String array also



// some important methods in array 
/* Map methods:
               it is similar to the forEach loop but in output it return as  new array 
               crate the resutls as a new array using some operation. The value its callback is used to from a new array\
     note: when we useing the forEach loop and Map  most casee we use only value rare usage of the index and arr
*/
// let names = ["Mallu" ,"Kedar", "Manju","Pintu","Siddarth"];
// names.map((val)=>{  // it is similar to the forEach only diffrence is map keyword and it return output as a array
//      console.log(val);
// }); 

// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let arr2= arr1.map((val)=>{  // using the variable to store the value in a array similar to the foreach but retuen as array
// });
// console.log(arr2);
// this function as example of Squre of number
 // let arr = [1,2,3,4,5,6,7,8,9,10];
     // arr.map((val)=>{
          
     //      console.log(`The Squre of ${val} is: ${val*2}`);
     // });


     // //  map is used to return the value as array exapmle 
     // let arr = [1,2,3,4,5,6,7,8,9,10];
     // let squreNum = arr.map((val)=>{
     //      return val * val; // val*2;
     // });
     // console.log(`The Squre of  each element in array is: ${squreNum}`);


//      // Filter method in array
//   //   filter  method is similar to the for map but it works on the condtion and return true value in array as outputs
//      let arr = [1,2,3,4,5,6,7,8,9,10];
//      let evenarr = arr.filter((val)=>{
//           return val % 2== 0;  // val % 2 !==0; this for the odd number in list
//      });
//      console.log(evenarr );
     // Reduce method 
     // it is use dto reduce the code
     let arr =[1,2,3,4,5];
      const output = arr.reduce((res,val)=>{ // two variable are used one to store the result another is acces the each element in array
          return res + val ;                  // how it works means  res = res + val similarally iterate the loop throught the array
      });
      console.log(output);

      // To find the maxmimum element in array
      let arr1 = [7,4,5,2,9,75,12,23];

      const maxele = arr1.reduce((prev,cur)=>{
               return prev > cur ? prev : cur;
      });
      console.log(maxele);