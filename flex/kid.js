//Divisible by 3 => Fizz
//Divisible by 5 => Buzz

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) { 
//     if (typeof input !== "number") 
//         return "Not a number"; 

//     if ((input % 3=== 0) && (input % 5 === 0))
//         return "FizzBuzz";
    
//     if (input % 3 === 0)
//         return "Fizz";

//     if (input % 5=== 0)
//         return "Buzz";


//     return input;
    
// }


// const limit = checkSpeed(70);
// console.log(limit);

// function checkSpeed(speed) {

//     const km = 5;
//     const max = 70;


//     if (speed < max + km)
//           return 'ok';
//     else{
//         const points = Math.floor(speed - max ) / km;
//         if (points >= 12)
//             console.log('License Suspended')
//         else
//         console.log('points:', points)
//     }





//     return "try again passed ypur limit"

    
// }


// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i <= 10; i++) {
//         if (i % 2 ==0){
//             console.log(i ,'EVEN')

            
//     }
//     else
//     console.log(i, 'ODD')
//     }
    
// }

// const array = [1, 2, 3, 4];
// console.log(county(array));

// function county(array){
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//         return count;
// }


// const circle = {
//     radius: 1,
//     draw(){
//         console.log(`draw`);
//     }
// };

// const another = Object.assign({}, circle);
// // const another = {};
// // for (let key in circle)
// //     another[key] = circle[key];
//     console.log(another);


// circle.color = 'blue';
// circle.draw = function() {}

// delete circle.color;

// console.log(circle);

// let number = {value:10};
// function increase(number){
//     number.value++;
// }

// increase(number);
// console.log(number);

// const courses = [
//     {id: 1, name: 'mosh'},
//     {id: 2, name: 'b'},
// ];


// const course = courses.findIndex(function(course) {
//     return courses.name === 'mosh';
// });


// Star(9);

// function Star(rows) {
//     let message = '';
//     for (let row = 0; row < rows; ++row){
//         message += '*';
//         console.log(message);
//     }
// }

// function walk(discount, ...prices) {
// const total = prices.reduce((a, b) => a + b);
// return total * (1 - discount);
// };

// console.log(walk(0.1, 20, 78));

const