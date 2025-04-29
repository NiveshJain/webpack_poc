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

function getRandomPointInTheUniverse(left, top, bottom, right) {
  const x = Math.random() * (right - left) + left;
  const y = Math.random() * (bottom - top) + top;
  return [x, y];
}

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
