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
const modal_box = document.querySelector('#modalBox')

const btn_project1 = document.querySelector('#project_1')
const btn_project2 = document.querySelector('#project_2')
const btn_project3 = document.querySelector('#project_3')
const btn_project4 = document.querySelector('#project_4')
const btn_project5 = document.querySelector('#project_5')
const btn_project6 = document.querySelector('#project_6')
const btn_close_modal = document.querySelector('#closeModal')

const projects = [
   {
      id: 1,
      title: 'Corporation',
      desc: 'Web application',
      content: 'A comprehensive web application designed for corporations to streamline employee management processes. With features including scheduling, attendance tracking, performance monitoring, and resource sharing, it offers a robust platform for optimizing team productivity, enhancing collaboration, and ensuring efficient workforce management within the organization.',
      img: './img//projects//corporation.jpg'
   },
   {
      id: 2,
      title: 'Clouthes shop',
      desc: 'E-Commerce',
      content: 'Welcome to our online clothing store, where fashion meets convenience. Browse through our extensive collection of trendy apparel, from casual wear to formal attire, and enjoy hassle-free shopping with secure transactions and speedy delivery, ensuring a satisfying shopping experience every time.',
      img: './img//projects/shop.jpg'
   },
   {
      id: 3,
      title: 'Graphic designer',
      desc: 'Website www',
      content: 'As a graphic designer, your online presence is crucial. Our platform offers a sleek website tailored to showcase your creativity and expertise. With a user-friendly interface, stunning portfolio displays, and seamless communication channels, its the perfect hub to attract clients and elevate your design career.',
      img: './img/projects/designer.jpg'
   },
   {
      id: 4,
      title: 'Photography',
      desc: 'Website www',
      content: 'Explore the artistry of photography on our website designed exclusively for photographers. Showcase your stunning portfolio with captivating galleries, offer personalized services through seamless contact forms, and engage with your audience through captivating blog posts. With our tailored solutions, your online presence will reflect the essence of your photography style.',
      img: './img//projects/photography.jpg'
   },
   {
      id: 5,
      title: 'Advertising agency',
      desc: 'Web application',
      content: 'Welcome to our digital hub for advertising agencies, where creativity meets strategy. Our website offers a dynamic platform to showcase your agencys portfolio, highlight successful campaigns, and attract potential clients with compelling case studies. With intuitive navigation and engaging content, we ensure your agency stands out in the competitive market.',
      img: './img/projects/agency.jpg'
   },
   {
      id: 6,
      title: 'Lawyer',
      desc: 'Website www',
      content: 'Trust is paramount in legal matters, and our website for lawyers ensures a professional and trustworthy online presence. From highlighting areas of expertise to providing informative legal resources, our platform is tailored to establish credibility and foster client trust. With clear navigation and accessible contact options, we make it easy for clients to seek legal representation with confidence.',
      img: './img/projects/lawyer.jpg'
   },
]

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
