// setTimeout(() => console.log ( 'This is a test of timeouts'), 1000);

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (true){
            resolve('success');
        } else {
            reject ('failure');
        }
    }, 3000);
})

promise
    // .then(success => console.log(success));
    .then(blah => console.log(blah)) //blah = 'success'
    .catch(err => console.log(err)); //err = 'failure'

console.log('this code is after our promise & .then chain!');

function playFunc() {
    return 5;
}

console.log(playFunc()); 