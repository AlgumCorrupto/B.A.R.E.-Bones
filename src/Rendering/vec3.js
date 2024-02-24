class vec3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    addVec3(vec) {
        return new vec3(this.x + vec.x, this.y + vec.y, this.z + vec.z);
    }

    addConst(num) {
        return new vec3(this.x + num, this.y + num, this.z + num);
    }
    
    subVec3(vec) {
        return new vec3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
    }

    subConst(num) {
        return new vec3(this.x - num, this.y - num, this.z - num);
    }
    
    mutVec3(vec) {
        return new vec3(this.x * vec.x, this.y * vec.y, this.z * vec.z);
    }

    mutConst(num) {
        return new vec3(this.x * num, this.y * num, this.z * num);
    }

    divVec3(vec) {
        return new vec2(this.x / vec.x, this.y / vec.y,this.z / vec.z);
    }

    divConst(num) {
        return new vec2(this.x / num, this.y / num, this.z / num);
    }
}