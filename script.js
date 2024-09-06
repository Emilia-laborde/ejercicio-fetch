const DATA_URL = "data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

fetch (DATA_URL)
.then (response => response.json())
.then (data=> {
  showData(data.students);
})