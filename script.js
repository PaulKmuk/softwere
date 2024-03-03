const first_item = document.querySelector('#first-item')
const second_item = document.querySelector('#second-item')
const third_item = document.querySelector('#third-item')
const fourth_item = document.querySelector('#fourth-item')
const fifth_item = document.querySelector('#fifth-item')



first_item.addEventListener('click', () => second_item.classList.add('visible'))
second_item.addEventListener('click', () => third_item.classList.add('visible'))
third_item.addEventListener('click', () => fourth_item.classList.add('visible'))
fourth_item.addEventListener('click', () => fifth_item.classList.add('visible'))