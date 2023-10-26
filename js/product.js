
(function(){
let MainImg = document.getElementById("MainImg");
let SmallImg = document.querySelectorAll(".small-img");
console.log(SmallImg)    
SmallImg.forEach(function(ele) {
    console.log(ele)
ele.addEventListener("click" , function (e) {
    ImgSrc = e.target.src;
    MainImg.src = ImgSrc;
    console.log(ImgSrc)
})

})
})();