// // Как найти?…

// // Таблицу с id="age-table".
// // Все элементы label внутри этой таблицы (их три).
// // Первый td в этой таблице (со словом «Age»).
// // Форму form с именем name="search".
// // Первый input в этой форме.
// // Последний input в этой форме.

// // 1. Таблица с `id="age-table"`.
// let table = document.getElementById('age-table')

// // 2. Все label в этой таблице
// table.getElementsByTagName('label')
// // или
// document.querySelectorAll('#age-table label')

// // 3. Первый td в этой таблице
// table.rows[0].cells[0]
// // или
// table.getElementsByTagName('td')[0]
// // или
// table.querySelector('td')

// // 4. Форма с name="search"
// // предполагаем, что есть только один элемент с таким name в документе
// let form = document.getElementsByName('search')[0]
// // или, именно форма:
// document.querySelector('form[name="search"]')

// // 5. Первый input в этой форме
// form.getElementsByTagName('input')[0]
// // или
// form.querySelector('input')

// // 6. Последний input в этой форме
// let inputs = form.querySelectorAll('input') // найти все input
// inputs[inputs.length-1] // взять последний

//______________________________________________________________________________________________________

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
let i = 0;
let option = {
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello! " + i++, // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
}

function showNotification({top = 0, right = 0, className, html}) {
    document.body.innerHTML += `<div class="notification"
    style= "position: absolute; top: ${top}px; right: ${right}px;">${html}</div>`
    let div = document.querySelector('.notification')
    setTimeout(() => div.remove(), 1000);

}

// setInterval(() => {showNotification({
//     top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//     right: 10, // 10px от правого края окна (по умолчанию 0px)
//     html: "Hello! " + i++, // HTML-уведомление
//     className: "welcome" // дополнительный класс для div (необязательно)
// });}, 2000);


//______________________________________________________________________________________________________