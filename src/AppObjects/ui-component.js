class interactiveRect extends appObj {
    constructor(coords, size, color) {
        super(coords, size, color)
        this.primitive = new rectanglePrimitive(coords, size, color);
        this.resizableAreas = [
            resizableFactory.createLoc(coords, size, "#FFFF00AA", this, "right"),
            resizableFactory.createLoc(coords, size, "#FFFF00AA", this, "left"),
            resizableFactory.createLoc(coords, size, "#FFFF00AA", this, "up"),
            resizableFactory.createLoc(coords, size, "#FFFF00AA", this, "down")
        ]
        this.dragabbleHitArea = new rectDraggable(coords, size, color, this);
        this.draw();
    }
    updateHitboxes() {
        this.dragabbleHitArea.updateItself(this.coords, this.size);
        for(let i = 0; i < this.resizableAreas.length; i++) {
            this.resizableAreas[i].updateItself(this.coords, this.size);
        }
    }
    update(coords, size, color) {
        this.coords = coords;
        this.size = size;
        this.color = color;
    }
    draw() {
        this.primitive.draw();
        for(let i = 0; i < this.resizableAreas.length; i++) {
            this.resizableAreas[i].draw();
        }
        this.primitive.update(this.coords, this.size, this.color)
        this.updateHitboxes();
    }
}