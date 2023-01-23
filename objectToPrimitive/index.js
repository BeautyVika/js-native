const user = {
    age: 23,
    name: 'Alex',

    [Symbol.toPrimitive] : function (hint){
        if(hint === 'string'){
            return user.name
        }
        if(hint === 'number'){
            return user.age
        }
        return user.name
    }
}
console.log(user + 'Hello')
console.log(user + 1)
console.log(user * 10)

class User {
    constructor(age) {
        this.age = age
    }
    [Symbol.toPrimitive] = function () {
        return this.age
    }

    static compare(user1, user2) {
        const res = user1 > user2
        console.log(res)
        return res
    }
}
const user1 = new User(24)
const user2 = new User(27)
User.compare(user1,user2 )

// ITERATORS

// const arr = [1, 2, 3,4]
//
// const iterator = arr[Symbol.iterator]()
//
// while (true) {
//     const res = iterator.next()
//     if (res.done) break
//
//     console.log(res.value)
// }

let range = {
    from: 0,
    to: 10,

    [Symbol.iterator]: function () {
        let from = this.from
        let to = this.to
        return {
            next(){
                if (from <= to) {
                    return {done: false, value: from++}
                } else {
                    return {done: true, value: undefined}
                }
            }
        }
    }
}
for (let n of range) {
    console.log(n)
}

// Descriptors

const obj = {
    name: 'Alex'
}
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
console.log(Object.getOwnPropertyDescriptors(obj))