// 01 Javascript Tutorial API
// console.log("Hello World");
// console.warn("This is a waring message");
// console.error("this is a error")

//02 Javascript Variable
// What are variables  ? - Container to store data value.
// var number1 = 34;
// var number2 = 44;
// console.log(number1 + number2);

/*
There are 8 data types in Javascript :-
 undefine, null,number, string, booleans, symbol, Bigint, object.

Object data types :-
object, array, date

*/

//1. undefined
// var und = undefined;
var und;
// console.log(und);

//2. null
var n = null;
// console.log(n);

//3. Number
var num1 = 342;
var num2 = 234.324;

//4. String
var str1 = "This is a string";
var str2 = "This is also string";

//5. Booleans
var a = true;
var b = false;
// console.log(a, b);

//Object
var marks = {
  Avinash: 34,
  Hardip: 36,
  Bhimo: 24,
  Jigo: 33.33,
};
// console.log(marks);

//Arrays
// var arr = [1, 2,"avi", 3, 4, 5]
// console.log(arr);

//Operator in Javascript
//Arithmetic operator
var a = 100;
var b = 90;
// console.log("The value of a+b is ", a+b);
// console.log("The value of a-b is ", a-b);
// console.log("The value of a/b is ", a/b);
// console.log("The value of a*b is ", a*b);

//Assignment Operator
var b = 50;
var c = b;
// c += 10;
// c -= 10;
// c *= 10;
c /= 10;
// console.log(c);

//Comparison Operator
var x = 20;
var y = 30;
// console.log(x == y);
// console.log(x === y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

//Logical Operator
// Logical And Operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or Operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical not
// console.log(!false);
// console.log(!true);

//Function in Javascript
function myfun(a, b) {
  c = (a + b) / 2;
  return c;
}
c1 = myfun(34, 26);
c2 = myfun(23, 90);
// console.log(c1,c2);

//Conditional in Javascript

var age = 24;
//Single if statement
// if(age > 8){
//     console.log("you are not a kid");
// }

//if else Conditional
/*if(age > 28){
    console.log("you are not a kid");
}else{
    console.log("you are a kid"); 
}
*/

//if else Ladder
var age = 31;
/*if(age > 32){
    console.log("you are not a kid");
}
else if(age > 26){
    console.log("bachhe nahi rahe");
}
else if(age > 22){
    console.log("yes bachhe nahi rahe");
}
else if(age > 18){
    console.log("18 bachhe nahi rahe");
}
else{
    console.log("bachhe rahe");
}
console.log("End of Ladder");
*/

var arr = [1, 2, 3, 4, 5, 6, 7];

// for(var i=0; i<arr.length;i++){
//     if(i == 2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function (elements) {
//   console.log(elements);
// });

// let j = 10;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// do{
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

let myArry = ["fan", "camera", 34, null, true];
//Array Method
// console.log(myArry.length);
// console.log(myArry[myArry.length-1]);  // Last element ki value janane ke liye
// console.log(myArry[4]);

// myArry.pop();  //last element ko remove kar ne liye
// myArry.push("Avinash");  //Last elements ko add kar ne liye
// myArry.shift();  //First elements ko remove kar ne liye
myArry.unshift("Avinash"); //First elements ko add kar ne liye
// console.log(myArry);

//String Methods in Javascript
let myString = "Avi is very good boy good good ";
// console.log(myString.length);
// console.log(myString.indexOf("good"));
// console.log(myString.lastIndexOf("good"));
// console.log(myString.slice(0,4));

// d = myString.replace("Avi","Avinash");
// d = myString.replace("good","bad");
// console.log(d,myString);

//String Reverse Method
/*let myname = "Avinash,Gajera";
let newname = myname.split("");
newname.reverse();
console.log(newname);*/

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getSeconds());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());
// console.log(mydate.getFullYear());


//DOM Manipulation
let elem = document.getElementById('Click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

tn = document.getElementsByTagName('div');
// console.log(tn)
createdelement = document.createElement("p");
createdelement.innerText = "This is a created para";
tn[0].appendChild(createdelement);

//JSON
obj = {name : "avinash" , length: 1, a:{this : "that"}}
jsn = JSON.stringify(obj);
// console.log(typeof jsn);
// console.log(jsn);
parsed = JSON.parse(`{"name":"avinash","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

for (let index = 1; index <= 10; index++) {
  let tableof = 75;
  // console.log(tableof+"*"+index+"="+ tableof *index);
}

for (let index = 0; index <= 10; index++) {
  for (let a = 0; a < index; a++) {
    document.write("*");
  }
  document.write("<br/>");
}
//output
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// for (let index = 0; index <=4; index++) {
//     for (let a = 0; a < 8; a++) {
//     document.write("*")

//     }
//     document.write("<br/>")
// }

//output
// ********
// ********
// ********
// ********
// ********

// find even number
var mixnum = [1, 2, 3, 4, 5, 6, 7];
var evennum = mixnum.filter((mixnum) => mixnum % 2 == 0);
var oddnum = mixnum.filter((mixnum) => mixnum % 2 !== 0);

// console.log(evennum);
// console.log(oddnum);

//Duplicate number
let dubnum = [1, 2, 3, 4, 4, 5, 6, 6, 7];
let newdupnum = [...new Set(dubnum)];
// console.log(newdupnum);


const array1 = [1,2,3,4];
// console.log(array1.fill(0,2,4));

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
// console.log(result);


// function includevalue(value){
//   return value >=10;
// }
const filter = [10,12,13,15,9].filter((value)=>{
  return value >= 10;
})
// console.log(filter);