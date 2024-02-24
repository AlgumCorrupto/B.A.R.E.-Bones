class vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addVec2(vec) {
        return new vec2(this.x + vec.x, this.y + vec.y);
    }

    addConst(numb) {
        return new vec2(this.x + numb, this.y + numb);
    }
    
    subVec2(vec) {
        return new vec2(this.x - vec.x, this.y - vec.y);
    }

    subConst(num) {
        return new vec2(this.x - num, this.y - num);
    }
    
    mutVec2(vec) {
        return new vec2(this.x * vec.x, this.y * vec.y);
    }

    mutConst(num) {
        return new vec2(this.x * num, this.y * num);
    }

    divVec2(vec) {
        return new vec2(this.x / vec.x, this.y / vec.y);
    }

    divConst(num) {
        return new vec2(this.x / num, this.y / num);
    }
}