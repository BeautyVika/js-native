//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку,
// состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
function repeatString(string, num, separator){
    let str = string + separator
    return str.repeat(num).slice(0, 8)
}
console.log(repeatString('yo', 3, ','))

function repeatString2(string, num, separator){
    let str = string + separator
    return str.repeat(num)
}
console.log(repeatString2('yo', 3, ' '))
//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки,
// в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
let checkStart = (string, start) => {
    return string.slice(0, 3).toLowerCase() === start
}
console.log(checkStart("Incubator", "inc"))
let checkStart2 = (string, start) => {
    return string.slice(0, 2).toLowerCase() === start
}
console.log(checkStart2("Incubator", "yo"))
//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров,
// обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
function truncateString(str, num) {
    return str.slice(0, num) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении,
// если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
function getMinLengthWord (str) {
    if (str.length === 0) return null
    return str.split(' ').reduce((acc, el) => acc.length < el.length ? acc : el)
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
function setUpperCase (str){
    return str.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true
