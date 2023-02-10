//fabric function

const createCounter = () => {

    let a = 1
    const counter = {
        increment(){a++},
        getCounter() {return a}
    }
    return counter
}


const counter1 = createCounter()
const counter2 = createCounter()

counter1.increment()
counter1.increment()
counter2.increment()

console.log(counter2.getCounter())

//
const sum = (a) => {
    return (b) => a+b
}
console.log(sum(5)(-1))

//
let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (start, end) => {
    return (el) => {
        return el>= start && el<=end
    }
}
const inArray = (arr) => {
    return (el) => {
        return arr.includes(el)
    }
}

console.log(( arr.filter(inBetween(3, 6)) )) // 3,4,5,6

console.log(( arr.filter(inArray([1, 2, 10])) )); // 1,2

