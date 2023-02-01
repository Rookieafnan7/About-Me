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

const autoplay = '[class|="width"]';

const widthArray = document.querySelectorAll('.skill-div-bar');
 console.log("hello",widthArray);

widthArray.forEach((element)=>{
    // console.log("working")
    let classes = element.classList;
    console.log(classes);
    classes.forEach((name)=>{
        if(name.startsWith("width-")){
            let strNum = name.substring(6)+"%";
            // console.log(strNum)
            element.style.width = strNum;
        }
    });
})

