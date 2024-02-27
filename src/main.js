let test = []
test[0] = new interactiveRect(COORDS, SIZE, "red", 0);
test[1] = new interactiveRect(COORDS.addConst(64), SIZE, "blue", 1);
test[2] = new interactiveRect(COORDS.addConst(150), SIZE.mutConst(1.5), "green", 2)
test[3] = new interactiveRect(new vec2(canvas.width / 2, canvas.height / 2), SIZE, "olive", 3)
let idCount = 4 

let rectFactory = new intrectFactory();

setInterval(() => {
    ctx.canvas.width = window.innerWidth;
    ctx.transform(cam.size.x, 0, 0, cam.size.y, cam.position.x * cam.size.x - cam.scaledOffset.x, cam.position.y * cam.size.y - cam.scaledOffset.y)
    cam.update();
    clear();
    for(let i = test.length - 1; i >= 0; i--) {
        test[i].draw()
    }
}, 6)