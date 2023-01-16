// function Car (model){
//     this.model = model
// }
//
// Car.prototype.showModel = function (){
//     console.log(this.model)
// }
// car1 = new Car('1')
// car1.showModel()

class Car {
    constructor(model) {
        this.model = model
    }

    showModel() {

    }
    name = 'Hello'
    someFunc = () => {}
}
car1 = new Car('model 1')
car2 = new Car('model 2')
console.log(car1)
console.log(car2)




// get, set

class User {
    #name = 'Alex'

    // getName() {
    //     console.log(this.#name)
    //     return this.#name
    // }
    //
    // setName(value){
    //     this.#name = value
    // }
    // по-другому написать
    get name () {
        console.log(this.#name)
        return this.#name
    }
    set name (value) {
        this.#name = value
    }
}
const user = new User()

// user.getName()
// user.setName('Hanna')
// user.getName()
user.name
user.name = 'Hanna'
user.name





//наследование
function Car2(model2) {}

Car2.wheels = 4

Car2.prototype.showModel2 = function (){
    console.log(this.model2)
}

function Ford(model2){
    this.model2 = model2
}
Ford.prototype.__proto__= Car2.prototype
Ford.__proto__ = Car2

console.log(Ford.wheels)

const ford = new Ford('123')
ford.showModel2()


class Carr {
    static wheels = 4
}

class Fordd extends Carr{

}
console.log(Fordd.wheels)