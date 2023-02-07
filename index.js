
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
