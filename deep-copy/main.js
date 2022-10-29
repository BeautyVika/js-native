let a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
         teacher: {
             name: 'wew',
             age: 18
         }
    }
}
// поверхностная копия, вложенные объекты не копируются, а предоставляются ссылки на них
let b = {
    ...a
}
b. classroom = {...a.classroom} //более глубока копия
b.classroom.teacher = {...a.classroom.teacher} //глубокая копия
b.students = [...a.students] //spread- оператор, глубокая копия массива

b.classroom.teacher.name = 'Vika'

console.log(b.classroom.teacher) // 'Vika'
console.log(a.classroom.teacher) // 'wew'

let state = {
    name: 'it-kamasutra.com',
    age: 1,
    school: {
        address: 'Minsk',
        director: {
            name: 'Andrey'
        }
    }
}
let c = {
    ...state,
    school: {
        ...state.school,
        director: {...state.school.director}
    }
}
let arr = [{name: 'D'}, {name: 'M'}]

let arrCopy1 = arr.map(el => {
    return {...el}
})

let arr2 = [{name: 'D', address: {}}, {name: 'M'}]

let arrCopy2 = arr2.map((el => {
    return{...el, address: {...el.address}}
}))