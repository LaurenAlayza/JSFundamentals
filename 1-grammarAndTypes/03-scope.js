/*
SCOPE

1-grammarAndTypes
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

//example 1

var x = 12;

function scope() {
    var x = 33;
    var y = 10;
    console.log(x);
}
scope (); //logs 33
console.log(y);
console.log(x); //logs 12

//example 2
var x = 12;

function scope(){
x = 33;
console.log(x);
}

scope() //33
console.log(x); //33

//example 3

var x = 1;

function scope() {
    var x = 2;
    function scopeInner() {
        var x = 3;
        console.log(x); //3
    }
    scopeInner();
    console.log(x); //2
}
scope ();
console.log(x); //1
//code reads top to bottom so this will print as 321

//example 4 contrasts with 5
var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x) //45
    }
    console.log(x); //33
}
scope();
console.log(x); //12

//exmple 5 cnotrasts wth 4
var x = 12;

function scope() {
if (true){
    var x = 45;
    console.log(x); //45
}
console.log(x); //45 -> var doesn't obey 'block'scope
} 

scope ();
console.log(x);