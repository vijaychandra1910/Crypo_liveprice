let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");
pass.addEventListener("input",()=>{
   if(pass.value.length > 0){
    msg.style.display = "block";
    console.log("block")
   }
   else{
    msg.style.display = "none";
    console.log("none");
   }if(pass.value.length < 4){
    str.innerText = "Weak";
    pass.style.borderColor ="#ff5925";
    msg.style.color ="#ff5925";
   }
   else if(pass.value.length >=4 && pass.value.length <8){
    str.innerText = "Good";
    pass.style.borderColor ="yellow";
    msg.style.color ="yellow";
   }else{
    str.innerText = "Strong";
    pass.style.borderColor ="green";
    msg.style.color ="green";
   }
})