const container = document.querySelector(".calc");
container.addEventListener("click", onClick);

const result = document.querySelector(".results");

let primero = "";
let segundo = "";
let operador = "";

function onClick(evento) {
  const clickear = evento.target.innerText;
  console.log(`clickado botón ${clickear}`);

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
    case "÷":
    case "×":
    case "-":
    case "+":
      gestionarOperador(clickear);
      break;
    case "←":
      borrar(clickear);
      break;
    case "=":
      igual();
      break;
  }
}

function igual() {
  console.log(primero, segundo, operador);
  let resultado;
  switch (operador) {
    case "÷":
      resultado = parseInt(primero) / parseInt(segundo);
      result.innerText = String(resultado);
      break;
    case "×":
      resultado = parseInt(primero) * parseInt(segundo);
      result.innerText = String(resultado);
      break;
    case "-":
      resultado = parseInt(primero) - parseInt(segundo);
      result.innerText = String(resultado);
      break;
    case "+":
      resultado = parseInt(primero) + parseInt(segundo);
      console.log(`Resultado suma: ${resultado}`);
      result.innerText = String(resultado);
      break;
  }
  primero = resultado;
  operador = "";
  segundo = "";
}

function mantenerNum(value) {
  if (operador === "") {
    primero = primero + value;
    result.innerText = primero;
  } else {
    segundo = segundo + value;
    result.innerText = segundo;
  }
}

function borrar(value) {
  if (operador === "") {
    primero = primero.slice(0, -1);
    if (primero === "") {
      result.innerText = "0";
    } else {
      result.innerText = primero;
    }
  } else {
    segundo = segundo.slice(0, -1);
    if (segundo === "") {
      result.innerText = "0";
    } else {
      result.innerText = segundo;
    }
  }
}

function eliminar() {
  if (operador === "") {
    primero = "";
  } else {
    segundo = "";
  }
  result.innerText = 0;
}

function gestionarOperador(value) {
  console.log(`que es value? ${value}`);
  operador = value;
}
