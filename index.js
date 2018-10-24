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
      result.innerText = 0;
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
  }
}

function mantenerNum(value) {
  primero += value;

  result.innerText = primero;
}
