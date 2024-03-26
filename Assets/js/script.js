// Estilo personalizado para Tooltip boton "enviarcorreo"
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


// Agregar Mensaje de Correo una vez apretado Botón Enviar correo
const enviarcorreo = document.getElementById('enviarcorreo');

enviarcorreo.addEventListener('click', function(){
  alert("El correo fue enviado correctamente...")
});

// Cambio de color a rojo los titulos "INGREDIENTES - PREPARACIÓN" segun selector ID 
var ingredientesdbl = $("#ingredientes").first();
ingredientesdbl.dblclick(function(){
   ingredientesdbl.toggleClass("dbl")
});

var preparaciondbl = $("#preparacion").first();
 preparaciondbl.dblclick(function(){
     preparaciondbl.toggleClass("dbl")
 });

 // Desaparecer y aparecer el contenido de tarjetas segun selector Classe
$( ".card-title" ).click(function(){
    $(".card-text").toggle(function() {
       
    });
})