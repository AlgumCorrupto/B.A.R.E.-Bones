class rectanglePrimitive extends primitive {
    constructor(coords, size, color) {
        super();
        this.coords = coords;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.coords.x, this.coords.y, this.size.x, this.size.y)
    }
    update(coords, size, color) {
        this.coords = coords;
        this.size = size;
        this.color = color;
    }
    //transformar coord global em local depois local em global
    up() {
        //global to local
        let upCoords = new vec2(this.size.x, 0);
        //local to global
        upCoords = upCoords.mutVec2(new vec2(0.5, 1));
        return upCoords.addVec2(this.coords);
    }
    down() {
        let upCoords = new vec2(this.size.x, this.size.y);
        upCoords = upCoords.mutVec2(new vec2(0.5, 1));
        return upCoords.addVec2(this.coords);
    }
    left() {
        let upCoords = new vec2(0, this.size.y);
        upCoords = upCoords.mutVec2(new vec2(1, 0.5));
        return upCoords = upCoords.addVec2(this.coords);
    }
    right() {
        let upCoords = new vec2(this.size.x, this.size.y);
        upCoords = upCoords.mutVec2(new vec2(1, 0.5));
        return upCoords.addVec2(this.coords);
    }
    inBounds(coords, size) {
        let colisionX;
        let colisionY;
        if(this.size.x >= 0) {
            colisionX = this.coords.x + this.size.x >= coords.x
            && coords.x + size.x >= this.coords.x;
        } else {
            colisionX = this.coords.x + this.size.x <= coords.x
            && coords.x + size.x <= this.coords.x;
        }
        if(this.size.y >= 0 ) {
            colisionY = this.coords.y + this.size.y >= coords.y
            && coords.y + size.y >= this.coords.y;
        } else {
            colisionY = this.coords.y + this.size.y <= coords.y
            && coords.y + size.y <= this.coords.y;
        }
        console.log(colisionX, colisionY)
        return colisionX && colisionY;
    }
    relativeTo(coords) {
        return new vec2(coords.x + this.coords.x, coords.y + this.coords.y);
    }
}