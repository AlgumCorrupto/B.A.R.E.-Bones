const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
const BB = canvas.getBoundingClientRect();
const OFFSETX = BB.left;
const OFFSETY = BB.top;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
const inputer = new inputManager();
let cam = new camera(new vec2(0, 0), new vec2(1,1));
// drag related variables
var dragok = false;
var startCoords = new vec2(0, 0);
//canvas.onmousemove(inputer.mouseMove);
//canvas.onmousedown(inputer.mouseClick);
canvas.addEventListener("mousemove", inputer.mouseMove);
canvas.addEventListener("mousedown", inputer.mouseClick);
canvas.addEventListener("mouseup", inputer.mouseRel);
canvas.addEventListener("mouseleave", inputer.mouseLeave);
canvas.addEventListener("mouseout", inputer.mouseRel);
window.addEventListener("keydown", inputer.keyPress);
window.addEventListener("keyup", inputer.keyRel);