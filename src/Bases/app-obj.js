class appObj {
    primitive;
    constructor(coords, size, color) {
        this.coords = coords;
        this.size = size;
        this.color = color;
    }

    draw() {
        this.primitive.update(this.coords, this.size, this.color)
        this.primitive.draw()
    }
    update(coords, size, color) {
        this.coords = coords;
        this.size = size;
        this.color = color;
    }
}