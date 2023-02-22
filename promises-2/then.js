// function  -> signature/interface
promise1 = wait(2000)

/*const thenPromise2 = promise1.then(() => {
    console.log('subscriber for promise1 called')
})
const thenPromise3 = thenPromise2.then(() => {
    console.log('subscriber for promise2 called')
});*/

function one() {
    const a = 1;
}
function two() {
    const b = 1;
}

promise1
    .then(() => {
        console.log('subscriber for promise1 called')
        return 1 // will be data which will data for promise from this then
    })
    .then((one) => {
        console.log('subscriber for promise2 called')
        return 2;
    })
    .then((two) => {
        console.log('subscriber for promise2 called')
        const waitPromise = wait(1000)
        return waitPromise
    })
    .then((noData) => {
        console.log('subscriber for promise2 called')
        return {value: 100}
    })
    .then((objWithValue) => {
        console.log('subscriber for promise2 called')
    })



function wait(ms) {
    return new Promise((resolveFunction) => {
        setTimeout(() => {
            console.log('immidiatley before resolving')
            resolveFunction()
        }, ms)
    })
}
