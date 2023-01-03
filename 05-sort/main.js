const names = ['Donald', 'Alex', 'Bob']

console.log(names.sort())

const numbers = [ 100, 1000, 9, 88]

console.log(numbers.sort())

// const compareFn = (a, b) => {
//     if(a < b){
//         return -1
//     } else {
//         return 1
//     }
// } //есть простой синтаксис
const compareFn = (a, b) => a - b

console.log(numbers.sort(compareFn))

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scopes: 95
    },
    {
        name: 'Alex',
        age: 23,
        isMarried: true,
        scopes: 89
    },
    {
        name: 'Helge',
        age: 21,
        isMarried: true,
        scopes: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scopes: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scopes: 121
    },
    {
        name: 'alex',
        age: 21,
        isMarried: true,
        scopes: 89
    }
]

const ageSort = students.sort((a,b) => a.scopes - b.scopes)
console.log(ageSort)

const nameSort = students.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1) // 1 variant
console.log(nameSort)

const nameSort2 = students.sort((a, b) => a.name.localeCompare(b.name)) // 2 variant
console.log(nameSort2)

// сортировка пузырьком!!!

const nums = [12, 45, 91, 23, 34, 9, 77, 1]

for (let j = 0; j < nums.length - 1 ; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j ; i++ ) {//  nums.length - 1 - j  делаем для оптимизации, уменьшаем количество на уоличество уже отсортированных элементов
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        }
    }
    if(isSorted)break
}

console.log(nums)