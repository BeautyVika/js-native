const sm = document.getElementById('small') //получаем ссылки
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = (e) => {
    e.stopPropagation() // stop распространение события
    if(e.currentTarget.id === 'small' ){
        alert(e.currentTarget.id)
    }
}
// const handler1 = (e) => {
//     if(e.target.tagName === 'BUTTON' ){
//         alert(e.target.id)
//     }
// }

const handler2= (e) => {
    e.stopPropagation()
    alert('hello')
}
const handler3= (e) => {
    alert('yo')
}
// sm.onclick = handler1

// sm.onclick = null //отменить событие

sm.addEventListener('click', handler1) //c помощью его можно много обработчиков событий назначать

// sm.removeEventListener('click', handler2) //отменяем действие обработчика

md.addEventListener('click', handler2)
bg.addEventListener('click', handler3)

const a = document.getElementById('a')
a.addEventListener('click', (e) => {
    e.preventDefault()
    alert("Do you really want to go back?")
})
