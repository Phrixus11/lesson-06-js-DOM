// const title1 = document.getElementById('course-title')
// console.log(title1)

// const colorButton = document.querySelector('#color-button')
// console.log(colorButton)

const list = document.querySelector('.list') //Теперь найдём список по css-классу .list, и элемент списка с id dom, вызвав метод у найденного списка
// console.log(list)

// // const domItem = list.querySelector('#dom')
// console.log(domItem)


// const items = list.querySelectorAll('.item')
// console.log(items)

//Допустим, мы хотим добавить ссылку в один из элементов списка:
const domItem = document.querySelector('#dom')
domItem.innerHTML = '<a href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction">Взаимодействие с DOM ⬅</a>'

const title = document.getElementById('course-title')
title.textContent = 'Обновленное содержание курса 📘'

const colorButton = document.querySelector('#color-button')
colorButton.setAttribute('title', 'Сгенерировать случайные цвета')

// и посмотрим на его значение в консоли
// console.log(colorButton.getAttribute('title'))

// const domItem = document.querySelector('#dom')
domItem.classList.add('current')

// const title = document.getElementById('course-title')
title.classList.remove('title') // заголовок больше не зелёный

// const colorButton = document.querySelector('#color-button')
colorButton.style.padding = '5px 10px'
colorButton.style.color = 'gray'
colorButton.style.backgroundColor = 'lightblue'

colorButton.onclick = function () {
    console.log('Click!')
}

colorButton.addEventListener('click', function () {
    console.log('Click!')
})

colorButton.addEventListener('click', function () {
    const items = list.querySelectorAll('.item')
    console.log(items);
    for (let item of items) {
        item.style.color = getRandomColor()
    }
    // for (let i = 0; i < items.length; i++) {
    //     // Генерация случайного цвета
    //     const red = Math.floor(Math.random() * 256)
    //     const green = Math.floor(Math.random() * 256)
    //     const blue = Math.floor(Math.random() * 256)

    //     const randomColor = `rgb(${red}, ${green}, ${blue})`
    //     items[i].style.color = randomColor
    // }
})

//рефактор генерации случайного цвета
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

