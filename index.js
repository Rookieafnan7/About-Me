const aboutMeCard = document.querySelector(".about-me-card");

aboutMeCard.addEventListener('mouseover',(event)=>{
    aboutMeCard.classList.toggle("popup");
    if(aboutMeCard.classList.contains("popdown")){
        aboutMeCard.classList.toggle("popdown");
    }
    // event.target.classList.toggle("popup");
});
aboutMeCard.addEventListener('mouseout',(event)=>{
    aboutMeCard.classList.toggle("popdown");
    if(aboutMeCard.classList.contains("popup")){
        aboutMeCard.classList.toggle("popup");
    }
});

