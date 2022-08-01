const nav=document.querySelector(".-nav");
let currentScrVal=window.scrollY


 /* SHOW & HIDE The NAV WHEN SCROLLING  */
window.addEventListener("scroll",()=>{


    if(currentScrVal < window.scrollY  && window.scrollY>50 ){
            nav.classList.remove("hide-nav")
    }
    if(currentScrVal > window.scrollY ){
        if(window.scrollY <=50){
            nav.classList.add("hide-nav");

        }
    }
    currentScrVal=window.scrollY;



});


