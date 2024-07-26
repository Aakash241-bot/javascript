const button = document.querySelector(".button");
const kedar = document.querySelector(".kedar");
const dhungana = document.querySelector(".dhungana");

button.addEventListener("click", () => {
    if(kedar.style.backgroundColor == "yellow"){
        kedar.style.backgroundColor ="white";
        button.textContent = "TURN ON";
        dhungana.textContent = "batti gayo";
        dhungana.style.backgroundColor = "red";
    }else{
        kedar.style.backgroundColor ="yellow";
        button.textContent = "TURN OFF";
        dhungana.textContent = "batti aayo";
        dhungana.style.backgroundColor = "green";
    }
});