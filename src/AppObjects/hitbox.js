class hitbox extends appObj {
    active = false;
    onMouseClick = (mCoords) => {
        this.active = true;
        e.preventDefault();
        e.stopPropagation();
        let size = new vec2(1, 1);
        mCoords = cam.screenToWorld(mCoords)
        let bounding = this.primitive.inBounds(mCoords, size);
        if(!bounding) {
            this.active = false;
            return false;
        }
        return true
    }
    onMouseMove = (e) => {
        //let mCoords = new vec2(e.clientX -OFFSETX , e.clientY - OFFSETY);
        //let size = new vec2(1, 1);
        //let bounding = this.inBounds(mCoords, size);
        //console.log(`bounding? ${bounding}`)
        //if(!bounding) {
        //    return;
        //}
        //offset = this.relativeTo(mCoords);
    }
    onMouseLeave = (e) => {
        super.onMouseLeave(e);
        this.updateParent(this.coords, this.size)
    }
    onMouseRel = (e) => {
        super.onMouseLeave(e);
        this.updateParent(this.coords, this.size)
    }
    constructor(coords, size, color, parent) {
        super(coords, size, color);
        this.active = false;
        this.parent = parent;
        gContext.inputStates[0].registerObserver(this)
    }

    updateParent(coords, size) {
        this.updateItself(coords, size)
        this.parent.update(this.coords, this.size, this.color)
    }
    updateItself(coords, size) {
        this.coords = coords;
        this.size = size;
        this.primitive.update(this.coords, this.size, this.color);
    }
}