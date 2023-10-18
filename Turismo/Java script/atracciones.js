document.addEventListener("DOMContentLoaded", function () {
    const atraccionesForm = document.getElementById("atraccionesForm");
    const resultadoAtracciones = document.getElementById("resultadoAtracciones");

    atraccionesForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        const idAtracciones = document.getElementById("idInput").value;

        // Realizar la solicitud a la API utilizando el ID del departamento para mostrar las atracciones
        fetch(`https://api-colombia.com/api/v1/TouristicAttraction/${idAtracciones}`)
            .then(response => response.json())
            .then(atraccion => {
                resultadoAtracciones.innerHTML = ""; // Limpiar resultados anteriores

                if (atraccion) {
                    const nombreAtraccionElement = document.createElement("h1");
                    nombreAtraccionElement.textContent = atraccion.name;

                    const descripcionAtraccionElement = document.createElement("p");
                    descripcionAtraccionElement.textContent = atraccion.description;

                    const imagenAtraccionElement = document.createElement("img");
                    imagenAtraccionElement.src = atraccion.images[0]; // Utiliza la primera imagen (si hay varias)

                    resultadoAtracciones.appendChild(nombreAtraccionElement);
                    resultadoAtracciones.appendChild(descripcionAtraccionElement);
                    resultadoAtracciones.appendChild(imagenAtraccionElement);
                } else {
                    resultadoAtracciones.textContent = "Atracción no encontrada.";
                }
            })
            .catch(error => {
                console.log(error);
                resultadoAtracciones.textContent = "Error al buscar la atracción.";
            });
    });
});



