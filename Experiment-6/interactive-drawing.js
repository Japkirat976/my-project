const svg = document.getElementById("canvas");
const clearBtn = document.getElementById("clearBtn");

let isDrawing = false;
let currentPath = null;

function getPoint(evt) {
  const rect = svg.getBoundingClientRect();
  return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
}

svg.addEventListener("mousedown", (e) => {
  isDrawing = true;
  const pt = getPoint(e);

  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("d", `M${pt.x},${pt.y}`);
  currentPath.setAttribute("stroke", "rgb(101, 190, 241)");  
  currentPath.setAttribute("stroke-width", 2);  
  currentPath.setAttribute("fill", "none");

  svg.appendChild(currentPath);
});

svg.addEventListener("mousemove", (e) => {
  if (!isDrawing || !currentPath) return;
  const pt = getPoint(e);

  let d = currentPath.getAttribute("d");
  currentPath.setAttribute("d", `${d} L${pt.x},${pt.y}`);
});

function finishDrawing() {
  isDrawing = false;
  currentPath = null;
}

svg.addEventListener("mouseup", finishDrawing);
svg.addEventListener("mouseleave", finishDrawing);

clearBtn.addEventListener("click", () => {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
});