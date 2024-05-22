// Obtener referencias a los elementos
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("closeBtn")[0];

// Abrir el modal cuando se hace clic en el botón
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal cuando se hace clic en la "x" o fuera del contenido
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
