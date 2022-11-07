// 1. Функция sum принимает параметром целые положительные числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce((acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    if (((a + b) < c) || ((a+c) < b) || ((b+c) < a)) return "00"
    if (a === b && b === c) return '10'
    if ( a === b || a === c || b === c) return '01'
    return "11"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    let num = number.toString()
    if (num.length >1) {
        return num.split('').map(el => Number(el)).reduce((acc, el) => acc + el)
    } else {
        return number
    }
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = 0
    let oddSum = 0
    for(let i = 0; i<arr.length; i++){
        if (!(i % 2)){
           evenSum += arr[i]
        }else {
            oddSum += arr[i]
        }
    }
    return evenSum > oddSum
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return  array.filter(el => el > 0 && (el % 1 === 0)).map(el => el*el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let sum = 0
    for (let i = 0; i <= N; i++){
        sum += i
    }
    return sum
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let arrayMoney: Array<number> = []
    let sum = 0
    function addMoney (i: number) {
        if(amountOfMoney >= (banknotes[i] + sum)) {
            arrayMoney.push(banknotes[i])
            sum += banknotes[i]
            if(amountOfMoney >= (banknotes[i] + sum)) addMoney(i)
        }
    }
    for(let i = 0; i < banknotes.length; i++){
        addMoney(i)
    }
    return arrayMoney
}