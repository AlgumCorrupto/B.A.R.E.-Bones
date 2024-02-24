const COORDS = new vec2(0, 0);
const SIZE = new vec2(128, 128);
const COLOR = "green";
let test = []
test[0] = new interactiveRect(COORDS, SIZE, "red");
test[1] = new interactiveRect(COORDS.addConst(64), SIZE, "blue");
test[2] = new interactiveRect(COORDS.addConst(150), SIZE.mutConst(1.5), "green")
test[3] = new interactiveRect(new vec2(canvas.width / 2, canvas.height / 2), SIZE, "olive")

setInterval(() => {
    ctx.canvas.width = window.innerWidth;
    ctx.transform(cam.size.x, 0, 0, cam.size.y, cam.position.x * cam.size.x - cam.scaledOffset.x, cam.position.y * cam.size.y - cam.scaledOffset.y)
    cam.update();
    clear();
    for(let i = test.length - 1; i >= 0; i--) {
        test[i].draw()
    }
}, 6)