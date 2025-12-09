function moverNo() {
  const boton = document.getElementById("btnNo");

  const x = Math.random() * 200;
  const y = Math.random() * 100;

  boton.style.left = x + "px";
  boton.style.top = y + "px";
}

function aceptar() {
  const mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = "💖 Te Amo, sabía que dirías que sí 💖";
}

document.getElementById("btnNo").addEventListener("click", function() {
  alert("❌ Intenta otra vez 😜");
});
