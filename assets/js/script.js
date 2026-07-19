const slides = document.querySelectorAll(".protect_text");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current++;
    if(current >= slides.length){
        current = 0;
    }
    slides[current].classList.add("active");
},3000);