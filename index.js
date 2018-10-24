const container = document.querySelector(".calc");
container.addEventListener("click", onClick);

const result = document.querySelector(".results");

let primero = "";
let segundo = "";
let operador = "";

function onClick(evento) {
  const clickear = evento.target.innerText;
  console.log(`clickado botón ${clickear}`);

  result.innerText = clickear;

  switch (clickear) {
    case "C":
      eliminar();
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      mantenerNum(clickear);
      break;
    case "←":
      borrar(clickear);
      break;
  }
}

function mantenerNum(value) {
  primero += value;

  result.innerText = primero;
}

function borrar(value) {
  primero = primero.slice(0, -1);
  if (primero === "") {
    result.innerText = "0";
  } else {
    result.innerText = primero;
  }
}

function eliminar() {
  result.innerText = 0;
}
