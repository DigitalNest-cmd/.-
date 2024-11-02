document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    const inputs = document.querySelectorAll(".input-container input");

    
    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus(); 
            }
        });

        
        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && input.value === "" && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    
    inputs[inputs.length - 1].addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkPassword();
        }
    });

    
    submitButton.addEventListener("click", checkPassword);
});

function checkPassword() {
    
    const digit1 = document.getElementById("digit1").value;
    const digit2 = document.getElementById("digit2").value;
    const digit3 = document.getElementById("digit3").value;
    const digit4 = document.getElementById("digit4").value;

    
    const password = digit1 + digit2 + digit3 + digit4;

    
    const passwordPages = {
        "1234": "pagina1.html",
        "5678": "pagina2.html",
        "4321": "pagina3.html",
        "8765": "pagina4.html"
    };

    
    if (passwordPages[password]) {
        
        window.location.href = passwordPages[password];
    } else {
        
        alert("Contraseña incorrecta. Intente nuevamente.");
        clearInputs();
    }
}

function clearInputs() {
    // Limpiar todos los campos de entrada
    const inputs = document.querySelectorAll(".input-container input");
    inputs.forEach(input => input.value = "");
    inputs[0].focus(); 
}
