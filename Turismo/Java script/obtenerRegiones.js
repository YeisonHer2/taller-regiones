//Obtener las regiones de Colombia y mostrarlas en el HTML
function mostrarRegiones() {
    fetch("https://api-colombia.com/api/v1/Region")
        .then(response => response.json())
        .then(regiones => {
            const regionesDiv = document.getElementById("regionesDiv");
            regionesDiv.innerHTML = "";
            //For each porque es un arrelgo lo que queremos mostrar.
            regiones.forEach(region => {
                const nombreRegion = document.createElement("h1");
                nombreRegion.textContent = region.name;

                const descriptionRegion = document.createElement("p");
                descriptionRegion.textContent = region.description;

                regionesDiv.appendChild(nombreRegion);
                regionesDiv.appendChild(descriptionRegion);
            });
        })
        .catch(error => console.log(error));
}


