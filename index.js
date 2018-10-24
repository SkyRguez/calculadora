const buttonC = document.querySelector(".botonC");
buttonC.addEventListener("click", eliminar);

/*HACER QUE AL PRESIONAR BOTÓN C NOS DEVUELVA 0 EN LA PANTALLA DE RESULTADO*/

function eliminar(evento1) {
  const eliminado = erase(evento1.target.innerText);

  const result = document.querySelector(".results");
  result.innerText = eliminado;
}

function erase(n) {
  return (n = 0);
}
