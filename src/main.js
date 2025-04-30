window.addEventListener("load", function () {
  const space = document.getElementsByClassName("img-container")[0];
  const boundingObj = space.getBoundingClientRect();
  setInterval(() => {
    const [x, y] = getRandomPointInTheUniverse(
      boundingObj.left,
      boundingObj.top,
      boundingObj.bottom,
      boundingObj.right
    );
    getMesmerizedAt(x, y);
  }, 5000);
});

function getMesmerizedAt(x, y) {
  removePreviousIfAny();
  const div = document.createElement("div");
  div.style.top = y + "px";
  div.style.left = x + "px";
  div.style.position = "absolute";
  div.className = "blinking-star";
  const space = document.getElementsByClassName("img-container")[0];
  space.appendChild(div);
}

function removePreviousIfAny() {
  document.getElementsByClassName("blinking-star")[0]?.remove();
}
