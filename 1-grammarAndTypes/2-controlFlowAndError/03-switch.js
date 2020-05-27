/*
SWITCH STATEMENTS
*/

let friend;

switch(friend) {
    case 'Tom':
    console.log('Hey Tom, when will you bring food for me?');
    break;
    case: 'Ken':
    console.log('Hey Ken, do you have a llama in your backyard?');
    break;
    case 'Alex':
    console.log('Hey Alex, how many cards do you own?');
    break:
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case: true:
    console.log('yep is a string or boolean');
    break;
    default:
        console.log('yep is not a string or a numbner');
}