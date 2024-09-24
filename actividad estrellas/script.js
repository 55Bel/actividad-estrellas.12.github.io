const URL = "https://nataliasotelo.github.io/act-estrellas/estrellas.json";

fetch(URL)
  .then(response => {
    // Manejo de la respuesta
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json(); // o response.text(), response.blob(), etc.
  })
  .then(data => {
    // Manejo de los datos recibidos
    listado = data;
    showData(listado);
  })
  .catch(error => {
    // Manejo de errores
    console.error('Hubo un problema con la solicitud fetch:', error);
  });

  function showData(listado) {
    const lista = document.getElementById("lista");
    lista.innerHTML = '';
    listado.forEach(cliente => {
        const li = document.createElement("li");
        li.innerHTML += `
        Nombre:${cliente.name} <br>
        Compañia: ${cliente.company} ${cliente.numberrange} 
        <hr>
        `;
        lista.appendChild(li);
    }); 
}

