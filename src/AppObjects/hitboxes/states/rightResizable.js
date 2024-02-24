class rightResizable{
    constructor(parent) {
        this.parent = parent;
    }

    updateItself(coords) { 
        this.parent.coords = this.parent.parent.primitive.right();
        this.parent.size = new vec2(12, 12);
        let halfSize = this.parent.size.mutConst(0.5);
        this.parent.coords = this.parent.coords.subVec2(halfSize);
        this.parent.primitive.draw();
    }
    updateParent(coords, size) {
        this.parent.updateItself(coords, size)
        this.parent.parent.update(coords, size, this.parent.parent.color)
    }

    handleMove(mCoords) {
        //distance moved by the mouse
        let dCoords = mCoords.subVec2(startCoords);
        dCoords = dCoords.divVec2(cam.size)
        //update size
        let newSize = this.parent.parent.size.addVec2(new vec2(dCoords.x, 0));
        this.updateParent(this.parent.parent.coords, newSize);
    }

}

// centerPos = halfSize - origin