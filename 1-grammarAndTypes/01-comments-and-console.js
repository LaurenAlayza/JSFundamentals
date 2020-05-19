/*
COMMENTS

1-grammarAndTypes
    01-comments-and-console.js
*/

//value of a comment:
//communicates to anyone reading our code

//types of comments:
//1) single-line comment

/*
Anything between the end of these slashes is a comment. 
2) multi-line comment
*/

//console.log
//outputs some message to the console

console.log("this is a console.log message!");

console.log("you can separate parts of the consle message with commas,","just like this!");

console.log(13,1,17,18);

//console.log and debugging
//we can debug with console.log messages in 2 big ways:
//1) we can check the status of some javascript "thing"
//2) we can check a process we have built with repeated lonsole.log messages.

//example 1:
var sampleName ='Lauren';
console.log(sampleName);

//example 2:
var sampleNum =1;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);