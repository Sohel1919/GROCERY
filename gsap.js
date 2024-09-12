const timeline1 = gsap.timeline();
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const timeline2 = gsap.timeline();
const timeline3 = gsap.timeline();


function responsiveMenu(){
    timeline1.to('.menu-open',{
        display:'none',
        delay:0,
        duration:0.1,
    })
    timeline1.to('.menu-close',{
        display:'block',
        delay:0,
        duration:0.1,
    })
    timeline1.to(".responsiveNav",{
        transform:'translate(0%,0%)',
        delay:0,
        opacity:1,
        duration:0.3,
    })
    
    
    timeline1.pause();
    
}
responsiveMenu();
menuOpen.addEventListener('click',function(){
    timeline1.play();
})
menuClose.addEventListener('click',function(){
    timeline1.reverse();
})

gsap.from('.page1 .top .h1Parent h1',{
    opacity:0,
    duration:1,
    x:'-100px',
    stagger:.2
})
gsap.from('.page1 .top .paraParent',{
    opacity:0,
    duration:1,
    x:'-100px',
})


function headerGsap(){
    gsap.from('header .logo',{
        x:'-200px',
        duration:1
    })
    gsap.from('nav a',{
        y:'-30px',
        duration:0.8,
        stagger:0.2,
        opacity:0
    })
}
headerGsap();

timeline2.from('.page2 .product',{
    y:'20px',
    opacity:0,
    duration:0.1,
    scrollTrigger:{
        trigger:'.product',
        scroller:'body',
        start:'top 70%',
        end:'top 65%',
        scrub:0.2
        
    }
})
timeline2.from('.page2 .container1',{
    x:'-30%',
    duration:1,
    scrollTrigger:{
        trigger:'.product',
        scroller:'body',
        start:'top 45%',
        end:'top 20%',
        scrub:2
    }
})
timeline2.from('.page2 .sub-container',{
    x:'30%',
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.product',
        scroller:'body',
        start:'top 45%',
        end:'top 20%',
        scrub:2
    }
})
timeline2.from('.page3 .cards',{
    opacity:0,
    scale:0,
    duration:2,
    scrollTrigger:{
        scroller:'body',
        trigger:".all-product",
        start:'top 60%',
        end:'top 30%',
        scrub:true,
    }
})
