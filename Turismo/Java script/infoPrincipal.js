document.addEventListener("DOMContentLoaded", function () {
    mostrarInfo(); // Llamar automáticamente a la función cuando la página se carga
});
//Obtener la información de Colombia y mostrarla en el HTML
function mostrarInfo() {
    fetch("https://api-colombia.com/api/v1/Country/Colombia")
        .then(response => response.json())
        .then(colombiaInfo => {
            const colombiaDiv = document.getElementById("colombiaDiv");
            colombiaDiv.innerHTML = "";

            const nombreColombia = document.createElement("h1");
            nombreColombia.textContent = colombiaInfo.name;

            const descripcionColombia = document.createElement("p");
            descripcionColombia.textContent = colombiaInfo.description;

            const banderaColombia = document.createElement("img");
            banderaColombia.src = colombiaInfo.flags[1];

            colombiaDiv.appendChild(nombreColombia);
            colombiaDiv.appendChild(banderaColombia);
            colombiaDiv.appendChild(descripcionColombia);
        })
        .catch(error => console.log(error));
}



// JavaScript para agregar/quitar la clase "scrolled" al botón al hacer scroll
window.addEventListener("scroll", function () {
    var turismo = document.querySelector(".turismo");
    if (window.scrollY > 50) {
        turismo.classList.add("scrolled");
    } else {
        turismo.classList.remove("scrolled");
    }
});
