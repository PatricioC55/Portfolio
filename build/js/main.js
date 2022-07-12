"use strict";const body=document.querySelector("body"),header=document.querySelector(".header"),btnNav=document.querySelector(".btn-nav"),navLinks=document.querySelector(".nav").querySelectorAll("a"),btnDarkMode=document.querySelector(".btn-dark-mode"),animationData=[{section:"more-info",element:"cont-contact",className:"anm-enlarge"},{section:"technologies",element:"cont-tech-icons",className:"anm-apper-down"},{section:"projects",element:"cont-cards",className:"anm-apper-down"},{section:"about",element:"about__section",className:"anm-apper-right"}];function navigation(){btnNav.addEventListener("click",()=>{header.classList.toggle("header-not-visible")}),navLinks.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),header.classList.toggle("header-not-visible");const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})})})}function darkMode(){const e=window.matchMedia("(prefers-color-scheme: dark)");e.matches?body.classList.add("dark-mode"):body.classList.remove("dark-mode"),e.addEventListener("change",()=>{e.matches?body.classList.add("dark-mode"):body.classList.remove("dark-mode")}),btnDarkMode.addEventListener("click",()=>{body.classList.toggle("dark-mode")})}function animations(){window.addEventListener("scroll",()=>{shadowHeader(),animationData.forEach(e=>{scrollAnimation(e)})})}function shadowHeader(){const e=document.querySelector("main"),t=document.querySelector(".more-info");let o=e.getBoundingClientRect().bottom-80,a=t.getBoundingClientRect().top-80;o<0&&a>0?header.classList.add("header-shadow"):header.classList.remove("header-shadow")}function scrollAnimation(e){const t=document.querySelector("."+e.section),o=t.querySelectorAll("."+e.element);let a=t.getBoundingClientRect().top,n=window.innerHeight;o.forEach(t=>{a-n+80<0&&!t.classList.contains(e.className)&&t.classList.add(e.className)})}document.addEventListener("DOMContentLoaded",()=>{shadowHeader(),navigation(),darkMode()}),animations();
//# sourceMappingURL=main.js.map
