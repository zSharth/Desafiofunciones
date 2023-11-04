function pintar(color) {
  const ele = document.getElementById("ele1");
  ele.style.backgroundColor = color;
}

pintar("green");

ChangeBgColorOfAnElement = function (elementId, color) {
  ele = document.getElementById(elementId).style.backgroundColor = color;
};

const div = document.getElementById("ele1");
div.addEventListener("click", () => ChangeBgColorOfAnElement("ele1", "yellow"));
