calcScrollValue =  () =>{

    let scrollProgress = document.getElementById("progress");
    let scrollProgressValue = document.getElementById("#progress-value");
    let pos = document.documentElement.scrollTop;
   let calcHight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrollValue = Math.round((pos) * 100) / calcHight;
   
   if(pos > 100){
    scrollProgress.style.display ="grid"
   }else{
    scrollProgress.style.display ="none"

   }
   scrollProgress.addEventListener("click" ,  ()=>{
    document.documentElement.scrollTop = 0;
   });
  
   
   scrollProgress.style.background = `conic-gradient(#27AE60 ${scrollValue}% , #6c7983${scrollValue}%)`
    // console.log(calcHight)

};


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


let bar = document.getElementById("bar");
let navBar = document.getElementById("nav-bar");
let close = document.getElementById("x");

// console.log(navBar)

if(bar){
    bar.addEventListener("click" , () => {
        navBar.classList.add("show")
    })
}

if(close){
    close.addEventListener("click" , () => {
        navBar.classList.remove("show")
    })
}