function iniciarApp(){crearGaleria(),navegacionFija()}document,addEventListener("DOMContentLoaded",()=>{iniciarApp()});const navToggle=document.querySelector("#nav-toggle"),navMenu=document.querySelector("#nav-menu"),navLink=document.querySelectorAll(".nav__link");function mostrarMenu(){navMenu.classList.toggle("show-menu")}function linkAction(){navMenu.classList.remove("show-menu")}function navegacionFija(){window.addEventListener("scroll",()=>{const e=document.querySelector(".header"),a=document.querySelector("body");window.scrollY>520?(e.classList.add("fixed"),a.classList.add("fixed-body")):(e.classList.remove("fixed"),a.classList.remove("fixed-body"))})}function crearGaleria(){const e=document.querySelector(".galeria");[{imagen:"image-gallery-cone",clase:"img1"},{imagen:"image-gallery-milkbottles",clase:"img2"},{imagen:"image-gallery-orange",clase:"img3"},{imagen:"image-gallery-sugarcubes",clase:"img4"}].forEach(a=>{const i=document.createElement("img");i.src=`build/img/mobile/${a.imagen}.jpg`,i.alt=a.imagen,i.className="galria__img mobile "+a.clase;const n=document.createElement("img");n.src=`build/img/desktop/${a.imagen}.jpg`,n.alt=a.imagen,n.className="galria__img desktop "+a.clase,e.appendChild(i),e.appendChild(n)})}function scrollUp(){const e=document.querySelector(".scrollup");this.scrollY>=350?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",scrollUp),navToggle.addEventListener("click",mostrarMenu),navLink.forEach(e=>e.addEventListener("click",linkAction));const sr=ScrollReveal({origin:"top",distance:"60px",duration:"2500",delay:400});sr.reveal(".home__title, .home__img"),sr.reveal(".item2",{origin:"left"}),sr.reveal(".item4",{origin:"right"}),sr.reveal(".card--description",{origin:"bottom"}),sr.reveal(".testimonial__card",{scale:.85}),sr.reveal(".footer__container");
//# sourceMappingURL=app.js.map
