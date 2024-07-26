button.addEventListener("click",()=>{
    if(kedar.style.backgroundColor == "yellow"){
        kedar.style.backgroundColor ="white"
        button.textContent = "TURN ON"
    }else{
        kedar.style.backgroundColor ="yellow";
        button.textContent = "TURN OFF"
    }
})