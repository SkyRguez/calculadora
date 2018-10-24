const container = document.querySelector(".calc");
container.addEventListener("click", onClick);

function onClick(evento) {
  const botones = evento.target.innerText;
  console.log(`clickado botón ${botones}`);

  const result = document.querySelector(".results");
  result.innerText = botones;
}
