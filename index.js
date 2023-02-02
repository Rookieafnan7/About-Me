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

window.addEventListener("resize",()=>{
    // console.log("working");
    let windowWidth = (document.documentElement.clientWidth);
    // console.log(typeof(windowWidth));
    // if(windowWidth<=690){
    //     let array = document.querySelector(".nav").childNodes;
    //     console.log(array);
    //     // console.log(array[0].classList.contains("nav-anim-content"))
    //     console.log("off");
    //     array.forEach((element)=>{
    //         if(element.classList.contains("nav-anim-content")){
    //             element.classList.toggle("nav-anim-content");
    //         }
    //     })
    // }
    // if(windowWidth>690){
    //     let array = document.querySelector(".nav").childNodes;
    //     if(!array[0].classList.contains("nav-anim-content")){
    //         console.log("on");
    //         array.forEach((element)=>{
    //             element.classList.toggle("nav-anim-content");
    //         })
    //     }
    // }

})

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

const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
console.log(nav)
const menuBtn = document.querySelector(".menu-icon");
console.log(menu,menuBtn);
menu.addEventListener("click",()=>{
    
    if(menuBtn.classList.contains("on")){
        console.log("yes");
        menuBtn.classList.toggle("off");
        menuBtn.classList.toggle("on");
        menuBtn.style.animation = "rotate 0.5s ease-in-out 1 reverse forwards"
        nav.style.visibility = "hidden";
    }else {
        menuBtn.style.animation = "rotate 0.5s ease-in-out 1 forwards";
        console.log("no");
        nav.style.visibility = "visible";
        menuBtn.classList.toggle("on");
        if(menuBtn.classList.contains("off")){
            menuBtn.classList.toggle("off");
        }
        
    }
})
