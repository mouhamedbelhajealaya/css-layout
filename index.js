
// console.log('HELO WORD');
// alert(""); 
//  var visitorName =prompt("What's your name : ")

// var isCoolWithIt = confirm("Are you ok with it?")
// console.log(typeof(true)) // prints boolean
// console.log(typeof(9000)) // prints number
// console.log(typeof("Übermensch")) // prints string
// console.log(typeof(anUndefinedVar)) // prints undefined
// console.log(typeof(null)) // prints object
// var person1 = {
// 	name: "foulan",
// 	age: 9000,
// 	isStudent: true,
//     isCoolWithIt :""



// }
// console.log(person1);
// console.log(5+2);
// // 7
// console.log(7%5);
// // 2
// console.log(5**2);
// // 25
// NaN
// console.log(0 / 0);
// console.log('Some random string' * 2);

// // Infinity 
// console.log(1 / 0);
// console.log(Infinity * Infinity);
// console.log(1e+309);
// var num = 5;
// console.log(num)
// num ++
// console.log(num)
// num --
// console.log(num)
// -- num 
// console.log(num)
// ++ num
// console.log(num)
// var x = 10
// x= 10+5
// x *= 5

// console.log(5===5);
// var x = 10// x is truthy
// var y = 5 // y is falsey
// var z = null // z is falsey
// console.log(x && y) // prints 0
// console.log(z && y) // prints null
// console.log(z || x) // prints 1
// // console.log(y || z) // prints null
// var x = "google";
// x += "." + "com"
// console.log(x) // prints “google.com”
// var  add = function(a, b) {
// 	return a + b;
// }
// add(2,5)
// console.log(add( 5,2)); 
// function add (a,b){
//     return a+b;
// }
// add(5,2)
// var subtract=function( a, b ) {
//     return a-b;
//   }
//   subtract(2, 3) 
// console.log(add(2,5));
// function moin (a,b){
//     return a-b;
// }
//  console.log(moin(2,5));
// function functionName(param1,param2){
	// block of JavaScript code
// }
// function checkIfNumber( x ){
//     if ( typeof x === "string" ){
//         console.log( x + ' is a number.' ); 
//     }
// }
// checkIfNumber( 5 )
// change the function parameters if you need  
// function test(a) { 
//     if (a>=0) {
//         return     a*10 
//     }
//     return console.log('enter a positive number');
// }
// function test(a){
//     if(a>=0){
//        return a*10
// }
//        else{
//          console.log("Please enter a positive number")
//        }
//   }
//   function name(a) {a=>10}
// function test (a){
//     var genz = 'gen Z' 
//     if(0 <a <= 20){
//         return genz;
//     }
// }
//  function test(m){
//     let genz = "gen z"
//     let Millennials= "Millennials"
//     let GenX = "Gen X"
//     if (m<20) {
//                     return  genz
//                     }
//                  else if (m<30) {
//                    return Millennials
//                  }
//                  else { 
//                    return   GenX 
//                  } 
//                   }
// function decodeColor( code ) {
//     switch( code) {
// 	case 1:
// 		console.log( 'Red' );		
// 	case 2:
// 		console.log( 'Yellow' );		
// 	case "x":
// 		console.log( 'Green' );		
// 	default:
// 		console.log( 'Unknown code' );
// 	}
// }
// function test(m){
//     switch(m){
// case "january" : return "winter"
// break;
// case "february" : return "winter"
// break;
// //......
// case "March" : return "spring"
// break;
// case "April" : return "spring"
// break;
// case "May" : return "spring"
// break;
// case "June" : return "summer"
// break;
// case "July" : return "summer"
//  break;
// case "August" : return "summer"
// break;
// case "September" : return "autumn"
// break;
// case "October" : return "autumn"
// break;
// case "November" : return "autumn"
// break;
// case "December" : return "winter"
// break;
// default : return "not a month"
//     }
//       }
// Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

// var sum = 0;
// var i = 0;
// while ( i < numbers.length ) {
//     sum += numbers[i];
//     i += 1;
// }
// console.log( 'The loop was executed ' + i + ' times' );
// // prints The loop was executed 10 times

// // console.log(sum);
// const courses=["HTML", "CSS", "JavaScript" ]

// courses.forEach( (item)=> {
// console.log(item)
// } )
// const arr=["ali", "hassan", 26]

// for (let i=0; i < arr.length; i++) {

// const item=arr[i];
// console.log(item)
// }
// change the function parameters if you need
// change the function parameters if you need
// change the function parameters if you need
// test=[1,3,5] 
// let prod=1

// let i=0
// do{
// prod+= test[i];
//     i += 1;
// //...
// }
// while(i < test.length){
// console.log (prod)
// }
// change the function parameters if you need
// change the function parameters if you need
// change the function parameters if you need
// test=[1,3,5] 
// let prod=1

// let i=0
// do{
// prod*= test[i];
//     i += 1;
// //...
// }
// while(i < test.length)
// return prod
// function test(arr) { 
  
//     for (let i=0; i< arr.length; /*...*/
//     ){
//     arr[i]=arr[i]*arr[i]

//      }
//   return arr
// }
// console.log(test([1,4]));
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;
// for ( var i in numbers ) {
//         if ( i % 2 == 0 ) continue;
//         sum += numbers[i]
// }

// console.log(sum);


// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;

// for ( var i in numbers) {
// 	sum += numbers[i];
// 	if ( sum >= 100 ) {
//             break;
//         }
//     }
// console.log(sum)
// function test(day) {
//     switch (day) {
//       case  "monday" :
//          return 1
//         break;
//       case "saturday":
//          return 6
//       break;
//       case "sunday":
//          return 7
//        break;
    
//       default : return 'please enter a valid day'
//     }}
// function test(num) { 
//      var arr=[num];
    
//    num.unshift( '0' ); 
  
  
//      return arr 

//  console.log(arr);
//  function test(num) { 
//    var arr=[];
//    arr = [num]
//    Write your code below this line  
//   num.unshift( '0' ); 
  
  
//      return arr
//   }
// }
function test(num){
  var arr =[num]
     num.pop()
     num.unshift('0')
   return arr
     }

