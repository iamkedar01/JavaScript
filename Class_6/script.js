// console.dir(Window);
// // windw is glabole to access 
// console.log(window,document);
// // it is used to acces the every model present in the window object 
// console.dir(document.body);
// // it will give the properties and method  present indside the body tags of the document model
// // similar used for hrad also
// console.log(document.body);
// it will give the html code present in the body tags 

// console.log(document.body.style.background="Silver");  // used to change the color
// in this code we will change background color using the js
// steps find the path means where it is present 
// documet then body then style then background = " give the change color";


//  To acces the html element or code inside the  JAva Script 

// // 1)--->Select by id 

// if id is not present in html code it will give the null
// before using this you need to check the HTML and CSS code 

// let heading1 = document.getElementById("myid");
                // here element is single that is Element only
// console.dir(heading 1 ) 
// console.log(heading1);

// // here storeing the value in heading1 
// // ir used for the only one type of the data to make the chnages in css and js
// // the way of accesing the is document.getElementById("Name of the id );

// // 2)---> slect by class
// // it is return  the html collection similarally array in js 
// let headings = document.getElementsByClassName("myclass ");
//                 // here multiple elements are presen tthat is Elements
// console.dir(headings); // to store
// console.log(headings); // to print

// // 3)------> Slect by Tagname
// let pragraphs = document.getElementsByTagName("p");
// // console.dir(pragraphs);
// console.log(pragraphs);


// 4)-------> query Selector 
// let fristEl = document.querySelector("p");
// // it return  the first element of the pragrapgh
// console.log(fristEl);

// let elements = document.querySelectorAll("p");
// console.log(elements);
// // it return the all the elements  of the pragrapg in nodelist means collection of every pragraph

let fristEl = document.querySelector(".myclass"); // class name must be start with the . then name of the class
// it return  the first element of the pragrapgh
console.log(fristEl);

let elements = document.querySelectorAll(".myclass");
console.log(elements);
// it return the all the elements  of the pragrapg in nodelist means collection of every pragraph
