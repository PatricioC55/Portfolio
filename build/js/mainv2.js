const body=document.querySelector("body"),header=document.querySelector(".header"),btnNav=document.querySelector(".btn-nav"),nav=document.querySelectorAll("a"),main=document.querySelector("main"),icons=document.querySelector(".cont-tech-icons"),cards=document.querySelector(".cont-cards"),aboutSections=document.querySelector(".about-section"),moreInfo=document.querySelector(".more-info"),btnDarkMode=document.querySelector(".btn-dark-mode");function scrollAnimation(e,t,o){e.getBoundingClientRect().top-80<0?t.classList.add(o):t.classList.remove(o)}function scrollAnimationV2(e){const t=document.querySelector("."+e.section),o=t.querySelectorAll("."+e.element);let n=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height;o.forEach(t=>{n-(c-80)<0&&t.classList.add(e.className)})}btnNav.addEventListener("click",()=>{console.log("click al boton menu"),header.classList.toggle("header-not-visible")}),nav.forEach(e=>{e.addEventListener("click",()=>{console.log("click al nav"),header.classList.toggle("header-not-visible")})}),btnDarkMode.addEventListener("click",()=>{body.classList.toggle("dark-mode")}),window.addEventListener("scroll",()=>{let e=main.getBoundingClientRect().bottom-80,t=moreInfo.getBoundingClientRect().top-80;scrollAnimationV2({section:"more-info",element:"cont-contact",className:"anm-enlarge"}),scrollAnimationV2({section:"technologies",element:"cont-tech-icons",className:"anm-apper-down"}),scrollAnimationV2({section:"projects",element:"cont-cards",className:"anm-apper-down"}),scrollAnimationV2({section:"about",element:"about__section",className:"anm-apper-right"}),e<0?(header.classList.add("header-shadow"),t<0&&header.classList.remove("header-shadow")):header.classList.remove("header-shadow")});
//# sourceMappingURL=mainv2.js.map
