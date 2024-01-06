button = document.querySelectorAll("button");
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    circle = document.createElement("span");
    circle.classList.add("circle");
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 400);
  });
});
