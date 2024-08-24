let on=document.querySelector(".lightOn")
let image=document.querySelector(".light")
let off=document.querySelector(".lightOff");
 

on.addEventListener("click",function(){
  image.src="./pic_bulbon (1).gif"
})
  

off.addEventListener("click",function(){
    image.src="./pic_bulboff.gif"
})