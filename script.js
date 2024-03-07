import { projects } from "./data.js"

const nav_small_devices = document.querySelector('#smallDevices')
const btn_burger = document.querySelector('#burger')

const first_item = document.querySelector('#first-item')
const second_item = document.querySelector('#second-item')
const third_item = document.querySelector('#third-item')
const fourth_item = document.querySelector('#fourth-item')
const fifth_item = document.querySelector('#fifth-item')

const modalProject = document.querySelector("#modalProject")
const modal_title = document.querySelector('#modalTitle')
const modal_desc = document.querySelector('#modalDesc')
const modal_content = document.querySelector('#modalContent')
const modal_img = document.querySelector('#modalImg')

const btn_project1 = document.querySelector('#project_1')
const btn_project2 = document.querySelector('#project_2')
const btn_project3 = document.querySelector('#project_3')
const btn_project4 = document.querySelector('#project_4')
const btn_project5 = document.querySelector('#project_5')
const btn_project6 = document.querySelector('#project_6')
const btn_close_modal = document.querySelector('#closeModal')


const displayProjectDetails = (index) => {
   modal_title.innerHTML = "";
   modal_desc.innerHTML = "";
   modal_content.innerHTML = "";
   modal_title.appendChild(document.createTextNode(projects[index].title))
   modal_desc.appendChild(document.createTextNode(projects[index].desc))
   modal_content.appendChild(document.createTextNode(projects[index].content))
   modal_img.src = projects[index].img
   modalProject.style.display = "block"
}


first_item.addEventListener('click', () => second_item.classList.add('visible'))
second_item.addEventListener('click', () => third_item.classList.add('visible'))
third_item.addEventListener('click', () => fourth_item.classList.add('visible'))
fourth_item.addEventListener('click', () => fifth_item.classList.add('visible'))

btn_project1.addEventListener('click', () => displayProjectDetails(0))
btn_project2.addEventListener('click', () => displayProjectDetails(1))
btn_project3.addEventListener('click', () => displayProjectDetails(2))
btn_project4.addEventListener('click', () => displayProjectDetails(3))
btn_project5.addEventListener('click', () => displayProjectDetails(4))
btn_project6.addEventListener('click', () => displayProjectDetails(5))

btn_close_modal.addEventListener('click', () => {
   modal_title.innerHTML = "";
   modal_desc.innerHTML = "";
   modal_content.innerHTML = "";
   modalProject.style.display = "none"
})

btn_burger.addEventListener('click', () => {
   nav_small_devices.classList.toggle('show-menu')
})
nav_small_devices.addEventListener('click', () => {
   nav_small_devices.classList.toggle('show-menu')
})
