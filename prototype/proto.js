function User (name) {
    this.name = name
}

User.prototype.showName = function (){
    console.log(this.name)
}

const alex = new User('Alex')
const hanna = new User('Hanna')