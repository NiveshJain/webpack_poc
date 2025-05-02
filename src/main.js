// load function gets called when all resources of the page are loaded, dom, css , scripts etc.
window.addEventListener("load", function () {
  const space = document.getElementsByClassName("img-container")[0];
  const boundingObj = space.getBoundingClientRect();
  id = setInterval(() => {
    const [x, y] = getRandomPointInTheUniverse(
      boundingObj.left,
      boundingObj.top,
      boundingObj.bottom,
      boundingObj.right
    );
    getMesmerizedAt(x, y);
  }, 5000);
  infoModal = new bootstrap.Modal("#infoModal");
  infoModal.show();
});

function getMesmerizedAt(x, y) {
  const star = getExplodingStarElement();
  star.style.top = y + "px";
  star.style.left = x + "px";
  const space = document.getElementsByClassName("img-container")[0];
  space.appendChild(star);
}
