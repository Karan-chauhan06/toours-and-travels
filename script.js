/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

/*==================================================
                MOBILE MENU
==================================================*/

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav ul");

menu.onclick = () => {

    nav.classList.toggle("active");

    if (menu.innerHTML.includes("menu")) {

        menu.innerHTML = '<i class="ri-close-line"></i>';

    } else {

        menu.innerHTML = '<i class="ri-menu-line"></i>';

    }

};

/*==================================================
                STICKY NAVBAR
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.classList.add("active");

    }

    else {

        header.classList.remove("active");

    }

});

/*==================================================
                SCROLL ANIMATION
==================================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".fade-up,.zoom,.left-animation,.right-animation").forEach((el) => {

    observer.observe(el);

});

/*==================================================
                COUNTER
==================================================*/

const counters = document.querySelectorAll(".stat-box h2");

const speed = 80;

counters.forEach(counter => {

    const animate = () => {

        const value = +counter.innerText.replace(/\D/g,'');

        let count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(value / speed);

        if(count < value){

            count += increment;

            counter.setAttribute("data-count",count);

            counter.innerText = count + "+";

            requestAnimationFrame(animate);

        }

        else{

            counter.innerText = value + "+";

        }

    }

    animate();

});

/*==================================================
                BACK TO TOP
==================================================*/

const topBtn = document.createElement("div");

topBtn.className = "top-btn";

topBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("active");

    }

    else{

        topBtn.classList.remove("active");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*==================================================
                FAQ
==================================================*/

const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

    item.querySelector("button").onclick=()=>{

        item.classList.toggle("active");

    }

});

/*==================================================
                PARALLAX HERO
==================================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    let value=window.scrollY;

    hero.style.backgroundPositionY=value*0.5+"px";

});

/*==================================================
                DESTINATION HOVER
==================================================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=

`perspective(900px)
rotateY(${(x-rect.width/2)/20}deg)
rotateX(${-(y-rect.height/2)/20}deg)
translateY(-15px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});

/*==================================================
                TESTIMONIAL AUTO SLIDER
==================================================*/

const testimonialWrapper = document.querySelector(".testimonial-wrapper");

if (testimonialWrapper) {

    let index = 0;

    const cards = testimonialWrapper.children;

    function autoSlide() {

        if (window.innerWidth > 992) return;

        index++;

        if (index >= cards.length) {

            index = 0;

        }

        testimonialWrapper.style.transform =
            `translateX(-${index * 100}%)`;

    }

    setInterval(autoSlide, 4000);

}

/*==================================================
                GALLERY HOVER EFFECT
==================================================*/

document.querySelectorAll(".gallery-item").forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        item.style.transform =
            `perspective(1000px)
             rotateY(${(x - rect.width / 2) / 30}deg)
             rotateX(${-(y - rect.height / 2) / 30}deg)
             scale(1.03)`;

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

/*==================================================
                NEWSLETTER
==================================================*/

const newsletter = document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email = newsletter.querySelector("input").value;

if(email===""){

alert("Please enter your email.");

return;

}

alert("Thanks for subscribing!");

newsletter.reset();

});

}

/*==================================================
                CONTACT FORM
==================================================*/

const contactForm=document.querySelector(".contact form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! We will contact you shortly.");

contactForm.reset();

});

}

/*==================================================
                BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll("button,.btn,.book-btn,.primary-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*==================================================
                ACTIVE NAV LINKS
==================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/*==================================================
                IMAGE LAZY LOAD
==================================================*/

const lazyImages=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.classList.add("loaded");

observer.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});

/*==================================================
                SCROLL PROGRESS BAR
==================================================*/

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.left="0";
progress.style.top="0";
progress.style.height="4px";
progress.style.background="linear-gradient(90deg,#00C2FF,#185ADB)";
progress.style.width="0";
progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});

/*==================================================
                CURSOR GLOW
==================================================*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="rgba(0,194,255,.35)";
glow.style.backdropFilter="blur(5px)";
glow.style.zIndex="999999";
glow.style.transition=".05s";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});

/*==================================================
                CONSOLE MESSAGE
==================================================*/

console.log("%cVoyageX Premium Travel Website",
"color:#00C2FF;font-size:22px;font-weight:bold;");

console.log("%cDesigned with HTML CSS JavaScript",
"color:#185ADB;font-size:14px;");