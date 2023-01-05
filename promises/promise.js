// let myPromise = new Promise((resolve) => {
//     resolve(Math.random())
// })
//
// myPromise.then((res) => console.log(`myPromise зарезолвился, и я узнал об этом: ${res}`))
// myPromise.then((res) => console.log(`myPromise зарезолвился, и я узнал об этом: ${res}`))
//
// console.log('finish')

function doAfter(sec) {
    let myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random())
        },sec * 1000)
    })
    return myPromise
}
// doAfter(5).then( () => console.log('я сработал через 5 секунд') );
// doAfter(3).then( () => console.log('а я сработал через 3 секунд') );
// doAfter(10).then( () => console.log('я сработал через 10 секунд') );

// let promise3 = doAfter(3);
// promise3.then( () => console.log('я сработал через 3 секунд') );
// promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
// promise3.then( () => console.log('и я') );

// let prom1 = doAfter(1)
// prom1
//     .then((n) => {
//         console.log(n)
//         return n * 1000
//     })
//     .then((n) => {
//         console.log(n)
//         return n * 1000
//     })
//     .then((n) => {
//         console.log(n)
//         return n * 1000
//     })

// let pr1 = doAfter(4); // один промис
// let pr2 = doAfter(7); // второй промис
//
// pr1.then( () => console.log("pr1 resolved") ); // индивидуально подписываемся на каждый
// pr2.then( () => console.log("pr2 resolved") );
//
// let aggregatedPromise = Promise.all([pr1, pr2]); // получаем общий промис
//
// aggregatedPromise.then( () => console.log("pr1 and pr2 resolved")); // сработает наш подписчик ТОЛЬКО когда все промисы, переданные в массиве в all будут resolved


function getRandomAfter(sec) {
    let myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random())
        },sec * 1000)
    })
    return myPromise
}

let promises = [getRandomAfter(1),getRandomAfter(2), getRandomAfter(3)];
let commonPromise = Promise.all(promises);
commonPromise.then( (res) => {
    console.log(res)
} );