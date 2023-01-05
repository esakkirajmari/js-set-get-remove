let form=document.querySelector(".form")

let username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let cpassword=document.getElementById("cpassword");


form.addEventListener("click",function(){
localStorage.setItem("username",username.value);
localStorage.setItem("email",email.value);
localStorage.setItem("password",password.value);
localStorage.setItem("cpassword",cpassword.value);
})

