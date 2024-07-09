/*==================== MENU SHOW Y HIDDEN ====================*/
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
     const navMenu = document.getElementById('nav-menu')
     // When we click on each nav__link, we remove the show-menu 
     navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    // إغلاق جميع عناصر محتوى المهارات
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].classList.add('skills__close');
        skillsContent[i].classList.remove('skills__open');
    }

    // فتح عنصر محتوى المهارات الذي تم النقر عليه
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.classList.remove('skills__close');
        this.parentNode.classList.add('skills__open');
    }
}

// تسجيل حدث النقر على رؤوس المهارات
Array.from(skillsHeader).forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        // إزالة الفئة qualification__active من جميع عناصر tabContents
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });

        // إضافة الفئة qualification__active للعنصر المستهدف (target)
        target.classList.add('qualification__active');

        // إزالة الفئة qualification__active من جميع عناصر tabs
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });

        // إضافة الفئة qualification__active للعنصر الذي تم النقر عليه (tab)
        tab.classList.add('qualification__active');
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns  = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=> {
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click' , ()=>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    } )
})
/*==================== PORTFOLIO SWIPER  ====================*/

 let swiperPortfoli = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true ,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    
 })
/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper('.testimonial__container', {


    loop:true,
    grabCursor: true, 
    spaceBetween: 48,

    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            SlidesPerView: 2,
        }
    }
    
 });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight

        const sectionTop = current.offsetTop - 50 ;

        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']' ).classList.add('active-link')

        }else{
            document.querySelector('.nav__menu a[href'+ sectionId + ']').classList,remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greather than 200 viewport height, add the scroll-header class to header tag
    if(this.scrollY >= 80 ) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

}
window.addEventListener('scroll' , scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
function checkScroll() {
    const scrollUpButton = document.getElementById('scroll-up');
    // عندما يكون السكرول أكبر من 560 فتحاميل الشاشة الظاهره لي الشير الاخيره.
    if (window.scrollY >= 560) {
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', checkScroll);

/*==================== DARK LIGHT THEME ====================*/ 

/*=============== CHANGE BACKGROUND HEADER ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme =  "dark-theme"
const iconTheme =  "uil-sun"

// Previously selected topic (if user selected )
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-them class

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previouls chose a topic 
if (selectedTheme){
    // if the validation is fulfiled, we ask the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) 
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

}) 