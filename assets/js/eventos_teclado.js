changeBgColor = function (color) {
  var div = document.getElementById("key");
  div.style.backgroundColor = color;
};
function addNewElement(color) {
  let container = document.getElementById("container");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.border = "1px solid black";
  nuevoElemento.style.backgroundColor = color;
  container.appendChild(nuevoElemento);
}
function eraseNewElement() {
  let container = document.getElementById("container");
  let elementos = container.querySelectorAll("div");
  if (elementos.length > 1) {
    container.removeChild(elementos[elementos.length - 1]);
  }
}

document.addEventListener(
  "keydown",
  (seleccionarTecla = function (evento) {
    if (evento.key === "a" || evento.key === "A") {
      changeBgColor("pink");
    } else if (evento.key === "s" || evento.key === "S") {
      changeBgColor("orange");
    } else if (evento.key === "d" || evento.key === "D") {
      changeBgColor("skyblue");
    }
  })
);
document.addEventListener(
  "keydown",
  (seleccionarTecla = function (evento) {
    if (evento.key === "q" || evento.key === "Q") {
      addNewElement("purple");
    } else if (evento.key === "w" || evento.key === "W") {
      addNewElement("gray");
    } else if (evento.key === "e" || evento.key === "E") {
      addNewElement("brown");
    } else if (evento.key === "f" || evento.key === "F") {
      eraseNewElement();
    }
  })
);
