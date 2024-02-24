class resizableHitbox extends hitbox {
    location
    constructor(coords, size, color, parent) {
        super(coords, size,"#FFFF00AA", parent)
    }
    changeLocation(location) {
        this.location = location;
    }
    updateItself(coords) {
        this.location.updateItself(coords);
    }
    updateParent(coords, size) {
        this.location.updateParent(coords, size)
    }
    onMouseClick = (mCoords) => {
        let size = new vec2(1, 1);
        mCoords = cam.screenToWorld(mCoords)
        let bounding = this.primitive.inBounds(mCoords, size);
        if(!bounding) {
            return false;
        }
        this.active = true;
        console.log(`bounding? ${bounding}`)
        return true;
        //offset = this.relativeTo(mCoords);
    }
    onMouseMove = (mCoords) => {
        if(!this.active) {
            return;
        }
        this.location.handleMove(mCoords);
        //this.update(this.coords.addVec2(dCoords), this.size);
    }
    onMouseLeave = (mCoords) => {
        if(this.active) {
            this.active = false;
        }
    }
    onMouseRel = (mCoords) => {
        if(this.active) {
            this.active = false;
        }
    }
}