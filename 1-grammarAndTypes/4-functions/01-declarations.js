/*
FUNCTIONS 
*/

//GENERAL IDEAS:at their broadest level, functions do the following:
//1) they take some input which the function will handle or process. 
//2) they process the input given to the,m.
//3) they sualky but not always return some value
//4) they can be invoked for use as many times as we want cutitng down on code repetition. 

//excample 1:
function newFunc(num){
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//example 2:

function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Lauren', 'Alayza'));
console.log(sentence('Tyler', "shelton"));
let superImportantSentence = sentence('Lolo', 'Nicole');
console.log(superImportantSentence);

//lets build a function that takes a comples type--an array in his case, and concole log each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya'];
let arr2 = [5,6,7,8,9,10];

function interatorFunc(inputArr){
    for (let element of inputArr);{
        console.log(element);
    }
}

interatorFunc(arr);
interatorFunc(arr2);