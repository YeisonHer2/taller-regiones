//Buscar departamentos por id
document.addEventListener("DOMContentLoaded", function () {
    const departamentoForm = document.getElementById("departamentoForm");
    const resultadoDepartamento = document.getElementById("resultadoDepartamento");

    departamentoForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        const idDepartamento = document.getElementById("idInput").value;

        // Realizar la solicitud a la API utilizando el ID del departamento
        fetch(`https://api-colombia.com/api/v1/Department/${idDepartamento}`)
            .then(response => response.json())
            .then(departamento => {
                resultadoDepartamento.innerHTML = ""; // Limpiar resultados anteriores

                if (departamento) {
                    const nombreDepartamentoElement = document.createElement("h1");
                    nombreDepartamentoElement.textContent = departamento.name;

                    const descripcionDepartamentoElement = document.createElement("p");
                    descripcionDepartamentoElement.textContent = departamento.description;

                    resultadoDepartamento.appendChild(nombreDepartamentoElement);
                    resultadoDepartamento.appendChild(descripcionDepartamentoElement);
                } else {
                    resultadoDepartamento.textContent = "Departamento no encontrado.";
                }
            })
            .catch(error => {
                console.log(error);
                resultadoDepartamento.textContent = "Error al buscar el departamento.";
            });
    });
});



