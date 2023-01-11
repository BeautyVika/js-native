 function DeleteUser (userId) {
    // неявно this = {}
     this.type = 'DELETE USER'
     this.payload = {
         userId: userId
     }
     //неявно return this
 }

 const action1 = new DeleteUser(12)
 console.log(action1)

 class DeleteUserAction {
    constructor(userId) {
        this.type = 'DELETE USER'
        this.payload = {
            userId: userId
        }
    }
 }
 const action2 = new DeleteUserAction(24324)
 console.log(action2)

 function User(name, site, dob) {
    this.name = name
     this.site = site
     this.dob = dob
 }

 User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
 }

 const u1 = new User('Dimych', 'it-incubator.com', new Date(1988, 1, 2))
 console.log(u1)
 u1.hello()

 class User2 {
    constructor(name, site, dob){
        this.name = name
        this.site = site
        this.dob = dob
        this.counter = 0
    }
    hello() {
        console.log(`I am ${this.name} from ${this.site}, counter: ${++this.counter}`)
    }
 }
 const user1 = new User2('Dimych!!!', 'it-incubator.com', new Date(1988, 1, 2))
 console.log(user1)

 const user2 = new User2('Max!!!', 'google.com', new Date(1995, 7, 13))
 console.log(user2)

 user1.hello()
 user2.hello()

 // инкапсуляция
 class User3 {
    #name = ''
     constructor(name, site, dob){
         this.#name = name
         this.site = site
         this.dob = dob
     }
     getName(){
        return this.#name
     }
     setName (value){
        this.#name = value
     }
     hello() {
         console.log(`I am ${this.#name} from ${this.site}`)
     }
 }

 const us1 = new User3('Dimych!!!', 'it-incubator.com', new Date(1988, 1, 2))
 console.log(us1.getName())

//наследование
 class User4 {

     constructor(name, site, dob){
         this.name = name
         this.site = site
         this.dob = dob
     }

     hello() {
         console.log(`I am ${this.name} from ${this.site}`)
     }
 }
 const use1 = new User4('Dimych', 'it-incubator.com', new Date(1988, 1, 2))
 const use2 = new User4('Max', 'it-incubator.com', new Date(1988, 1, 2))


 class Coder extends User4 {
    constructor(name, site, dob, tech) {
        super(name, site, dob);       // с помощью super вызываем конструктор User4
        this.tech = tech
    }
    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code: let sum = (a,b) => a + b `)
    }
    hello() { //если хотип переопределить hello, но сохранимть и предыдущее действие
        super.hello()
        console.log('Go away')
    }
 }

 const coder1 = new Coder('Max Coder', 'it-incubator.com', new Date(1988, 1, 2), 'c#')
 // coder1.hello()
 // coder1.code()

 // полиморфизм
 let users = [use1, use2, coder1]
 users.forEach(u => u.hello())