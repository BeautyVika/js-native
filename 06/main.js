const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}



//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

// console.log(user===copyUser)
// console.log(user.friends===copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]}

// console.log(user===deepCopyUser)
// console.log(user.friends===deepCopyUser.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students]

// console.log(students === copyStudents)
// console.log(students[0] === copyStudents[0])
// console.log(students[3] === copyStudents[3])


//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => {
    return{...el}
})

// console.log(students === deepCopyStudents)
// console.log(students[2] === deepCopyStudents[2])


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((a,b) => a.name > b.name ? 1 : -1)


//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores)


//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(el => el.scores >= 100)


//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.slice(0, 3)
// console.log(topStudents)
// console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,чтоб сохранился порядок сортировки

let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
// console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(el => !el.isMarried)
// console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(el => el.name)
// console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = deepCopyStudents.map(el => el.name).join(' ')
// console.log(namesWithSpace)
let namesWithComma = deepCopyStudents.map(el => el.name).join(',')
// console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(el => {
    return {...el, isStudent: true}
})


//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el)
// console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(el => el.name === 'Ann')
// console.log(ann)


//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((acc, el) => acc.scores > el.scores ? acc : el)
// console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, el) => acc + el.scores, 0)
// console.log(scoresSum)



// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {

    return students.map(el => {
        let sortFriend = students.filter(fr => fr.name !== el.name )
        return {...el,
            friend: sortFriend.map(el => el.name)
        }
    })
}
// console.log(addFriends(students));
// 15. Напишите функцию getBestStudents, которая принимает параметром массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10)




