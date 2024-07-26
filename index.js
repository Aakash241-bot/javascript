const button = document.querySelector(".button");
const kedar = document.querySelector(".kedar");
const dhungana = documnet.querySelector(".dhungana");

button.addEventListener("click", () => {
    if(kedar.style.backgroundColor == "yellow"){
        kedar.style.backgroundColor ="white";
        button.textContent = "TURN ON";
        
    }else{
        kedar.style.backgroundColor ="yellow";
        button.textContent = "TURN OFF";
    }

   
    if (dhungana.style.display === "none"){
        dhungana.style.display = "block";
        dhungana.textContent = "batti aayo";
    }else{
        dhungana.style.display = "none";
        dhungana.textContent = "batti gayo";
    }
});