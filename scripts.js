$(document).ready(function () {
  console.log("Página cargada y lista.");
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

document.addEventListener("DOMContentLoaded", function() {
  const hospedajeButton = document.getElementById("modal-hospedaje");
  const paseosButton = document.getElementById("modal-paseos");
  const trasladosButton = document.getElementById("modal-traslados");

  hospedajeButton.addEventListener("click", function() {
    $("#modal-hospedaje").modal("show");
  });

  paseosButton.addEventListener("click", function() {
    $("#modal-paseos").modal("show");
  });

  trasladosButton.addEventListener("click", function() {
    $("#modal-traslados").modal("show");
  });
});

const formulario = document.getElementById("miFormulario");
const enviarBtn = document.getElementById("enviarBtn");
const mensajeError = document.getElementById("mensajeError"); // Elemento para mostrar el mensaje de error

enviarBtn.addEventListener("click", function(event) {
  const allValid = [...formulario.elements].every(element => !element.required || element.value);

  if (!allValid) {
    event.preventDefault();
    mensajeError.textContent = "Por favor, complete todos los campos obligatorios.";
  } else {
    event.preventDefault();
    const formData = new FormData(formulario);
    // Aquí enviarías los datos del formulario al servidor
    alert("¡Tu mensaje ha sido enviado! Nos pondremos en contacto con ud a la brevedad posible.");
  }
});