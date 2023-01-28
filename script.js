// бургер-меню

let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menuLinks = document.querySelectorAll(".menu__link");

burger.addEventListener("click", function() {
    burger.classList.toggle("menu--active");
    if(burger.classList.contains("menu--active")){
       menu.classList.add("menu--active");
    } else {
        menu.classList.remove("menu--active");
    }
})

menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        burger.classList.remove("menu--active");
        menu.classList.remove("menu--active");
    })
})

// counter numbers

let numbers = document.querySelectorAll(".progress__number");

function numberCount() {
    numbers.forEach(item => {
        let number = +item.innerHTML;
        let numberTo = +item.getAttribute("data-count");
        
        if(number < numberTo) {
            item.innerHTML = +item.innerHTML + 1;
        }
    })
}

let sectionProgress = document.querySelector(".progress");

window.addEventListener('scroll', function() {
    if(sectionProgress.offsetTop - 570 < pageYOffset) {
        setInterval(numberCount, 10);
    }
})

// slider Swiper

let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
        delay: 5000,
    },

    loop: true,

  });


  // Плавний перехід по меню

const links = document.querySelectorAll('a[href*="#"]');

links.forEach(linkMenu => {
    linkMenu.addEventListener("click", function (event) {
         event.preventDefault();
         const linkId = linkMenu.getAttribute('href');
         document.querySelector(''+ linkId).scrollIntoView({
            behavior: "smooth",
            block: "start"
         })
    })
})

// Modal window

const orderButton = document.querySelectorAll(".item-food__link");
const modalForm = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

orderButton.forEach(link => {
    link.addEventListener('click', function() {
        modalForm.classList.add("modal--show");    
        document.body.style.overflow = "hidden";    
    })
})

modalClose.addEventListener('click', function() {
    modalForm.classList.remove("modal--show");  
    document.body.style.overflow = "visible";  
})

// preloader

function downloadPage() {
    let preloader = document.querySelector(".preloader");
    preloader.style.display = 'none';
    document.body.style.overflow = "visible";
}

document.body.style.overflow = "hidden";
setTimeout(downloadPage, 4000);



