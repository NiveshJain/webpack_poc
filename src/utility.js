function getRandomPointInTheUniverse(left, top, bottom, right) {
  const x = Math.random() * (right - left) + left;
  const y = Math.random() * (bottom - top) + top;
  return [x, y];
}

function getExplodingStarElement() {
  let star;
  if (document.contains(document.querySelector(".blinking-star"))) {
    return document.querySelector(".blinking-star");
  } else {
    star = document.createElement("div");
    star.style.position = "absolute";
    star.className = "blinking-star";
    star.addEventListener("click", function (event) {
      clearInterval(id);
      infoModal = new bootstrap.Modal("#infoModal");
      document.querySelector(".modal-title").textContent = "Fun fact";
      document.querySelector(".modal-body").textContent =
        "An exploding star (Supernova) can be incredibly bright, outshining an entire galaxy for a period of time";
      infoModal.show();
    });
  }
  return star;
}
