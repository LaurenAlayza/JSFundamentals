/*
Arroe Functions
*/

//normal function delcaration
function coffee(){
    return 'coffee is good';
}

//normal function espression - unnamed function
let tea = function(){
    return'this is an anonymous function';
}

console.log(coffee());
console.log(tea());

//arrow functions are *always* anonymous
//arrow function expressoin
let hotChocolate = () => {
    return 'hot Chocolate is king'
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};
console.log(animals(3,2))
console.log(animals(0,0));

//concise versus block body for arrow functions
//concise body
let apples = x => `There are ${x} apples`;
console.log(apples(10));

//block body
let bananas = (x) => {
    return `there are ${x} bananas`;
}
console.log(bananas(5));

//return must be explicitly writtenin a block body arrow function
//be careful with line spacing on arrow functions

let func = () => 'hi';
let secondFunc = ()
=>
'hi';

console.log(secondFunc());

//arrow needs to follow directly after the parenthesis
