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
function changeInState(state) {
    inputer = state;
}
let inputer = new inputManager();
let kb = new kbManager();
const state2In = new inputManager();
const state1In = new inputManager();
let cam = new camera(new vec2(0, 0), new vec2(1,1));
// drag related variables
var dragok = false;
var startCoords = new vec2(0, 0);
const COORDS = new vec2(0, 0);
const SIZE = new vec2(128, 128);
const COLOR = "green";
let gContext = new context([state1In, state2In])
canvas.addEventListener("mousemove", (e) => {gContext.inputer.mouseMove(e)});
canvas.addEventListener("mousedown", (e) => {gContext.inputer.mouseClick(e)});
canvas.addEventListener("mouseup", (e) => {gContext.inputer.mouseRel(e)});
canvas.addEventListener("mouseleave", (e) => {gContext.inputer.mouseLeave(e)});
canvas.addEventListener("mouseout", (e) => {gContext.inputer.mouseRel(e)});
window.addEventListener("keydown", kb.keyPress);
window.addEventListener("keyup", kb.keyRel);