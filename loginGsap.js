var tl=gsap.timeline();
var tl1=gsap.timeline();
var tl2=gsap.timeline();
var login=document.querySelector(".log-page")
var register=document.querySelector(".reg-page")
var head=document.querySelector("h1");

function mainAnimation(){
    tl.from(".register .headline h1",{
        y:50,
        opacity:0,
        duration:1,
        delay:0.3
    })
    tl.from("label",{
        x:-20,
        opacity:0,
        duration:0.5,
        stagger:0.3
    })
}
mainAnimation();

function loginAnimation(){
    tl1.from("h1",{
        y:50,
        opacity:0,
        duration:1,
        delay:0.7
    })
    tl1.from(".login label",{
        x:-20,
        opacity:0,
        duration:0.5,
        stagger:0.3
    })
}
loginAnimation();

function loginPage(){
    login.addEventListener("click",function(){
        tl2.to(login,{
            height:"100%",
            duration:0.5,
            borderRadius:0
        })
        tl2.to(".register",{
            display:"none",
            duration:0.5
        })
    
        loginAnimation();
        tl2.to(".login",{
            display:"flex",
            duration:0.5
        })
        tl2.to(login,{
            height:"13%",
            duration:0.5,
        })    
    })
}
loginPage();

function registerPage(){
    register.addEventListener("click",function(){
        tl2.to(register,{
            height:"100%",
            duration:0.5,
            borderRadius:0
        })
        tl2.to(".login",{
            display:"none",
            duration:0.5
        })
    
        mainAnimation();
    
        tl2.to(".register",{
            display:"flex",
            duration:0.5
        })
        tl2.to(register,{
            height:"13%",
            duration:0.5,
        })
    })
    
}
registerPage();
