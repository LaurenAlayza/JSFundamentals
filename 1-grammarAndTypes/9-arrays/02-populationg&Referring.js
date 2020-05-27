/*
ARRAYS
*/

//what is an array?
//an array has square brackets, [] they can hld multiple data types, in an ordered way. 
//arrays can list taya types in an ordered, numbered way. 
//hidden key value pairs in arrays & objects

let students = ['tony','lolo', 'billy', 'mama', 23, true,['lolo','sam']]; 
//hidden keys:   0       1       2        3      4   5     6       7
console.log(typeof students); //typeof doesnt tell me if my variable is an array it returnds that it is an object. 
console.log(students instanceof Array); //instance of tell me that my array is an array
//use instance of to check if i have an array. typeof eill just tell it it is an object. 
console.log(students[2]);
//use square brackets to get value of array

let name = students[6][1];
console.log(`hello ${name}, you look grrrreat!`);

//recall for-of loop => gives the value of the array
let food = ['Pecan pie', 'Shrimp', 'quesadilla', 'cheesecake', 'hotdog'];

for (f of food){
    console.log(f+' is amazing!');
}

//array methods 
//food.push('pizza'); //added to the end of our array
//console.log(food);
//push allows us to add to an array that already exists
//food.splice(1, 1, 'bananas');
//console.log(food);
//food.splice(2, 0, 'sweet potato pie'); //asks for an insertion point, how many things to remove, then item(s) to add.
//console.log(food);
//food.pop(); //removes the last element of an array
//console.log(food);

//food = food.slice(2,5); //the first number is the first element to slice from ther array while the 
//decond number is the stop position which is not to be included. 
//console.log(food);

//forEach allows us to iterate whith loops specifically, an we can directly grab both the elements 
//and their index numbers 
//food.forEach((f) => console.log(f));

//food.forEach((food, index) => {
//    console.log(food);
 //   console.log(index);
//})

//console.log w string interpolation
food.forEach((food, index) => {
console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'snow white', 'alice in wonderland', 'sound of music'];

movies.push('the force awakens');
console.log(movies);
movies.splice(3, 1, 'willy wonka');
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//let's do the following with an array:
//we will check if we are working with an array
//fliip the values within the array (what was in index 4 is now in 0, 3 to 2, etc. )
//using a method only, let's print the calues of the bewly arranged array

let arr = new Array(0,1,2,3,4,5);

if (arr instanceof Array){
   let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}