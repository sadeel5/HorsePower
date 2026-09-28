// ==========================
// NAVBAR SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
// ==========================================
// MOBILE MENU
// ==========================================

const menuButton =
    document.querySelector(".menu-btn");

const mobileNavbar =
    document.querySelector(".navbar");

const menuIcon =
    document.querySelector(".menu-btn i");


menuButton.addEventListener("click", ()=>{

    mobileNavbar.classList.toggle("active");

    const isOpen =
        mobileNavbar.classList.contains("active");

    if(isOpen){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        document.body.style.overflow = "hidden";

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow = "";

    }

});


/* close menu after clicking a link */

document
.querySelectorAll(".navbar a")
.forEach(link=>{

    link.addEventListener("click", ()=>{

        mobileNavbar.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow = "";

    });

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ==========================
// BACK TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ==========================
// WHATSAPP BOOKING
// ==========================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const service = document.getElementById("service").value;
    const problem = document.getElementById("problem").value;

    const message =
`🚗 *New Booking*

👤 Name: ${name}

📞 Phone: ${phone}

🚘 Brand: ${brand}

📋 Model: ${model}

📅 Year: ${year}

⚙️ Service: ${service}

📝 Problem:

${problem}`;

    const whatsappNumber = "962795551885";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

});
window.addEventListener("load",()=>{

    setTimeout(()=>{
    
    document.getElementById("loader").classList.add("loader-hide");
    
    },1800);
    
    });
    // =====================
// VIDEO SLIDER
// =====================

// ==========================================
// PROFESSIONAL VIDEO SLIDER
// ==========================================

const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const currentSlideText =
    document.getElementById("currentSlide");

const totalSlidesText =
    document.getElementById("totalSlides");

const progressBar =
    document.getElementById("progressBar");

const projectTitle =
    document.getElementById("projectTitle");


let current = 0;


/* PROJECT NAMES */

const projectNames = [

    "Performance Tuning",
    "ECU Programming",
    "Custom Calibration",
    "Performance Upgrade",
    "Advanced Diagnostics",
    "Stage Performance",
    "Transmission Programming",
    "Custom Vehicle Setup",
    "Horse Power Project"

];

totalSlidesText.textContent =
    String(slides.length).padStart(2,"0");

function showSlide(index){

    slides.forEach((slide, i)=>{

        slide.classList.remove("active");

        slide.pause();

        slide.currentTime = 0;

    });


    const activeSlide = slides[index];

    activeSlide.classList.add("active");


    /* play only current video */

    activeSlide.play().catch(()=>{});


    /* counter */

    currentSlideText.textContent =
        String(index + 1).padStart(2,"0");


    /* progress */

    const progress =
        ((index + 1) / slides.length) * 100;

    progressBar.style.width =
        `${progress}%`;


    /* title */

    if(projectTitle){

        projectTitle.textContent =
            projectNames[index]
            || "Horse Power Project";

    }

}


/* NEXT */

next.addEventListener("click",()=>{

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

});


/* PREVIOUS */

prev.addEventListener("click",()=>{

    current--;

    if(current < 0){

        current =
            slides.length - 1;

    }

    showSlide(current);

});


/* FIRST VIDEO */

showSlide(current);
// ==========================================
// ACTIVE NAV LINK
// ==========================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", ()=>{

    let currentSection = "";

    sections.forEach(section=>{

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ){

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === `#${currentSection}`
        ){

            link.classList.add("active");

        }

    });

});
